import React from "react";
import { colors } from "../../constants/design";
import { Button, Heading, Text, Box } from "@chakra-ui/react";
import useResponsive from "../../hooks/useResponsive";

function ServiceItemIndex({ data }) {
  const media = useResponsive();
  return (
    <Box
      p={media.isDesktop ? "36px" : media.isTablet ? "26px" : "15px"}
      py={!media.isDesktop &&  "35px"}
      color={colors.accent2}
    
      bg="#4AB556"
    >
      <Heading
        mb="36px"
        fontSize={media.isMobile ? "20px" : "40px"}
        fontWeight="500"
        fontFamily="nexa"
      >
        {data.title}
      </Heading>
      <Text
        mb="36px"
        fontSize={media.isMobile ? "16px" : "20px"}
        fontFamily="mont"
      >
        {data.message}
      </Text>
    </Box>
  );
}

export default ServiceItemIndex;
