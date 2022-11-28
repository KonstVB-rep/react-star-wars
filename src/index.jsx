import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ThemeProvider from "context/ThemeProvider";
import store from "./store/store";

import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{
  path: "/react-star-wars/*",
  element: <App />,
}], {basename: ""});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
