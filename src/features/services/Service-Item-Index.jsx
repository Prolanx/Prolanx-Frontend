import React from "react";
import { colors } from "../../constants/design";
import { Button, Heading, Text, Box } from "@chakra-ui/react";
import useResponsive from "../../hooks/useResponsive";

function ServiceItemIndex({ data }) {
  const media = useResponsive();
  return (
    <Box p="36px" h="400px" color={colors.accent2} bg="#4AB556">
      <Heading
        mb="36px"
        fontSize={media.isMobile ? "20px" : "40px"}
        fontWeight="500"
      >
        {data.title}
      </Heading>
      <Text mb="36px" fontSize={media.isMobile ? "16px" : "20px"}>
        {data.message}
      </Text>
    </Box>
  );
}

export default ServiceItemIndex;
