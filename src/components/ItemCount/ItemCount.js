import React, { useState } from 'react'
import './ItemCount.css'





let ItemCount = ({stock=0, onAdd}) => {
    
  
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
            {
    count?
        <button className='button-add' onClick={() => onAdd(count)}>Add to cart</button>
        :<button className='button-add' disabled onClick={() => onAdd(count) }>Add to cart</button>
    }     
            </div>    
            </div>

        </>
    )
}  

export default ItemCount
