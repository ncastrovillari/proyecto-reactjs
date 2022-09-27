import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la tienda de Bodega Creación" />} />
          <Route path="/category/:category" element={<ItemListContainer greeting="Bienvenidos a la tienda de Bodega Creación" />} />
          <Route path="/product/:id" element={<ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
