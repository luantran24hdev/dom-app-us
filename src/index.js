import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Provider>,

  document.getElementById("root")
);
