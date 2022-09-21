import './CartWidget.css';
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext';

let CartWidget = () => {

    const ctx = useContext(CartContext)

    return(
        <div className='cart-widget'>
        <a href="#2"><img className='shop-icon' src={require('./shop.jpg')} alt='icon shopping'></img></a>
        <h1 className='buys'> {ctx.qtyOnWidget()} </h1>
        </div>
    )
}

export default CartWidget