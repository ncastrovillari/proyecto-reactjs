import { VStack, Center, Text, Image, HStack, Button } from "@chakra-ui/react"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import { NavLink, Link } from "react-router-dom"

const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()
    const { idCompra } = useState("")

    return (
        <Center>
            <VStack boxShadow='md' p='8' rounded='md' bg='#85c5b8' m="15px" width='850px'>
                {cartList.map(prod =>
                    <HStack key={prod.id}>
                        <Image src={prod.image} w="150px"></Image>
                        <Text as="b">{prod.product}</Text>
                        <Text as="b">Cantidad: {prod.quantity}</Text>
                        <Text as="b">Precio unitario: {prod.price}</Text>
                        <Button variant="solid" colorScheme="red" size="sm" onClick={() => removeProduct(prod.id)}>X</Button>
                    </HStack>
                )}
                {cartList.length === 0 ?
                    <><Text>Tu carrito está vacío</Text>
                    <NavLink to={'/'}><Button variant="solid" colorScheme="green" size="sm">Inicio</Button></NavLink></>
                    :
                    <>
                    <Text as="b">Total: ${totalPrice()}</Text>
                    <Button variant="solid" colorScheme="green" size="sm" onClick={cleanCart}>Vaciar carrito</Button>
                    <Link to='/FormularioCliente'><Button variant="solid" colorScheme="green" size="sm" idCompra={idCompra}>Finalizar compra</Button></Link>
                    </>
                }
            </VStack>
        </Center>
    )
}

export { Cart }
