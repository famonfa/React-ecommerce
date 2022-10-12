// import "./ItemRender.css";
import { Link } from "react-router-dom";


  const ItemRender = (props) => {
  return(
   
  <>
         
           
           <div className="card">
           <img className="card-img" src={props.thumbnail} alt="Same alt value" />
           <div>
           <h3 className="card-name"><Link to={`/item/${props.id}`}>{props.game}</Link></h3>
           <h4 className="card-console">{props.console}</h4>
           <div>
           <p className="card-price">${props.price}</p>
           
           </div>
           </div>
           </div>
           
       </>
    );
    }
    
export default ItemRender

  

