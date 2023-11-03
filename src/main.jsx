import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Produtos from "./pages/Produtos/Produtos.jsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import Pedidos from "./pages/Pedidos/Pedidos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home/produtos",
        element: <Produtos />,
      },
      {
        path: "/home/pedidos",
        element: <Pedidos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
