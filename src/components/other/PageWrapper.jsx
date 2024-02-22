import { Box } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";

function PageWrapper({ children, ...props }) {
  return (
    <Box bg={colors.whiteText} minW="100%" {...props}>
      {children}
    </Box>
  );
}

export default PageWrapper;
