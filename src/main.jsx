import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "../src/Components/nhandev/store.jsx";
import { BrowserRouter } from "react-router-dom";
import ApiStateProvider from "./Components/nhandev/ApiStateProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiStateProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApiStateProvider>
    </Provider>
  </React.StrictMode>
);
