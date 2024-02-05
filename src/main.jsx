import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import AppLayout from "./AppLayout.jsx";
import AppProvider from "./App-Provider.jsx";
import "./styles/main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
    
      <div className="App">
        <AppProvider>
          <AppLayout />
        </AppProvider>
      </div>
    </BrowserRouter>
  </ChakraProvider>
);
