import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (item) => {},
    updateTotalAmount: (amount) => {},
    removeAllItems: () => {},
});

export default CartContext;