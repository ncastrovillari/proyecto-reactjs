import { Button, Link, Flex, Spacer, Text, Image, Box, Center } from "@chakra-ui/react"
import { NavLink } from "react-router-dom";


const Item = ({ product }) => {

    return (
        <Flex>
            <Box boxShadow='lg' p='8' rounded='md' bg='#94dbcd' m="15px" width='350px'>
                <Center>
                    <Image src={product.image} alt={product.product} w="200px" />
                </Center>
                <Center>
                    <Text align="center">{product.product}</Text>
                </Center>
                <Text align="center">${product.price}</Text>
                <Center>
                    <Button colorScheme='green' size='xs'>
                        <NavLink to={`product/${product.id}`}>
                        <Link>Ver detalle</Link>
                        </NavLink>
                    </Button>
                </Center>
                <Spacer />
            </Box>
        </Flex>
    )
}

export { Item }

