import { Box } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import Header from "../header/Header";

function IntroWrapper({ children }) {
  return (
    <Box height="100vh" bg={colors.primary2} pos="relative" overflow="hidden">
      <Box pos="absolute" w="100%">
        <Header />
      </Box>

      {children}
    </Box>
  );
}

export default IntroWrapper;
