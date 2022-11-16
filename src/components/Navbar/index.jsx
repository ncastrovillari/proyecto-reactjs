import { HStack, Spacer, } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget";
import { NavLink } from "react-router-dom";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

const Navbar = () => {

  const [loading, setLoading] = useState(true)
  const [categories, setCategory] = useState([])

  useEffect(() => {
    const querydb = getFirestore();
    const queryColletion = collection(querydb, 'categorias');

    getDocs(queryColletion)
    .then(res => {
      setLoading(false)
      setCategory(res.docs.map(product => ({url: product.id, ...product.data() })))
    })
  }, [])

  if (loading) {
    return <></>
  }

  return (
    <HStack className="navbar">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <h1 className="titulo">Tienda - Bodega Creación</h1>
      <Spacer />
      <HStack spacing="30px" p="15px">
      {
            categories.map((category) => (
              <li style={{listStyleType:'none'}}>
                <NavLink key={category.name} to={`/category/${category.url}`}>{category.name}</NavLink>
              </li>
            ))
          }
        <CartWidget />
      </HStack>
    </HStack>
  );
};

export { Navbar };