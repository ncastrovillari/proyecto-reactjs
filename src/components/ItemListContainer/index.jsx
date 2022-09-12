import { Heading } from "@chakra-ui/react"
import { ItemCount } from "../itemCount"

const ItemListContainer = ({greeting}) => {
    
    return(
        <>
        <Heading>{greeting}</Heading>
        <ItemCount initial={1} stock={20} onAdd={() => {}} />
        </>
    )
}

export { ItemListContainer }
