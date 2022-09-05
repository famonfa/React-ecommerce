
import ItemDetail from '../ItemDetail/ItemDetail'
import {useEffect, useState} from 'react'
import ThePromise from '../../utils/ThePromise';
import { data } from '../../utils/data';



let ItemDetailContainer = () => {
    
        const [products, setProducts] = useState({});
    
        useEffect(() => {
       
       ThePromise(data[0])
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        })

   
   
    return (
        <>
            <ItemDetail {...products} />
        </>
        )
          }  
         
        
export default ItemDetailContainer

