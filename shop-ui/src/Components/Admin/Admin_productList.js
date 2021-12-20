import React, { useContext } from 'react';
 import axios from 'axios';
import { Admin_productListContext } from './Admin_view';

const Admin_productList = ( ) => {

 const {productList, load} = useContext(Admin_productListContext);


    const deleteProduct = async (id) => {
        console.log("http://localhost:8080/api/products/".concat(id));
        const response = await axios.delete("http://localhost:8080/api/products/".concat(id));
        console.log(response);
        if(response.status < 400) {
             load();
        }
     }

 
    if (productList.products_array !== null)
        return   (

                <ol className="conainer pt-2">
                    <li className="row bg-dark" style={{ color: "white" }}>
                    <div className="col m-2">id</div>
                    <div className="col m-2">title</div>
                    <div className="col m-2">price</div>
                    <div className="col m-2">quantity</div>
                    <div className="col m-2">action</div>
                        </li>
                    {productList.products_array.map(product =>
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
        return <> null</>;
}
export default Admin_productList;