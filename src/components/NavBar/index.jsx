import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to={`pedidos`}>Pedidos</Link>
      <Link to={`produtos`}>Produtos</Link>
    </nav>
  );
};

export default NavBar;
