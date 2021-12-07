import React from "react";
import { useState } from "react";
import ProductList from "./ProductList";



const ProductAddForm = () => {

    const [state] = useState({ title: "", price: 0.0, quant: 0 });

    const submitHandle = (e) => {

        console.log(state);
        e.preventDefault();
    }
    const handleChange = () => {

    }

    return (<div className="container pt-2">
        <div className="row justify-content-evenly">
            <div className="col-6">
                <ProductList />
            </div>
            <div className="col-4">

                <form onSubmit={submitHandle} >

                    <div className="row bg-dark" style={{color:"white"}}>
                    <h4>Add product </h4>
                    </div>
                    <div className="row pt-2">
                        <div className="col-5-lg">
                           
                            <span className="m-2">Title</span>
                            <input className="col-5-lg" type="text"

                                placeholder="title"
                                onChange={handleChange} />

                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col">
                            <span className="m-2">Price</span>
                            <input className="col" type="text"

                                placeholder="price"
                                onChange={handleChange} />

                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col">
                            <span className="m-2">Quantity</span>
                            <input className="col" type="text"
                                placeholder="quantity"
                                onChange={handleChange} />

                        </div>
                    </div>




                    <input type="submit"
                        value="Submit" />

                </form>
            </div>
        </div>
    </div>);
}



export default ProductAddForm;