import { Center, Image, VStack, HStack, Heading, Text } from "@chakra-ui/react"
import { FaCreditCard, FaHeart } from "react-icons/fa"
import { ItemCount } from "../ItemCount"

const ItemDetail = ({ listProduct }) => {

    const { image, product, price, stock, description, } = listProduct

    return (
        <Center>
            <VStack boxShadow='md' p='8' rounded='md' bg='#85c5b8' m="15px" width='650px'>
                <Image src={image} w="300px" p="15px" />
                <Heading>{product}</Heading>
                <Text>{description}</Text>
                <Text fontSize="xl" as="b">Precio: ${price}</Text>
                <Text>Stock: {stock}</Text>
                <ItemCount initial={1} stock={20} onAdd={() => { }} />
                <HStack>
                    <FaCreditCard size="35px"></FaCreditCard>
                    <FaHeart size="35px"></FaHeart>
                </HStack>
            </VStack>
        </Center>

    )
}

export { ItemDetail }

