import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext"
import { FormularioCliente } from './components/Form/FormularioCliente.jsx';

function App() {
  return (
    <ChakraProvider>
      <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la tienda de Bodega Creación" />} />
          <Route path="/category/:category" element={<ItemListContainer greeting="Bienvenidos a la tienda de Bodega Creación" />} />
          <Route path="/product/:id" element={<ItemDetailContainer /> } />
          <Route path="/cart" element={<Cart />} />
          <Route path='/FormularioCliente' element= { <FormularioCliente /> } />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;