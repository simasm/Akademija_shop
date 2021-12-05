import userEvent from '@testing-library/user-event';
import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from './UserContextManager';
import { useLocation, useParams } from "react-router";


const AddToCartButton = (props) => {

    let {cart, addToCart, user} = useContext(UserContext);
   
   const add = () => {
        addToCart(user);
        console.log("THE CART ");
        for (let i = 0; i < cart.length; i++)
            console.log(cart[i]);
   }
    return (

        <div className="btn btn-secondary m-2" onClick={add}>
          Add to cart
        </div>
    );

}

export default AddToCartButton;