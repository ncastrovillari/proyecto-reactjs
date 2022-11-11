import { Heading, Text, Wrap } from "@chakra-ui/react";
import { ItemList } from "../ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    useEffect(() => {

        const productsColecction = collection(db, 'products');
        const productCategory = query(productsColecction, where('category', '==', `${category}`))

        let url= ( category === undefined ? productsColecction : productCategory)
        
        getDocs(url)
        .then((data)=>{
            const lista = data.docs.map((product)=>{
                return {
                    ...product.data(),
                    id: product.id
                }
            })
            setListProduct(lista)
        })
        .finally(()=>{
            setLoading(false);
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
