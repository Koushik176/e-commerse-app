import React from "react";
import { Switch } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
