import {  createContext, useState } from "react";

export const CartContext = createContext();

const arrayListaCart = (cartList, item) => {
    return (
    [
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
}



const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    console.log('cart' + JSON.stringify(cartList));

    const addItem = (item) => {
        console.log(JSON.stringify(item) );
        let found = cartList.find(product => product.idItem === item.id)
        console.log(JSON.stringify(found));
        if (found === undefined) {

            let variable = arrayListaCart(cartList, item)
            setCartList(
                variable  
            )
            console.log('variable ' + JSON.stringify(variable));
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
       acc += parseFloat(item.qtyItem).toFixed() * parseFloat(item.priceItem).toFixed()
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

const findCartItem = (idItem) => {
    let finded = cartList.find(item => item.idItem === idItem)
    return finded
}

  return (
  
    <CartContext.Provider value={{cartList, addItem, removeItem, clear, qtyOnWidget,subTotal, totalOrder, findCartItem}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider