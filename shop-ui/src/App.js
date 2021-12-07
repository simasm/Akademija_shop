import React, { Component, useContext, useState } from "react";
import './App.css';
import Bar from './Components/Bar'
import ProductContainer from "./Components/ProductContainer";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import UserContextProvider from "./Components/UserContextManager";
import AdminView from "./Components/AdminView";


//const stock = new Items();





function Users() {
  return <h2>Users</h2>;
}

const App = () => {



  return (
    <div className="container">
        <UserContextProvider >
      <BrowserRouter>
      
          <Bar />
          <Switch>
            <Route exact path="/">
              <ProductContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/cart/:user">
              <Cart />
            </Route>
            <Route path="/admin">
                <AdminView />
            </Route>
            <Route path="/:id">
              <ProductContainer />
            </Route>
          </Switch>
  
        <Footer />
       
   
      </BrowserRouter>
      </UserContextProvider >
    </div>

  );

}
export default App;


