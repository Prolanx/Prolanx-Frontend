import React, { useEffect, useState } from "react";
import {
  Alert as ChakraAlert,
  Box,
  Flex,
  CloseButton,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

function Alert({ status, isOpen, title, message, reset }) {
  return (
    <ChakraAlert status={status} borderRadius={5} py={4}>
      <Box w="100%">
        <Flex alignItems="center" justifyContent="space-between" mb={2}>
          <Flex alignItems="center">
            <AlertIcon h={5} w={5} />
            <AlertTitle fontSize={16} fontWeight="700" mb="2px">
              {title || status || "Note"}
            </AlertTitle>
          </Flex>

          {reset && <CloseButton onClick={reset} />}
        </Flex>
        <AlertDescription fontSize={16}>{message}</AlertDescription>
      </Box>
    </ChakraAlert>
    // <React.Fragment>
    //   {isOpen && (

    //   )}
    // </React.Fragment>
  );
}

export default Alert;
