import { useState, useEffect } from "react"
import { Text } from "@chakra-ui/react"
import { ItemDetail } from '../ItemDetail'
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [ listProduct, setListProduct ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const { id } = useParams()

    useEffect(() => {

        const productCollection = collection(db, 'products');
        const refDoc = doc(productCollection, id)
        getDoc(refDoc)
        .then((result)=>{
            setListProduct(
                {
                id:result.id,
                ...result.data(),
                }
            )
        })
        .finally(()=>{
            setLoading(false);
        })
    }, [id])
    
    return(
        <>
            {!loading ? <ItemDetail listProduct={listProduct} />  : <Text>Cargando...</Text> }
        </>
    )
}

export { ItemDetailContainer }

