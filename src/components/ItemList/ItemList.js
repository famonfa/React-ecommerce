import ThePromise from "../../utils/ThePromise"
import { useEffect, useState } from "react"
import '../ItemList/ItemList.css'
import { data } from "../../utils/data";
import ItemRender from "../Item/ItemRender";

const ItemList = () => {
        const [products, setProducts] = useState([]);
    
        useEffect(() => {
    
       ThePromise(data)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        })
        
    
    return (
        <>
        {
            products.map(item => (
                console.log(item),
            <ItemRender 
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


