import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../../components/heading/Custom-Heading";
import { colors } from "../../../constants/design";
import useResponsive from "../../../hooks/useResponsive";

function ServiceItemRight({ title, message, btnText, type }) {
  const radius = "40%";
  const media = useResponsive();



  return (
    <React.Fragment>


{media.i}
<Box
      maxW="667px"
      // maxH="572px"
      py="80px"
      bg={colors.accent2}
      borderTopLeftRadius={  type == "right" && radius}
      borderBottomRightRadius={type == "right" && radius}
      borderTopRightRadius={type == "left" && radius}
      borderBottomLeftRadius={type == "left" && radius}
      textAlign={type == "left" && "end"}
    >
      <CustomHeading
        title={title}
        mb="44px"
        fontFamily="nexa"
        fontSize="35px"
        ps={type =="right" ? "127px" : "0px"}
        pe={type =="right" ? "42px" : "100px"}
      />

      <Box px={type == "right" ? "42px" : "60px"}>
        <Text mb="44px" fontFamily="mont" fontSize="16px">
          {message}
        </Text>
        <Button size="md">{btnText}</Button>
      </Box>
    </Box>
    </React.Fragment>
  
  );
}

export default ServiceItemRight;
