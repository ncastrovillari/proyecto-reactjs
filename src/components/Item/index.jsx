import { Button, Link, VStack, Text, Image } from "@chakra-ui/react"


const Item = ({ product }) => {

    return(
        <VStack boxShadow='lg' p='6' rounded='md' bg='white' m="15px" maxwidth="40px" minwidth="17px">
            <Image src={product.image} alt={product.product} w="200px" />
            <Text>{product.product}</Text>
            <Text>${product.price}</Text>
            <Button colorScheme='green' size='xs'>
                <Link>Ver detalle</Link>
            </Button>
        </VStack>
    )
}

export { Item }

