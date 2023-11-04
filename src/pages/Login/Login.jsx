/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authenticateUser from "../../components/Authenticate";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);

  const handleLogin = async () => {
    const user = await authenticateUser(email, senha);

    if (user) {
      setMessage(false);
      navigate("/home/produtos");
    } else {
      setMessage(true);
    }
  };

  return (
    <div>
      <h2>Página de Login</h2>
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
      <button onClick={handleLogin}>Entrar</button>
      {message && <p>Usuário não encontrado</p>}
      <div>
      <Link to={`cadastrar`}>Cadastrar</Link>
      </div>
    </div>
  );
}

export default Login;
