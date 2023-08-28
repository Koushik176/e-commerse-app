import React from "react";
import { Switch } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import StorePage from "./Pages/StorePage";
import CartShowProvider from "./Context-store/Cart-Show/CartShowProvider";
import CartProvider from "./Context-store/CartProvider";

function App() {
  return (
    <CartShowProvider>
      <CartProvider>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/products">
              <StorePage />
            </Route>
          </Switch>
        </Layout>
      </CartProvider>
    </CartShowProvider>
  );
}

export default App;
