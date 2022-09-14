import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from "react-router-dom";
import { useState } from "react";



  const ItemDetail = ({thumbnail, game, console, condition, price, description, stock}) => {
    
    const [btns, setBtns] = useState('')
    const [itemCount, setItemCount] = useState(0)
    

    
    
    const shipping = 'All orders are processed and packed at our warehouse and by our valued certified team members. We take great pride and care with your orders and want nothing more, than for you to get your orders safely and on time and for you to be playing your video games. We ship worldwide and 99% of all paid shipping orders ship out within 1 business day.'
    
    const onAdd = (qty) => {
      setItemCount(qty)
      alert(`You added ${qty} cartridges of ${game} games to cart!`)
    }
    
    return(
   
  <>     
           <section>
           <div className="wrapper" >
           <div className="det-card">
           <img className="det-img" src={thumbnail} alt="Same alt value" />
           <div className="det-info">
           <h3 className="det-name">{game}</h3>
           <h4 className="det-console">{console}</h4>
           <p>${price}</p>
           <h6>Free Shipping Available.-</h6>
           <h6>Condition: {condition}</h6>
           <div>
            {
                itemCount === 0
                ? <ItemCount stock={stock}  onAdd={onAdd}  />
                : <Link to='/cart'><button className="button-cart">Checkout</button></Link>
            }
           </div>
           </div>
           </div>
           <div className="btns">
            <button className="bttn" onClick={() => setBtns(description)}>Description</button>
            <button className="bttn" onClick={() => setBtns(shipping)}>Shipping</button>
           </div>
           <div className="info-container">
           <p className="info-btns">{btns}</p>
           </div>
           </div>
           </section>
       </>
    );
    }
    
export default ItemDetail

  

