/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { api } from "../../api";
import { Link, useNavigate } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState(false);
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
      setMessage(true)
      return 0;
    } else {
      setMessage(false)
      addUser(nome, email, senha);
    }

    setNome("");
    setEmail("");
    setSenha("");

    navigate("/");
  };

  return (
    <div>
      <h1>Cadastro</h1>
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
      {message && <p>Usuário não encontrado</p>}
      <button>
        <Link to={`/`}>Voltar para o login</Link>
      </button>
    </div>
  );
}

export default Cadastro;
