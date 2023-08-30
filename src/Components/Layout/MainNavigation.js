import React, { useContext } from "react";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import CartShowContext from "../../Context-store/Cart-Show/cartshow-context";
import CartContext from "../../Context-store/cart-context";

const MainNavigation = () => {
  const cartShowCtx = useContext(CartShowContext);
  const cartCtx = useContext(CartContext);

  let quantity = 0;

  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
  return (
    <React.Fragment>
      <header className={classes.header}>
        <nav className={`${classes.nav} ${classes.header}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Store</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/auth">Login</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.cartButton}>
          <button onClick={cartShowCtx.showCart}>
            cart<span className={classes.badge}>{quantity}</span>
          </button>
        </div>
      </header>
      <h1 className={classes.h1}>The Generics</h1>
    </React.Fragment>
  );
};

export default MainNavigation;
