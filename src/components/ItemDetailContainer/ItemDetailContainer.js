
import ItemDetail from '../ItemDetail/ItemDetail'
import {useEffect, useState} from 'react'
import ThePromise from '../../utils/ThePromise';
import { data } from '../../utils/data';



let ItemDetailContainer = () => {
    
        const [products, setProducts] = useState([]);
    
        useEffect(() => {
       
    
       ThePromise(data)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        })

   
   
    return (
        <>
        {
            products.slice(0,1).map(item => (
                
            <ItemDetail
            id={item.id}
            game={item.game}
            console={item.console}
            stock={item.stock}
            price={item.price}
            thumbnail={item.thumbnail}
            description={item.description}
            condition={item.condition}
            
                />

            ))
          }  
          </>
          )
}  

export default ItemDetailContainer

