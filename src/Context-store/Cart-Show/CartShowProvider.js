import React, { useState } from "react";
import CartShowContext from "./cartshow-context";

const CartShowProvider = (props) => {
  const [cartOpen, setCartOpen] = useState(false);

  const showCartHandler = () => {
    setCartOpen(true);
  };

  const hideCartHandler = () => {
    setCartOpen(false);
  };

  const cartShowContext = {
    cartOpen: cartOpen,
    showCart: showCartHandler,
    hideCart: hideCartHandler,
  };

  return (
    <CartShowContext.Provider value={cartShowContext}>
      {props.children}
    </CartShowContext.Provider>
  );
};

export default CartShowProvider;
