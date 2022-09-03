import './App.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'

function App() {
  return ( 
    <ChakraProvider>
      <Heading>Tienda - Bodegas Creación</Heading>
      <Navbar />
   </ChakraProvider>
  )
}

export default App
