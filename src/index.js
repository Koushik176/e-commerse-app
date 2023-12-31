import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

/*
    React Bootstrap Configurantion
*/
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "./Context-store/Auth-Context/auth-context";
import { EmailContextProvider } from "./Context-store/Auth-Context/email-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <EmailContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EmailContextProvider>
  </AuthContextProvider>
);
