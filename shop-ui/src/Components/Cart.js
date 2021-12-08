import React from "react";
import {useParams} from "react-router";
import {useContext} from 'react';
 


 const Cart = (props) => {
  
        let {user} = useParams();
      

   
    return (<div>cart {user} &nbsp; {}
            <div className="container">
            <ol className="row bg-light">
     
            </ol>
            </div>
    </div>);
 
}


export default Cart;