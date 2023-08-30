import React, { useContext } from "react";
import { Switch } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import StorePage from "./Pages/StorePage";
import CartShowProvider from "./Context-store/Cart-Show/CartShowProvider";
import CartProvider from "./Context-store/CartProvider";
import ContactUsPage from "./Pages/ContactUsPage";
import AuthPage from "./Pages/AuthPage";
import AuthContext from "./Context-store/Auth-Context/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <CartShowProvider>
      <CartProvider>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/products">
              {authCtx.isLoggedIn && <StorePage />}
              {!authCtx.isLoggedIn && <Redirect to="/auth" />}
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/auth">
              <AuthPage />
            </Route>
            <Route path="/contactus">
              <ContactUsPage />
            </Route>
          </Switch>
        </Layout>
      </CartProvider>
    </CartShowProvider>
  );
}

export default App;
