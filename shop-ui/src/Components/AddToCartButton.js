import React, { useEffect } from 'react';
 


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