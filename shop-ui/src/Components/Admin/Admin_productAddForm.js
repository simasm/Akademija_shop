import React, { useContext } from "react";
import { useState,useEffect } from "react";
 import axios from "axios";
import  Admin_productListContext  from "./Admin_productList";


const Admin_productAddForm = (props) => {

    const  ctx  = useContext(Admin_productListContext);

    const [state, setState] = useState({ title: "", price: "", quantity: ""});
    console.log("aform listctx  " + JSON.stringify(ctx));
 
    const submitHandle = (e) => {

        console.log("state : "+JSON.stringify(state));
        if(validateForm()) {
            uploadProduct();
           // ctx.updatepa();
            e.preventDefault();

        }
        else alert("invalid product details");
        
        e.preventDefault();
    }
    const handleChange = (e) => {
     
       switch(e.target.name) {
           case "title" : setState( {...state, title : e.target.value}); break;
           case "price" : setState( {...state, price : e.target.value}); break;
           case "quantity" : setState( {...state, quantity : e.target.value}); break;
           default : break;
       }
    }

    const validateForm = () => {
        // console.log("price " + state.price.match(/([0-9]+\.?[0-9]*|\.[0-9]+)$/)
        //      + "\n quant " + state.quant.match(/[0-9]+/));
        return( (state.price.match(/([0-9]+\.?[0-9]*|\.[0-9]+)$/) &&
            state.quantity.match(/[0-9]+/)) !== null);
    }

    const uploadProduct = async () => {
        
        const response = await axios.post("http://localhost:8080/api/products",state);
        console.log(response);
        if(response.status < 400) 
            { 
                
                console.log("+d" +JSON.stringify(ctx));
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



export default Admin_productAddForm;