import React, { useState } from 'react'

export const UserContext = React.createContext(null);

 const UserContextProvider = (props) => {

   
 
  const setUser = (user) => {
    setState({...state, user: user});
    console.log("setusercontext "+JSON.stringify(state));
  }
  const addToCart = (id) => {
  
    //let newCart = state.cart.concat(id);
    console.log("user is " + state.user + " id passed " + id);
    console.log("hook ");
    //console.log(newCart);
  
    //console.log(state.cart);
    //console.log(" ");
    //setState({ ...state, cart: newCart });
    //console.log("hook after setstate");
    //console.log(newCart);
 
    //console.log(state.cart);
    //console.log("end hook ");
  }
  
  const initState = {
     cart : [2],
    user: "",
    addToCart: addToCart,
    setUser: setUser
  } 

  const [state, setState] = useState(initState);

  return (
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  )
}
export default UserContextProvider;