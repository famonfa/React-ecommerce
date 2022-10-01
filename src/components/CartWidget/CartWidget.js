import './CartWidget.css';
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

let CartWidget = () => {

    const ctx = useContext(CartContext)

    return(
        <div className='cart-widget'>
        <Link to='./cart' ><img className='shop-icon' src={require('./shop.jpg')} alt='icon shopping'></img></Link>
        <h1 className='buys'> {ctx.qtyOnWidget()} </h1>
        </div>
    )
}

export default CartWidget