import React, { useState } from 'react'

export const UserContext = React.createContext( );

 const UserContextProvider = (props) => {
 
  const setUser = (user) => {
    setState({...state, user: user});
    console.log(state);
  }
  const addToCart = (id) => {
    let newCart = state.cart.concat(id);
    console.log("hook ");
    console.log(newCart);
  
    console.log(state.cart);
    console.log(" ");
    setState({ ...state, cart: newCart });
    console.log("hook after setstate");
    console.log(newCart);
 
    console.log(state.cart);
    console.log("end hook ");
  }
  
  const initState = {
     cart : [],
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