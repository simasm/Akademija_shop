import React, { Component } from "react";
import { useLocation, useParams } from "react-router";
import axios from 'axios';
import { useState, useEffect } from 'react';

 const Cart = (props) => {
  const  {user} = useParams();
  let asd = useLocation();
  console.log("Cart: " + asd.pathname);
  const [state, setState] = useState({products_array : null });
  useEffect(() => {
      
    const load = async () => {
        const response = await axios.get("https://itpro2017.herokuapp.com/api/products");
        const products = response.data;
       // console.log("product size " + products.length);
        
        setState({products_array : products});
        
    }

   /// console.log("use effect");
    setTimeout(load,1500);
    
} ,[]);
   if(state.products_array !==null) {
    return (<div>cart {user}
            <div className="container">
            <ol className="row bg-light">
            {state.products_array.map( (item)=>  <li  key={item.id}> 
                      <div className="text-center p-4" style={{backgroundcolor : "grey"}}>
                                   {item.title}
                                   </div>
                          </li> )}
            </ol>
            </div>
    </div>);
    }
    else return (<> </>)
}


export default Cart;