import React, {useContext}  from 'react';
import { UserContext } from '../App';
import axios from 'axios';

const AddToCartButton = (props) => {

    const {appState, setAppState} = useContext(UserContext);
   

   const add =   () => {
    console.log(JSON.stringify(appState));
    setAppState({...appState, cart : appState.cart.concat([props.id])});
    console.log(JSON.stringify(appState));
    upladCart();
   
   }

   const upladCart = async() => {
    console.log(JSON.stringify(appState));
    const response = axios.post("http://localhost:8080/api/carts",appState);
    console.log(response);
   }

    return (

        <div className="btn btn-secondary m-2" onClick={add}>
          Add to cart
        </div>
    );

}

export default AddToCartButton;