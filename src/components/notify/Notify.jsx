import { Flex, Heading, Icon, Text, Box, Center, Spinner, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiClipboard, FiCheckCircle, FiFileText, FiWifiOff, FiAlertOctagon } from "react-icons/fi";

function Notify({ title, status, message, children, messageWidth, btnAction, btnText }) {
  const [titleState, setTitle] = useState();
  const [messageState, setMessage] = useState();
  const [bgColor, setBgColor] = useState(null);

  const notify = {
    loading: "loading",
    success: "success",
    error: "error",
  };
  // abstract this to its own hook...called useNotifyHook
  useEffect(() => {
    if (status === notify.loading) {
      if (!title || title === "") setTitle("Loading Status");
      if (!message || message === "") setMessage("Please wait. This will only take a few seconds.");
    }
    if (status === notify.success) {
      if (!title || title === "") setTitle("Success Status");
      if (!message || message === "") setMessage("Your request has been successfully completed");
      // setIcon(FiCheckCircle);
      setBgColor("green.400");
    }
    if (status === notify.error) {
      if (!title || title === "") setTitle("Error Status");
      if (!message || message === "") setMessage("There was an error with your request. Please try again");
      // setIcon(<FiAlertCircle/>);
      setBgColor("red.500");
    }
    if (status === notify.info) {
      if (!title || title === "") setTitle("Note Info");
      setBgColor("blue.500");
    }
    if (status === "networkError") {
      if (!title || title === "") setTitle("Network Error");
      setBgColor("orange.500");
    }
  }, [status]);

  return (
    <Flex flexDir="column" textAlign="center" alignItems="center" w="100%">
      <Box>
        {status === notify.loading ? (
          <Spinner thickness="4px" size="xl" speed=".7s" />
        ) : (
          <Center bg={bgColor} rounded="full" p={5}>
            <Icon
              fontSize="29px"
              color="white"
              as={
                status == notify.error
                  ? FiAlertOctagon
                  : status === "networkError"
                  ? FiWifiOff
                  : status === notify.info
                  ? FiFileText
                  : status === notify.empty
                  ? FiClipboard
                  : FiCheckCircle
              }
            />
          </Center>
        )}
      </Box>

      <Heading fontSize="25px" fontWeight="500" mt={5}>
        {title || titleState}
      </Heading>
      <Text fontSize="16.4px" w={messageWidth} mt={5}>
        {message || messageState}
      </Text>

      {btnAction && (
        <Button mt={6} py="18px" px="18px" onClick={() => btnAction()} bg="black" color="white" size="sm">
          {btnText || "Click Here"}
        </Button>
      )}

      {children && <Box mt={4}>{children}</Box>}
    </Flex>
  );
}

export default Notify;
