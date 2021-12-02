import React, { Component } from "react";
import { useParams } from "react-router";


 const ProductContainer = (props) => {
  const  {user} = useParams();
    return (<div>cart {user}</div>);
}


export default ProductContainer;