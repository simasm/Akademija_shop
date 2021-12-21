import React, {useContext, useEffect, useState}  from 'react';
import { UserContext } from '../App';
import axios from 'axios';

const AddToCartButton = (props) => {

    const {appState, setAppState} = useContext(UserContext);
    const [state,setState] = useState({  cart : []});
    

    useEffect( () => {

      setAppState({...appState, cart : appState.cart.concat(state.cart)});

    },[state]);

   const add = () => {
    setState({ cart : [props.id] });
    console.log(JSON.stringify(appState) +  " " + props.id);

    upladCart();
   
   }

   const upladCart = async() => {
     const response = await axios.post("http://localhost:8080/api/carts",appState);
    }

    return (

        <div className="btn btn-secondary m-2" onClick={add}>
          Add to cart
        </div>
    );

}

export default AddToCartButton;