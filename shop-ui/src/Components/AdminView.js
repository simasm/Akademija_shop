import React from 'react';
import ProductAddForm from './ProductAddForm';
import ProductList from './ProductList';
import { withRouter } from 'react-router';
 

const AdminView = (props) => {

        
    return (<div className="container pt-2">
    <div className="row justify-content-evenly">
        <div className="col-6">
            <ProductList />
        </div>
        <div className="col-4">
            <ProductAddForm />
          </div>
        </div>
    </div>);

}
export default AdminView;