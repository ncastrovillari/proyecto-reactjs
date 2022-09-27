import { Button, Flex, Spacer, Text, Image, Box, Center } from "@chakra-ui/react"
import { NavLink } from "react-router-dom";


const Item = ({ product }) => {

    let redireccion = `../product/${product.id}`

    return (
        <Flex>
            <Box boxShadow='md' p='8' rounded='md' bg='#85c5b8' m="15px" width='350px'>
                <Center>
                    <Image src={product.image} alt={product.product} w="200px" />
                </Center>
                <Center>
                    <Text align="center" as="b">{product.product}</Text>
                </Center>
                <Text align="center" fontSize="xl">${product.price}</Text>
                <Center>
                    <Button colorScheme='green' size='xs'>
                        <NavLink to={`product/${product.id}`}>
                            <NavLink to={redireccion}>Ver detalle</NavLink>
                        </NavLink>
                    </Button>
                </Center>
                <Spacer />
            </Box>
        </Flex>
    )
}

export { Item }

