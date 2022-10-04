import { doc, setDoc, serverTimestamp, collection, increment, updateDoc } from 'firebase/firestore'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import './Cart.css'
import { db } from '../../utils/firebaseConfig'

const Cart = () => {

  const ctx = useContext(CartContext)

  const createOrder = () => {
    let checkoutItems = ctx.cartList.map(item => ({
      id: item.idItem,
      title: item.gameItem,
      price: item.priceItem,
      qty: item.qtyItem,
    }))

    let order = {
      buyer: {
        name: 'Juan',
        email: 'juan@gmail.com',
        phone: '1131224987'
      },
      date: serverTimestamp(),
      items: checkoutItems,
      total: ctx.totalOrder()
    }
    console.log(order);

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order);
      return newOrderRef
    }

    createOrderInFirestore()
      .then(result => alert('Your order has been created ' + result.id)) //el result.id es el id de compra
      .catch(err => console.log(err))

    ctx.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      });
    })


    ctx.clear()
  }


  return (
    <div className='wrapper-cart'>
      <div className='cart-titles'>
        <h2>Shopping cart</h2>
        <h2>{ctx.cartList.length} Items</h2>
      </div>
      <div className='line'></div>
      {
        ctx.cartList.length === 0
          ?
          <div className='empty-cart-wrapper'>
            <h1 className='empty-cart'>Your cart is empty</h1>
          </div>
          :
          ctx.cartList.map(item =>
            <div className='cart-content'>
              <div className='info-cart'>
                <img className='cart-img' src={item.imgItem} alt={item.gameItem}></img>
                <div className='titles-game'>
                  <h4>{item.gameItem}</h4>
                  <h6>{item.consoleItem}</h6>
                  <h6>{item.conditionItem}</h6>
                </div>
              </div>
              <h5>{item.qtyItem} Units</h5>
              <h5>${item.priceItem.toFixed(2)}</h5>
              <h5>${ctx.subTotal(item.qtyItem, item.priceItem).toFixed(2)}</h5>
              <span className='remove' onClick={() => ctx.removeItem(item.idItem)}>X</span>
            </div>
          )
      }
      <div className='finish'>
        <h5 className='total'>Total ${ctx.totalOrder().toFixed()}</h5>
        <button className='button-cart' onClick={createOrder}>Checkout</button>
      </div>
      <div className='cart-button-wrapper'>
        <Link to='/'><button className='button-cart'>Continue shopping</button></Link>
        <button className='button-cart' onClick={ctx.clear}>Remove all items</button>
      </div>

    </div>
  )
}

export default Cart
