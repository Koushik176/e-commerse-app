import React from "react";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

const MainNavigation = () => {
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
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.cartButton}>
          <button>
            cart<span>(0)</span>
          </button>
        </div>
      </header>
      <h1 className={classes.h1}>The Generics</h1>
    </React.Fragment>
  );
};

export default MainNavigation;
