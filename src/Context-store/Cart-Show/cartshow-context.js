import React from "react";

const CartShowContext = React.createContext({
    cartOpen: false,
    showCart: () => {},
    hideCart: () => {},
});

export default CartShowContext;