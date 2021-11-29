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

 
 

const stock = new Items();

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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
             
          </Route>
          <Route path="/users">
             
          </Route>
          <Route path="/">
             
          </Route>
        </Switch>
      </div>
    </Router>



       <div className="container">
       <ProductContainer />
          </div>
        </div>  
  
    </React.Fragment>
    );
    } 
  }
export default App;
