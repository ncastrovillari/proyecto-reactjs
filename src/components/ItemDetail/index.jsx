import { Center, Image, VStack, HStack, Heading, Text, Button } from "@chakra-ui/react"
import { useState } from "react"
import { FaCreditCard, FaHeart } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { ItemCount } from "../ItemCount"

const ItemDetail = ({ listProduct }) => {

    const { image, product, price, stock, description, initial } = listProduct

    const [ agregado, setAgregado ] = useState(false)

    const onAdd = () => {
        setAgregado(true)
    }

    return (
        <Center>
            <VStack boxShadow='md' p='8' rounded='md' bg='#85c5b8' m="15px" width='650px'>
                <Image src={image} w="300px" p="15px" />
                <Heading>{product}</Heading>
                <Text>{description}</Text>
                <Text fontSize="xl" as="b">Precio: ${price}</Text>
                <Text>Stock: {stock}</Text>
                {
                    agregado ?
                        <NavLink to="/cart">
                            <Button variant="solid" colorScheme="green" size="sm">Ir al carrito</Button>
                        </NavLink>
                        :
                        <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
                }
                <HStack>
                    <FaCreditCard size="35px"></FaCreditCard>
                    <FaHeart size="35px"></FaHeart>
                </HStack>
            </VStack>
        </Center>

    )
}

export { ItemDetail }

