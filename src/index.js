import React from "react";
import ReactDOM from "react-dom/client";
import Onbording from "./Components/Onbording";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./ContextApi/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Onbording />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
