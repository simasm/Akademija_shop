import React, {useState, useContext}   from "react";
import { Link } from "react-router-dom";
 
import { UserContext } from "../App";


const Bar = (  ) => {
  
   
   const {appState, setAppState} = useContext(UserContext);
   const [state,setUser] = useState("");
   console.log("appState " + JSON.stringify(appState));

  
  const handleInput = (e) => {
      setUser({user: e.target.value});
      e.preventDefault();
  }
  const handleSubmit = (e) => {

    setAppState({usr:state.user});
    e.preventDefault();

 
  }
  return (
 
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">

          <div className="navbar-brand">E-shop  [{appState.usr}]</div>



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
              <Link to={`/cart/${appState.usr}`} 
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
                  Logged in as {appState.usr}</span>
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