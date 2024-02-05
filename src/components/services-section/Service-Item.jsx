import React from "react";
import { colors } from "../../constants/design";
import { Button, Heading, Box, Text } from "@chakra-ui/react";

function ServiceItem({ data, isHideBorder, isBorderTop }) {
  const border = "1px solid "+ colors.primaryGrad + "50";
  return (
    <Box
      py="36px"
      px="45px"
      // w="400px "
      h="400px"
      borderRight={isHideBorder ? "0px" : border}
    
      borderTop={isBorderTop && border}
      // borderColor={colors.primaryGrad}

      color={colors.black}
    >
      <Heading fontSize="28px" mb="36px" fontWeight="500" color="#2E3133" w="127px">
        {data.title}
      </Heading>

      <Text fontSize="16px" mb="36px" color="#2E3133" w="306px" h="100px">
        {data.message}
      </Text>

      {data.link && (
        <Button
          w="186px"
          h="50px"
          border=".5px solid"
          borderColor={colors.primaryGrad}
          fontSize="17px"
          bg="transparent"
          rounded="2px"
        >
          Learn More
        </Button>
      )}
    </Box>
  );
}

export default ServiceItem;
