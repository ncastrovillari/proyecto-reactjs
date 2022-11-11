import { HStack, Spacer, Link } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <HStack className="navbar">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <h1 className="titulo">Tienda - Bodega Creación</h1>
      <Spacer />
      <HStack spacing="30px" p="15px">
        <NavLink to="/category/Malbec">
          <Link>Malbec</Link>
        </NavLink>
        <NavLink to="/category/Cabernet">
          <Link>Cabernet</Link>
        </NavLink>
        <CartWidget />
      </HStack>
    </HStack>
  );
};

export { Navbar };

