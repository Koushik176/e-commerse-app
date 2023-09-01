import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, updateTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    updateItems((prevItems) => {
      const exisitingItemIndex = prevItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );

      const exisitingCartItem = prevItems[exisitingItemIndex];

      if (exisitingCartItem) {
        alert("This item has already added to cart");
        return prevItems;
      } else {
        return [item, ...prevItems];
      }
    });
  };

  const removeItemFromCartHandler = (item) => {
    updateTotalAmount((prevTotalAmount) => {
      return prevTotalAmount - item.price;
    });

    updateItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );

      const existingCartItem = prevItems[existingItemIndex];

      let updatedItems;

      if (Number(existingCartItem.quantity) === 1) {
        updatedItems = prevItems.filter(
          (filterItem) => filterItem.id !== existingCartItem.id
        );
        return updatedItems;
      }
    });
  };

  const totalAmountUpdateHandler = (amount) => {
    updateTotalAmount((prevTotalAmount) => {
      return prevTotalAmount + amount;
    });
  };

  const removeAllItemsHandler = () => {
    updateItems([]);
    updateTotalAmount(0);
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    updateTotalAmount: totalAmountUpdateHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeAllItems: removeAllItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
