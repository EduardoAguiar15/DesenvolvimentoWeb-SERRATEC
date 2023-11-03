/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Login() {

  return (
    <div>
      <h1>Login</h1>
      <Link to={`cadastro`}>Cadastro</Link>
    </div>
  );
}

export default Login;
