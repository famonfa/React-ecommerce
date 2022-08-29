import ItemCount from "../ItemCount/ItemCount";
  const ItemRender = (props) => {
  return(
   
  <>
         
           <div className="wrapper" >
           <div className="card">
           <img className="card-img" src={props.thumbnail} alt="Same alt value" />
           <div>
           <h3 className="card-name">{props.game}</h3>
           <h4 className="card-console">{props.console}</h4>
           <div>
           <p>${props.price}</p>
           <ItemCount />
           </div>
           </div>
           </div>
           </div>
       </>
    );
    }
    
export default ItemRender

  

