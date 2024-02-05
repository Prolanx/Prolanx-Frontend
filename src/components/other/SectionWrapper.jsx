import { Box } from "@chakra-ui/react";
import React from "react";
import useResponsive from "../../hooks/useResponsive";

function SectionWrapper({ children, ...props }) {
  const media = useResponsive();
  return (
    <Box p={media.isDesktop ? "80px 120px" : media.isTablet ? "50px 25px" : "50px 10px"} {...props}>
      {children}
    </Box>
  );
}

export default SectionWrapper;
