import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useLocation, useParams } from "react-router";


const AddToCartButton = (props) => {

 
   const add = () => {
       console.log("add ["+props.id+"]");
      
   }

   useEffect( () => {
       
    console.log("fkt hook "    );
});

    return (

        <div className="btn btn-secondary m-2" onClick={add}>
          Add to cart
        </div>
    );

}

export default AddToCartButton;