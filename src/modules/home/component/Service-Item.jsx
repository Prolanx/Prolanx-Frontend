import { Button, Heading, Box, Text } from "@chakra-ui/react";
import React from "react";

function ServiceItem({title, message, ...props}) {
    // w="385px" h="411px"
  return (
    <Box border="1px solid black" p="37px 0px" ps="37px" {...props}>
      <Heading fontSize="28px" mb="42px" fontWeight="500" maxW="128px">
        {title}
      </Heading>

      <Text mb="90px" maxW="300px">{message || "Prolanx is a hotbed of innovation that goes beyond simple solutions."}</Text>

      <Button bg="#C2FFBD">Learn More</Button>
    </Box>
  );
}

export default ServiceItem;
