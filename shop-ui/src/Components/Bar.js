import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../App";
 
const Bar = (props) => {


  const { appState, setAppState } = useContext(UserContext);
  const [userState, setUser] = useState("");
  const [cartState, setCartState] = useState({cart : []});
 
  const handleInput = (e) => {
    setUser({ user: e.target.value });
    e.preventDefault();
  }

  useEffect( ()=> {
    console.log("fkt "+JSON.stringify(cartState));

    setAppState({username: userState.user, cart :  cartState.cart});
    console.log("fkt "+JSON.stringify(appState));
  },[cartState,userState]);
  //login
  const login = async () => {
    
     const response = await axios.post("http://localhost:8080/api/users", { username: userState.user });
     const response2 = await axios.get("http://localhost:8080/api/carts/".concat(userState.user));
     if(response2.data !== null)
     setCartState({cart : response2.data });
     else setCartState({cart : []});
    }
  const handleSubmit = (e) => {
 

    login();
  
    console.log("logged in with "+ JSON.stringify(appState));
    e.preventDefault();


  }
  return (

    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">

        <div className="navbar-brand">E-shop </div>



        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <Link to="/"
              style={{ color: "white" }}
              className="text-decoration-none">
              <button className="btn btn-secondary m-2">
                Home
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/cart/${appState.username}`}
              style={{ color: "white" }}
              className="text-decoration-none">
              <button className="btn btn-secondary m-2">
                Cart
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin"
              style={{ color: "white" }}
              className="text-decoration-none">
              <button className="btn btn-secondary m-2">
                Admin
              </button>
            </Link>
          </li>
        </ul>
        <span style={{ color: "white" }}
          className="text m-2">
          Logged in as {appState.username}</span>
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-self-end input-group w-auto">
            <input type='text'
              className='form-control'
              placeholder='User name'
              aria-label='Login'
              onChange={handleInput}
            />


            <input type="submit"
              value="login" />

          </div>
        </form>


      </div>

    </nav>



  );

}

export default Bar;