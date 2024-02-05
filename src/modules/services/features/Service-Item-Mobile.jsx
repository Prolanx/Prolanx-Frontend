import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../../components/heading/Custom-Heading";
import { colors } from "../../../constants/design";
import useResponsive from "../../../hooks/useResponsive";

function ServiceItemMobile({ title, message, btnText, type }) {
  const radius = "40%";
  const media = useResponsive();
  return (
    <Box p="40px 10px" bg={colors.accent2} rounded="8px">
      <CustomHeading
        title={title}
        mb="44px"
        fontFamily="nexa"
        fontWeight="600"
        fontSize={media.isDesktop ? "35px" : media.isTablet ? "25px" : "22px"}
      />

      <Box>
        <Text
          mb="44px"
          fontFamily="mont"
       
          fontSize={media.isDesktop ? "16px" : media.isTablet ? "14px" : "14px"}
        >
          {message}
        </Text>
        <Button size="md">{btnText}</Button>
      </Box>
    </Box>
  );
}

export default ServiceItemMobile;
