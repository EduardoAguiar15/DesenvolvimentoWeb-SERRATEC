import { Link } from "react-router-dom";
import { Navegacao } from "./styled";

const NavBar = () => {
  return (
    <Navegacao>
      <div className="logo"> 
        <h1>Retro Games</h1>
      </div>
      <div className="paginas">
        <Link to={`pedidos`}>Pedidos</Link>
        <Link to={`produtos`}>Produtos</Link>
      </div>
    </Navegacao>
  );
};

export default NavBar;
