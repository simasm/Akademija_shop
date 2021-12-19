import React, { useContext } from 'react';
import ProductAddForm from './ProductAddForm';
import ProductList from './ProductList';
import { withRouter } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Collapse } from 'bootstrap';
 

export const  ProductListContext = React.createContext(
    
 );

const AdminView = (props) => {

    //const   [state, setState] = useState({ products_array: null});
    const updatepa = (a) => {
        console.log("updatepa " + a);
        setState({...state, refresh :state.refresh + 1});
    }

    const initState = {
        products_array: null,
        refresh : 0,
       updatepa: updatepa 
        
     } 
     const   [state, setState] = useState(initState);
   
     
      
    
     const load = async () => {
        const response = await axios.get("http://localhost:8080/api/products");
        const products = response.data;
        // console.log("product size " + products.length);

        setState({...state, products_array: products });

    }

    useEffect(() => {

        load();

    }, []);

    const reload = setState;
    return (
    <ProductListContext.Provider value={state}>
    <div className="container pt-2">
    <div className="row justify-content-evenly">
        <div className="col-6">
       
             <ProductList  /> 
     
        </div>
        <div className="col-4">
           <ProductAddForm pstate={state}/>   
          </div>
        </div>
    </div>
    </ProductListContext.Provider>
    );

}
export default AdminView;