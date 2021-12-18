import React from "react";
import { useState } from "react";
import ProductList from "./ProductList";
import axios from "axios";



const ProductAddForm = () => {

    const [state, setState] = useState({ title: "", price: "", quant: ""});

    const submitHandle = (e) => {

        console.log("state : "+JSON.stringify(state));
        if(validateForm()) {
            uploadProduct();
        }
        else alert("invalid product details");
        
        e.preventDefault();
    }
    const handleChange = (e) => {
     
       switch(e.target.name) {
           case "title" : setState( {...state, title : e.target.value}); break;
           case "price" : setState( {...state, price : e.target.value}); break;
           case "quantity" : setState( {...state, quant : e.target.value}); break;
           default : break;
       }
    }

    const validateForm = () => {
        // console.log("price " + state.price.match(/([0-9]+\.?[0-9]*|\.[0-9]+)$/)
        //      + "\n quant " + state.quant.match(/[0-9]+/));
        return( (state.price.match(/([0-9]+\.?[0-9]*|\.[0-9]+)$/) &&
            state.quant.match(/[0-9]+/)) !== null);
    }

    const uploadProduct = async () => {
        
        const response = await axios.post("http://localhost:8080/api/products",state);
        console.log(response);
        if(response.status < 400) 
            {
                
            }
         
     }
    return ( 
                <form onSubmit={submitHandle} >

                    <div className="row bg-dark" style={{color:"white"}}>
                    <h4>Add product </h4>
                    </div>
                    <div className="row pt-2">
                        <div className="col-5-lg">
                           
                            <span className="m-2">Title</span>
                            <input className="col-5-lg" type="text"
                                name = "title"
                                placeholder="title"
                                onChange={handleChange} />

                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col">
                            <span className="m-2">Price</span>
                            <input className="col" type="text"
                                name = "price"
                                placeholder="price"
                                onChange={handleChange} />

                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col">
                            <span className="m-2">Quantity</span>
                            <input className="col" type="text"
                                name = "quantity"
                                placeholder="quantity"
                                onChange={handleChange} />

                        </div>
                    </div>




                    <input type="submit"
                        value="Submit" />

                </form>
      );
}



export default ProductAddForm;