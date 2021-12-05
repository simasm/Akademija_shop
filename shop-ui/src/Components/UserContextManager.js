import React, { useState } from 'react'

export const UserContext = React.createContext({
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