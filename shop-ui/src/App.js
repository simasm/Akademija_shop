import React, { Component } from "react";
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
import ProductView from "./Components/ProductView";
 import Cart from "./Components/Cart";
 

const stock = new Items();

 
function ShowProduct(props) {
  return <ProductContainer pts={props.product_to_show} />
}

 

function Users() {
  return <h2>Users</h2>;
}

class App extends Component{

  
  componentDidMount = () => {
    console.log("app did mount");
  }

  render() {return (
    <React.Fragment>

      <div className="container">
      <Router>
      <div>
         <Bar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/cart">
             <Cart user={0}/>
          </Route>
          <Route path="/cart:user">
             <Cart />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/:id">
            <ProductContainer   />
          </Route>
          <Route path="/">
            <ProductContainer  id={0} />
          </Route>
        </Switch>
      </div>
    </Router>
  
      </div>  
  
    </React.Fragment>
    );
    } 
  }
export default App;


