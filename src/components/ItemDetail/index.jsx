import { Center, Image, VStack, HStack, Heading, Text } from "@chakra-ui/react"
import { ItemCount } from "../ItemCount"

const ItemDetail = ({ listProduct }) => {

    const { image, product, price, stock, config, description, initial } = listProduct

    return (
        <Center>
            <VStack>
                    <Image src={image} w="300px" p="15px"/>
                    <Heading>{product}</Heading>
                    <Text>{description}</Text>
                    <Text>Precio: ${price}</Text>
                    <Text>Stock: {stock}</Text>
                    <ItemCount initial={1} stock={20} onAdd={() => { }} />
            </VStack>
        </Center>

    )
}

export { ItemDetail }

