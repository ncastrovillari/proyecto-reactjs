import { useState } from 'react'
import { HStack, Button, Text } from '@chakra-ui/react'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const sumar = () => count < stock && setCount(count + 1)
    const restar = () => count > initial && setCount(count - 1)

    return(
        <HStack>
            <Button variant="solid" colorScheme="green" size="sm" onClick={restar}>-</Button>
            <Text as="b">{count}</Text>
            <Button variant="solid" colorScheme="green" size="sm" onClick={sumar}>+</Button>
            <Button variant="solid" colorScheme="green" size="sm" onClick={onAdd}>Agregar al carrito</Button>
        </HStack>
    )
}

export { ItemCount }
