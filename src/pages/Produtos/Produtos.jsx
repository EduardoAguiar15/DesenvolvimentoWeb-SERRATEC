import { useEffect, useState } from "react";
import { useAuth } from "../../components/Authenticate/AuthContext";
import { Navigate } from "react-router-dom";
import { api } from "../../api";
import { MainContent, Rodape } from "./styled";
import footerImg from "../../assets/bloco-super-mario.png";
import { formatPrice } from "../../utils/formatPrice";
import { useCarrinho } from "../Carrinho/CarrinhoContext";

function Produtos() {
  const { isLogged, userLogged } = useAuth();
  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { pedidos, setPedidos } = useCarrinho();
  const [quantity, setQuantity] = useState(1);

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
    setQuantity(1);
  };

  const filteredProdutos = produtos.filter((produto) => {
    return produto.nome.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const comprarProduto = async () => {
    const newOrder = {
      valorTotal: selectedProduct.preco * quantity,
      idUser: userLogged.id,
      itens: [
        {
          idProduto: selectedProduct.id,
          imgurl: selectedProduct.imgurl,
          nome: selectedProduct.nome,
          valor: selectedProduct.preco,
          quantidade: quantity,
        },
      ],
    };

    const novosPedidos = [...pedidos, newOrder];
    setPedidos(novosPedidos);

    closeModal();
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
                    Ver Detalhes
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
                <label>Selecione a quantidade</label>
              <div className="comprar">
                <input
                  className="input-quantidade"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  min={1}
                />

                <button onClick={comprarProduto}>Adicionar ao carrinho</button>
              </div>
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
