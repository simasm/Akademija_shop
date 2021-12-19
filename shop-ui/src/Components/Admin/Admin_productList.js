import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Admin_productListContext } from './Admin_view';

const Admin_productList = (props) => {

    const {p} = useContext(Admin_productListContext);
    console.log("a__state "+ JSON.stringify(p));

    const [state,setState] = useState({products_array:null} );

   
   


    const load  = () => {
      // ctx.state.updatepa();
        console.log("__pw");
    }

    useEffect(() => {
        
         load();
        
      

    }, []);

    const deleteProd = async (id) => {
        console.log("http://localhost:8080/api/products/".concat(id));
        const response = await axios.delete("http://localhost:8080/api/products/".concat(id));
        console.log(response);
        if(response.status < 400) {
            load();
        }
     }

   let deleteProduct = (id) => {
        deleteProd(id);
    }

    if (state.products_array !== null)
        return   (

             
                <ol className="conainer pt-2">
                    <li className="row bg-dark" style={{ color: "white" }}>
                    <div className="col m-2">id</div>
                    <div className="col m-2">title</div>
                    <div className="col m-2">price</div>
                    <div className="col m-2">quantity</div>
                    <div className="col m-2">action</div>
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
                            <div className="col btn m-2 btn-secondary"
                                onClick={()=>deleteProduct(product.id)}>Delete</div>
                        </li>)}
                </ol>
            



        );
    else
        return <> </>;
}
export default Admin_productList;