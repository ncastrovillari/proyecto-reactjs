import { useState } from 'react'
import { HStack, Button, Text } from '@chakra-ui/react'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const sumar = () => count < stock && setCount(count + 1)
    const restar = () => count > initial && setCount(count - 1)

    return(
        <HStack>
            <Button onClick={restar}>-</Button>
            <Text>{count}</Text>
            <Button onClick={sumar}>+</Button>
            <Button>Agregar al carrito</Button>
        </HStack>
    )
}

export { ItemCount }
