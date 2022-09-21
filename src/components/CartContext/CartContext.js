import {  createContext, useState } from "react";

export const CartContext = createContext();




const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    console.log(cartList);

    const addItem = (item) => {
        let found = cartList.find(product => product.idItem === item.id)
        console.log(found);
        if (found === undefined) {

            setCartList([
                ...cartList,
                {idItem: item.id,
                imgItem: item.thumbnail,
                gameItem: item.game,
                priceItem: item.price,
                conditionItem: item.condition,
                consoleItem: item.console,
                qtyItem: item.qty
                } 
            ])
        }else {
            found.qtyItem += item.qty
        }
    }

 
const qtyOnWidget = () => {
  let qtys =  cartList.map(item => item.qtyItem)
  return qtys.reduce(((prevValue, currValue) => prevValue + currValue), 0)
  
}

const subTotal = (total1, total2) => {
  
let total =  
parseFloat(total1).toFixed(2) * parseFloat(total2).toFixed(2)
         
return total
        
}

const totalOrder = () => {
    let acc = 0
    cartList.map(item => {
        acc += parseFloat(item.qtyItem).toFixed(2) * parseFloat(item.priceItem).toFixed(2)
    } )
    return acc
}


const removeItem = (idItem) => {
    let newCartList = cartList.filter(item => item.idItem !== idItem)
    setCartList(newCartList) 
}

const clear = () => {
    setCartList([])
}

  return (
  
    <CartContext.Provider value={{cartList, addItem, removeItem, clear, qtyOnWidget,subTotal, totalOrder}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider