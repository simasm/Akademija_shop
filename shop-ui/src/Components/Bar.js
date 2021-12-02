import React, { Component } from "react";
import { Link } from "react-router-dom";

class Bar extends Component {
  render() {
    return (
      <React.Fragment>
       
         
        <nav className="navbar navbar-dark bg-dark mb-3">
          <div className="navbar-brand">
           
              <div className="col-3">
                <h1>E-shop</h1>
              </div>
              <div className="col-5 align-self-end">
                <button className="btn btn-secondary">
                    <Link to="/">Home</Link>
                </button>

                <button className="btn btn-secondary"> 
                   <Link to="/cart:user">Cart</Link></button>  
                
              </div>
             
           
          </div>
        </nav>
        
       
      </React.Fragment>
    );
  }
}

export default Bar;