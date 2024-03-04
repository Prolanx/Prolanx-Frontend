import { Box } from "@chakra-ui/react";
import React from "react";

function IndexWrapper({ children, ...props }) {
  return (
    <Box pos="relative" zIndex="300" {...props} >
      {children}
    </Box>
  );
}

export default IndexWrapper;
