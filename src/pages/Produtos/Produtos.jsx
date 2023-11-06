import { useEffect, useState } from "react";
import { useAuth } from "../../components/Authenticate/AuthContext";
import { Navigate } from "react-router-dom";
import { api } from "../../api";
import { MainContent, Rodape } from "./styled";
import footerImg from "../../assets/bloco-super-mario.png";
import { formatPrice } from "../../utils/formatPrice";

function Produtos() {
  const { isLogged, userLogged } = useAuth();
  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    const response = await api.get("/produtos");
    setProdutos(response.data);
  };

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  const openModal = (produto) => {
    setSelectedProduct(produto);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const filteredProdutos = produtos.filter((produto) => {
    return produto.nome.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const comprarProduto = async () => {
    if (selectedProduct) {
      const response = await api.get("/pedidos", {
        params: {
          idUser: userLogged.id,
        },
      });

      let userOrder = response.data[0];

      if (!userOrder) {
        const newOrder = {
          valorTotal: selectedProduct.preco,
          idUser: userLogged.id,
          itens: [
            {
              idProduto: selectedProduct.id,
              imgurl: selectedProduct.imgurl,
              nome: selectedProduct.nome,
              valor: selectedProduct.preco,
            },
          ],
        };

        const createResponse = await api.post("/pedidos", newOrder);
        userOrder = createResponse.data;
      } else {
        const novoValorTotal = userOrder.valorTotal + selectedProduct.preco;

        const novoItem = {
          idProduto: selectedProduct.id,
          imgurl: selectedProduct.imgurl,
          nome: selectedProduct.nome,
          valor: selectedProduct.preco,
        };

        const updatedOrder = {
          valorTotal: novoValorTotal,
          idUser: userLogged.id,
          itens: userOrder.itens.concat(novoItem),
        };

        await api.put(`/pedidos/${userOrder.id}`, updatedOrder);
      }

      closeModal();
    }
  };

  return (
    <>
      <MainContent>
        <h1>Jogos</h1>

        <input
          type="text"
          placeholder="Pesquisar por nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ul>
          {filteredProdutos.map(
            (produto) =>
              produto.quantidade > 0 && (
                <li key={produto.id}>
                  <img src={produto.imgurl} alt="imagemDoProduto" />
                  <h2>{produto.nome}</h2>
                  <p>Preço: {formatPrice(produto.preco)}</p>
                  <button onClick={() => openModal(produto)}>
                    Ver Detalhes e Comprar
                  </button>
                </li>
              )
          )}
        </ul>

        {selectedProduct && (
          <div className="modal">
            <div className="modal-content">
              <img src={selectedProduct.imgurl} alt="imagemDoProduto" />
              <h2>{selectedProduct.nome}</h2>
              <p>Preço: {formatPrice(selectedProduct.preco)}</p>
              <p>{selectedProduct.descricao}</p>
              <button onClick={comprarProduto}>Comprar</button>
              <button onClick={closeModal}>Fechar</button>
            </div>
          </div>
        )}
      </MainContent>
      <Rodape>
        <img src={footerImg} alt="footer" />
      </Rodape>
    </>
  );
}

export default Produtos;
