import React, { Component } from "react";
import { useLocation, useParams } from "react-router";
import axios from 'axios';
import { useState, useEffect } from 'react';

 const Cart = (props) => {
  const  {user} = useParams();
   
   
    return (<div>cart {user}
            <div className="container">
            <ol className="row bg-light">
     
            </ol>
            </div>
    </div>);
 
}


export default Cart;