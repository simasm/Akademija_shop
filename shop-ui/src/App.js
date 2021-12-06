import React, { Component, useContext, useState } from "react";
import './App.css';
import Bar from './Components/Bar'
import Items from './items'
import ProductContainer from "./Components/ProductContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 import Cart from "./Components/Cart";
 import Footer from "./Components/Footer";
 import UserContextProvider from "./Components/UserContextManager";
 

const stock = new Items();

 
 
 

function Users() {
  return <h2>Users</h2>;
}

const App = () => {

 

   return (
    <React.Fragment>

      <div className="container">
      <Router>
      <div>
        <UserContextProvider >
         <Bar  />
       
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         
          <Route path="/cart">
             <Cart user={0}/>
          </Route>
          <Route path="/cart:user">
             <Cart />
          </Route>
        
          <Route path="/:id">
            <ProductContainer   />
          </Route>
          <Route path="/">
            <ProductContainer  id={0} />
          </Route>
        
        </Switch>
         </UserContextProvider>
      </div>

    </Router>
    <Footer />
      </div>  
  


    
    </React.Fragment>



    );
    
  }
export default App;


