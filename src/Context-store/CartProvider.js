import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, updateTotalAmount] = useState(0);
  console.log(items);

  const addItemToCartHandler = (item) => {
    updateItems((prevItems) => {
      const exisitingItemIndex = prevItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );

      const exisitingCartItem = prevItems[exisitingItemIndex];

      let updatedItem;
      let updatedItems;

      if (exisitingCartItem) {
        updatedItem = {
          ...exisitingCartItem,
          quantity: Number(exisitingCartItem.quantity) + Number(item.quantity),
        };
        updatedItems = [...prevItems];
        updatedItems[exisitingItemIndex] = updatedItem;
        return updatedItems;
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
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: Number(existingCartItem.quantity) - 1,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
        return updatedItems;
      }
    });
  };

  const totalAmountUpdateHandler = (amount) => {
    updateTotalAmount((prevTotalAmount) => {
      return prevTotalAmount + amount;
    });
  };

  const removeAllItemsHandler = () => {};

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
