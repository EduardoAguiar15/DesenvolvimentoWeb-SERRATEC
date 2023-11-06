import { useState } from "react";
import { api } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { Cad } from "./styled";
import Luigi from "../../assets/Luigi3.jpg";
import { GlobalStyle } from "../../Global/globalStyle";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const addUser = async (nome, email, senha) => {
    await api.post("/users", {
      nome: nome,
      email: email,
      senha: senha,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome == "" || email == "" || senha == "") {
      return 0;
    } else {
      addUser(nome, email, senha);
    }

    setNome("");
    setEmail("");
    setSenha("");

    navigate("/");
  };

  return (
    <div>
      <Cad>
        <div className="cadastro-container">
          <h1>Cadastro</h1>
          <img src={Luigi} alt="Luigi" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button type="submit">Cadastrar</button>
          </form>
          <div className="voltar">

            <Link to={`/`}>Voltar para o login</Link>

          </div>
        </div>
      </Cad>
      <GlobalStyle />
    </div>
  );
}

export default Cadastro;