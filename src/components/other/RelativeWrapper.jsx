import { Box } from "@chakra-ui/react";
import React from "react";

function RelativeWrapper({ children, ...props }) {
  return (
    <Box pos="relative" {...props} >
      {children}
    </Box>
  );
}

export default RelativeWrapper;
