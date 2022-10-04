// import ThePromise from "../../utils/ThePromise"
import { useEffect, useState } from "react"
// import { data } from "../../utils/data";
import ItemRender from "../Item/ItemRender";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../../utils/firebaseConfig";


const ItemList = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    console.log(categoryId + 'log');

    useEffect(() => {
        firestoreFetch(categoryId)
            .then(result => setProducts(result))
    },[categoryId])

   

    return (
        <>
            {
                products.map(item => (

                    <ItemRender

                        key={item.id}
                        id={item.id}
                        game={item.game}
                        console={item.console}
                        stock={item.stock}
                        price={item.price}
                        thumbnail={item.thumbnail}
                        description={item.description}
                        categoryId={item.categoryId}
                    />


                ))
            }
        </>
    )
}

export default ItemList;


