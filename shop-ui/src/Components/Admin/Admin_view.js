import React, { useContext } from 'react';
import Admin_productList from './Admin_productList';
import Admin_productAddForm from './Admin_productAddForm';
 import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
  

export const  Admin_productListContext = React.createContext(
    {} );

const Admin_view = (props) => {

    const [p,sp] = useState(0);
    
    
     const load = async () => {
        const response = await axios.get("http://localhost:8080/api/products");
        const products = response.data;
        // console.log("product size " + products.length);
   
        console.log("aview loadedd " + JSON.stringify(p )
        +"\nproducts " + JSON.stringify(products) ) ;

    }

    useEffect(() => {

        load();
       
        console.log("aview loadedd " + JSON.stringify(p ));
    }, []);

    
    return (
    <Admin_productListContext.Provider value={p}>
    <div className="container pt-2">
    <div className="row justify-content-evenly">
        <div className="col-6">
       
            <Admin_productList />
        </div>
        <div className="col-4">
           <Admin_productAddForm  />   
          </div>
        </div>
    </div>
    </Admin_productListContext.Provider>
    );

}
export default Admin_view;