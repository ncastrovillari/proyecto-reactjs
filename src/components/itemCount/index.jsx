import { useState } from 'react'
import { HStack, Button, Text } from '@chakra-ui/react'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    const handleClick = () => onAdd(count)

    return(
        <HStack>
            <Button variant="solid" colorScheme="green" size="sm" onClick={decrease}>-</Button>
            <Text as="b">{count}</Text>
            <Button variant="solid" colorScheme="green" size="sm" onClick={increase}>+</Button>
            <Button variant="solid" colorScheme="green" size="sm" onClick={handleClick}>Agregar al carrito</Button>
        </HStack>
    )
}

export { ItemCount }
