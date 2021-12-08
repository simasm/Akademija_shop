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
import AdminView from "./Components/AdminView";
import { UserCtx } from "./Components/UserCtx";

//const stock = new Items();


const UserContext = React.createContext("???");



function Users() {
    return <h2>Users</h2>;
}

const App = () => {

    
    
    const [appState,setAppState] = useState({usr:"bruh",cart : [0]});
    

    return (
        <div className="container">
            <UserCtx.Provider value={appState}>
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
            </UserCtx.Provider >
        </div>

    );

}
export default App;


