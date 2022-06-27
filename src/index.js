import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import ContextProvider from './Component/context/ContextProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/store'
ReactDOM.render(

  <ContextProvider>
  <BrowserRouter>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>
  </BrowserRouter>
  </ContextProvider>,
  document.getElementById("root")
);
