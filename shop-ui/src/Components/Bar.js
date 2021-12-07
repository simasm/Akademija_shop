import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContextManager";


const Bar = (props) => {

  let { user, setUser } = useContext(UserContext);
  console.log("init context props : " + user);



  const handleInput = (event) => {
    setUser(event.target.value);
    console.log("Set user " + user);

  }
  const handleSubmit = (e) => {


    setUser(user)
    console.log("submit " + user);
    e.stopPropagation();

  }
  return (
    <React.Fragment>


      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">

          <div className="navbar-brand"> E-shop    </div>



          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Link to="/" style={{ color: "white" }} className="text-decoration-none">
                <button className="btn btn-secondary m-2">
                  Home
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/cart/${user}`} style={{ color: "white" }} className="text-decoration-none">
                <button className="btn btn-secondary m-2">
                  Cart
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" style={{ color: "white" }} className="text-decoration-none">
                <button className="btn btn-secondary m-2">
                  Admin
                </button>
              </Link>
            </li>
          </ul>
          <span style={{ color: "white" }} className="text m-2">Logged in as {user}</span>
          <form className="d-flex align-self-end input-group w-auto" onSubmit={handleSubmit}>

            <input type='text'
              className='form-control'
              placeholder='User name'
              aria-label='Login'
              onChange={handleInput}
            />

            <Link to={`/cart/${user}`} style={{ color: "white" }} className="text-decoration-none">
              <div className="btn btn-secondary m-2" type="submit" >Log in</div>
            </Link>

          </form>


        </div>

      </nav>


    </React.Fragment>
  );

}

export default Bar;