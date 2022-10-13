import { VStack, Center, Text, Image, HStack, Button } from "@chakra-ui/react"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()

    const comprador = {
        nombre: "Juan",
        apellido: "Perez",
        email: "juanperez@gmail.com",
        telefono: "1167891234"
    };

    const finalizarCompra = ()=>{
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            comprador,
            items: cartList,
            date: serverTimestamp(),
            totalPrice: totalPrice(),
        })
        .then(result=>{
            console.log(result.id);
            cleanCart();
        })
    }

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
                    <Text>Tu carrito está vacío</Text>
                    :
                    <>
                    <Text as="b">Total: ${totalPrice()}</Text>
                    <Button variant="solid" colorScheme="green" size="sm" onClick={cleanCart}>Vaciar carrito</Button>
                    <Button variant="solid" colorScheme="green" size="sm" onClick={finalizarCompra}>Finalizar compra</Button>
                    </>
                }
            </VStack>
        </Center>
    )
}

export { Cart }

