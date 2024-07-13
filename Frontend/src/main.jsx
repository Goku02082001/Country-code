import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "./context/AuthContext.jsx";

import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <DataContextProvider>
    <AuthContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AuthContextProvider>
    </DataContextProvider>
  </BrowserRouter>
);
