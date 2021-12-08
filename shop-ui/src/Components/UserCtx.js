import React from 'react';



export const UserCtx = React.createContext({

    usr: "test",
    cart: [1],
    changeUsr: () => {}

})