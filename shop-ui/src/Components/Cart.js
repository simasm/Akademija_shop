import React from "react";
import {useParams} from "react-router";


 const Cart = (props) => {
  
        let {user} = useParams();
 
   
    return (<div>cart {user}
            <div className="container">
            <ol className="row bg-light">
     
            </ol>
            </div>
    </div>);
 
}


export default Cart;