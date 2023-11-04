/* eslint-disable no-unused-vars */
import React from "react";
import { useAuth } from "../../components/Authenticate/AuthContext";
import { Navigate } from "react-router-dom";

function Produtos() {

  const { isLogged } = useAuth(); 

  if (!isLogged) {
    return <Navigate to="/" />; 
  }

  return (
    <div>
      <h1>Produtos</h1>
    </div>
  );
}

export default Produtos;
