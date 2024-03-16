import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from "../src/Components/nhandev/store.jsx";
import { BrowserRouter } from "react-router-dom";
import ApiStateProvider from "./Components/nhandev/ApiStateProvider.jsx";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApiStateProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApiStateProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
