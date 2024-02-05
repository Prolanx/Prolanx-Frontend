import React from "react";
import { colors } from "../../constants/design";
import { Button, Heading, Text, Box } from "@chakra-ui/react";

function ServiceItemIndex({ data }) {
  return (
    <Box p="36px"  h="400px" color={colors.accent2} bg="#4AB556">
      <Heading fontSize="40px" mb="36px" fontWeight="500">
        {data.title}
      </Heading>
      <Text fontSize="20px" mb="36px">
        {data.message}
      </Text>
    </Box>
  );
}

export default ServiceItemIndex;
