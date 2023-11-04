/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authenticateUser from "../../components/Authenticate";
import { useAuth } from "../../components/Authenticate/AuthContext";
import { Log } from "./styles";
import { GlobalStyle } from "../../Global/globalStyle";
import gif from "../../assets/Mario.gif"

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);
  const { setIsLogged } = useAuth();

  const handleLogin = async () => {
    const user = await authenticateUser(email, senha);

    if (user) {
      setIsLogged(true);
      setMessage(false);
      navigate("/home/produtos");
    } else {
      setMessage(true);
    }
  };

  return (
    <div>
      <Log>
        <div className="login-container">
          <h2>Página de Login</h2>
          <img src={gif} alt="marioGif" />
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
          <div className="cadastrar">
            <Link to={`cadastrar`}>Cadastrar</Link>
          </div>
        </div>
      </Log>
      <GlobalStyle />
    </div>
  );
}

export default Login;
