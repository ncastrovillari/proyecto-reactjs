import { Heading, Text, Wrap } from "@chakra-ui/react"
import { ItemList } from "../ItemList"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                if (category) {
                    setLoading(false)
                    setListProduct(res.filter(prod => prod.category === category))
                } else {
                    setLoading(false)
                    setListProduct(res)
                }
            })
    }, [category])

    return (
        <>
            <Heading as='h2' size='md' align="center" hidden>{greeting}</Heading>
            <Wrap spacing='15px' justify='center'>
                {!loading
                    ?
                    <ItemList listProduct={listProduct} />
                    :
                    <Text>Cargando...</Text>
                }
            </Wrap>
        </>
    )
}

export { ItemListContainer };
