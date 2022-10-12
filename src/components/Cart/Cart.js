import { doc, setDoc, serverTimestamp, collection, increment, updateDoc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import './Cart.css'
import { db } from '../../utils/firebaseConfig'
import ModalForm from '../Modal/Modal'
import Swal from 'sweetalert2'

const Cart = () => {

  const ctx = useContext(CartContext)

  let [buyerInformation, setBuyerInformation] = useState({
    name: '',
    email: '',
    phone: '',
    adress: '',
    payment: '',
  })



  const handleChange = (event) => {
    console.log(event.target.value)

    setBuyerInformation(({
      ...buyerInformation,
      [event.target.name]: event.target.value
    }))
  }

  const createOrder = () => {

    let checkoutItems = ctx.cartList.map(item => ({
      id: item.idItem,
      title: item.gameItem,
      price: item.priceItem,
      qty: item.qtyItem,
    }))

    let order = {
      buyer: {

        name: buyerInformation.name,
        email: buyerInformation.email,
        phone: buyerInformation.phone,
        adress: buyerInformation.adress,
      },
      date: serverTimestamp(),
      items: checkoutItems,
      total: ctx.totalOrder()
    }

    if (
      buyerInformation.name.length > 5 &&
      buyerInformation.email.includes("@") &&
      buyerInformation.email.includes(".com")
    ) {
   
      
      const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order);
        return newOrderRef
      }

      createOrderInFirestore()
        .then(result =>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your order has been created ' + result.id,
            showConfirmButton: false,
            timer: 3000
          })
        } ) //el result.id es el id de compra
        .catch(err => console.log(err))

         

      ctx.cartList.forEach(async (item) => {
        const itemRef = doc(db, "products", item.idItem);
        await updateDoc(itemRef, {
          stock: increment(-item.qtyItem)
        });
      })


      ctx.clear()
    } else {
      Swal.fire('The data entered is not valid')
    }

  }

  return (
    <div className='wrapper-cart'>
      <div className='cart-titles'>
        <h2 className='cart-titles-title'>Shopping cart</h2>
        <h2 className='cart-titles-title'>{ctx.cartList.length} Items</h2>
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
                  <h4 className='item-text'>{item.gameItem}</h4>
                  <h6 className='item-text'>{item.consoleItem}</h6>
                  <h6 className='item-text'>{item.conditionItem}</h6>
                </div>
              </div>
              <div className='pricing-info'>
              <h5 className='item-text'>{item.qtyItem} Units</h5>
              <h5 className='item-text'>${item.priceItem.toFixed(2)}</h5>
              <h5 className='item-text'>${ctx.subTotal(item.qtyItem, item.priceItem).toFixed(2)}</h5>
              </div>
              <span className='remove' onClick={() => ctx.removeItem(item.idItem)}>X</span>
            </div>
          )
      }
      <div className='finish'>
        <h5 className='total'>Total ${ctx.totalOrder().toFixed()}</h5>
        <ModalForm  {...buyerInformation} handleChange={handleChange} createOrder={createOrder} />
      </div>
      <div className='cart-button-wrapper'>
      <button className='button-cart'>Continue shopping</button>
        <button className='button-cart' onClick={ctx.clear}>Remove all items</button>
      </div>

    </div>
  )
}

export default Cart
