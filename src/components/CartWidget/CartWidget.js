import './CartWidget.css';

let CartWidget = () => {
    return(
        <div className='cart-widget'>
        <a href="#2"><img className='shop-icon' src={require('./shop.jpg')} alt='icon shopping'></img></a>
        <h1 className='buys'>4</h1>
        </div>
    )
}

export default CartWidget