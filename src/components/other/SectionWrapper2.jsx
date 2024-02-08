import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import useResponsive from "../../hooks/useResponsive";

function SectionWrapper2({ children, ...props }) {
  const media = useResponsive();
  return (
    <Flex
      p={
        media.isMobile
          ? "80px 20px"
          : media.isTablet
          ? "80px 50px"
          : media.is2xl
          ? "80px 400px"
          : media.is3Xl? 
          "80px 650px":
          media.is4k ? "0px"

          : "80px 120px"
      }
      justifyContent="center"
      {...props}
    >
      {children}
    </Flex>
  );
}

export default SectionWrapper2;
