import './CartWidget.css';

let CartWidget = (props) => {
    return(
        <div className='cart-widget'>
        <a href="#2"><img className='shop-icon' src={require('./shop.jpg')} alt='icon shopping'></img></a>
        {/* <h1 className='buys'></h1> */}
        </div>
    )
}

export default CartWidget