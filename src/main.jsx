import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "./routes/AppRoutes.jsx";
import AppLayout from "./AppLayout.jsx";
import AppProvider from "./App-Provider.jsx";
// import { Provider } from "react-redux";
// import store from "./data/store/index.js";s
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
