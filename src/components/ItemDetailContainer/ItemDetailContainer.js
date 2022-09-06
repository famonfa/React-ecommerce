
import ItemDetail from '../ItemDetail/ItemDetail'
import {useEffect, useState} from 'react'
import ThePromise from '../../utils/ThePromise';
import { data } from '../../utils/data';
import { useParams } from 'react-router-dom';



let ItemDetailContainer = () => {
    
        const [products, setProducts] = useState({});
        const {id} = useParams()
    
        useEffect(() => {
       
       ThePromise(data.find(item => item.id == id))
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        }, [])

   
   
    return (
        <>
            <ItemDetail {...products} />
        </>
        )
          }  
         
        
export default ItemDetailContainer

