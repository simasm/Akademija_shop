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
 

const stock = new Items();

const UserContext = React.createContext({
  user: "me",
  cart : [2,3,4],
  setUser: () => {},
  addToCart: () => {}
})

 const UserContextProvider = (props) => {

  const setUser = (user) => {
    setState({...state, user: user});
  }
  const addToCart = (id) => {
    let newCart = state.cart.concat(id);
    setState({ ...state, cart: newCart });
    console.log("hook ");
    console.log(newCart);
    console.log(" ");
    console.log(state.cart);
    console.log("end hook ");
  }
}

  const initState = {
     cart : [],
    user: "",
    addToCart: addToCart,
    setUser: setUser
  } 

  const [state, setState] = useState(initState);


 

function Users() {
  return <h2>Users</h2>;
}

const App = () => {

 

   return (
    <React.Fragment>

      <div className="container">
      <Router>
      <div>
        <UserContext.Provider value={state}>
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
         </UserContext.Provider>
      </div>

    </Router>
    <Footer />
      </div>  
  


    
    </React.Fragment>



    );
    
  }
export default App;


