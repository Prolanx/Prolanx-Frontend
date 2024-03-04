import { Box } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import Header from "../header/Header";

function IntroWrapper({ children, ...props }) {
  return (
    <Box height="580px" bg={colors.primaryBg} pos="relative" zIndex="500" overflow="hidden" {...props}>
      {/* <Box pos="absolute" w="100%">
        <Header />
      </Box> */}
      <Header />
      {children}
    </Box>
  );
}

export default IntroWrapper;
