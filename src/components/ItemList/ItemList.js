// import ThePromise from "../../utils/ThePromise"
import { useEffect, useState } from "react"
// import { data } from "../../utils/data";
import ItemRender from "../Item/ItemRender";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../../utils/firebaseConfig";


const ItemList = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();


    //  Render Items por medio de una promesa de un array hardcodeado.
    //  filter para las distintas categorías del navBar.
    //     useEffect(() => {
    //     if (id) {
    //    ThePromise(data.filter(item => item.categoryId == id))
    //         .then(result => setProducts(result))
    //         .catch(err => console.log(err))
    //     }else {
    //         ThePromise(data)
    //         .then(result => setProducts(result))
    //         .catch(err => console.log(err)) 
    //     }
    //     },[id])

    

    useEffect(() => {
        firestoreFetch(idCategory)
            .then((result) => setProducts(result))
    })


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
                    />


                ))
            }
        </>
    )
}

export default ItemList;


