import { HStack, Spacer, Link } from "@chakra-ui/react";
// import { Component } from "react";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget";

const Navbar = () => {
  return (
    <HStack className="navbar">
      <img src={logo} alt="" />
      <h1 className="titulo">Tienda - Bodega Creación</h1>
      <Spacer />
      <HStack className="items">
        <Link>Malbec</Link>
        <Link>Cabernet</Link>
        <CartWidget />
      </HStack>
    </HStack>
  );
};

export { Navbar };

