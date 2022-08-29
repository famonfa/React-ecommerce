import React, { useState } from 'react'
import AddToCart from '../AddToCart/AddToCart'
import './ItemCount.css'



let ItemCount = () => {
    let stock = 5
    
    const [count, setCount] = useState(0)
    

    function incrementCount() {
        
        if (count < stock ) {
            setCount(count+1)
        }
    }
   
    function decrementCount() {
        
        if (count <= stock && count !== 0) {
            setCount(count-1)
            
        }
    }
   
   
    return(
        <>
            <div className='item-count'>
            <div className='counter'>
            <button className='button' onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button className='button' onClick={incrementCount}>+</button>
            </div>
            <div>
            <AddToCart />     
            </div>    
            </div>

        </>
    )
}  

export default ItemCount
