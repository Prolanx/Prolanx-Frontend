import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { AnimatePresence } from "framer-motion";
// import AppRoutes from "./presentation/views/pages/AppRoutes"
import { Box } from "@chakra-ui/react";
import Home from "./modules/home/Home";

function App() {
  return (
    <Box className="App">
      <AnimatePresence mode="wait">
        {/* <AppRoutes/> */}
        <Home/>
      </AnimatePresence>
    </Box>
  );
}

export default App;