import React from "react";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import UserContextProvider from "./components/LoginComponents/UserContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Provider>
);
