import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {

    const [state, setState] = useState({ products_array: null });


    useEffect(() => {

        const load = async () => {
            const response = await axios.get("https://itpro2017.herokuapp.com/api/products");
            const products = response.data;
            // console.log("product size " + products.length);

            setState({ products_array: products });

        }

        load();

    }, []);

    if (state.products_array !== null)
        return (

            
                <ol className="conainer pt-2">
                    <li className="row bg-dark" style={{ color: "white" }}>
                    <div className="col m-2">id</div>
                    <div className="col m-2">title</div>
                    <div className="col m-2">price</div>
                    <div className="col m-2">quantity</div>
                        </li>
                    {state.products_array.map(product =>
                        <li className="row bg-light" key={product.id}>
                            <div className="col m-2">
                            {product.id} </div>
                            <div className="col m-2">
                            {product.title}    </div>
                            <div className="col m-2">
                            {product.price}   </div>
                            <div className="col m-2">
                            {product.quantity}   </div>
                        </li>)}
                </ol>
            



        );
    else
        return <> </>;
}
export default ProductList;