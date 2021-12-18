import React from 'react';
import ProductAddForm from './ProductAddForm';
import ProductList from './ProductList';
import { withRouter } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
 

const AdminView = (props) => {

    const [state, setState] = useState({ products_array: null });

    const load = async () => {
        const response = await axios.get("http://localhost:8080/api/products");
        const products = response.data;
        // console.log("product size " + products.length);

        setState({ products_array: products });

    }

    useEffect(() => {

        load();

    }, []);

        
    return (<div className="container pt-2">
    <div className="row justify-content-evenly">
        <div className="col-6">
            <ProductList state={state}/>
        </div>
        <div className="col-4">
            <ProductAddForm />
          </div>
        </div>
    </div>);

}
export default AdminView;