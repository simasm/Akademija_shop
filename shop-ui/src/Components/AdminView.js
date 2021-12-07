import React from 'react';
import ProductAddForm from './ProductAddForm';
import { withRouter } from 'react-router';
 

const AdminView = (props) => {

        
    return (
        
        <div className="container">
            
            <div className="row">
                <div className="col-5-md">
                <ProductAddForm />
                </div>
                <div className="col">
                 product remove form?    
                </div>
            </div>


        </div>

    );

}
export default AdminView;