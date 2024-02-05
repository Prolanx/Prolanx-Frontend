import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import useResponsive from "../../hooks/useResponsive";

function ContactForm() {
  const media = useResponsive();
  const data = [
    {
      title: "Email us at:",
      message: "enquiry@prolanxdigital.co",
    },
    {
      title: "Address",
      message: "4 cecil Street, Scholes Wigan, WN13JL, Greater Manchester Uk",
    },
    {
      title: "Phone Number",
      message: "+44 (0) 773 372 4979",
    },
  ];
  return (
    <Box
      minH="693px"
      p={media.isDesktop ? "35px 100px" : "35px 10px"}
      bg={colors.primary2}
      borderRadius="8px"
      pt="35px"
      zIndex="4000"
      pos="relative"
    >
      <Heading
        mb="68px"
        fontSize={media.isDesktop ? "32px" : "22px"}
        fontWeight="600"
        color={colors.accent2}
        fontFamily="nexa"
      >
        Get in touch
      </Heading>

      <Flex
        // columns={3} spacingX={10}
        mb="40px"
        justifyContent={media.isDesktop && "space-between"}
        flexDir={media.isDesktop ? "row" : "column"}
      >
        {data.map((item) => (
          <Box color={colors.accent2} mb={!media.isDesktop && "10px"}>
            <Heading
               mb={media.isDesktop ? "15px" : "5px"}
              fontSize={media.isDesktop ? "28px" : "20px"}
              fontWeight="500"
              fontFamily="nexa"
            >
              {item.title}
            </Heading>
            <Text
              maxW="300px"
              fontSize={media.isDesktop ? "16px" : "13px"}
              fontFamily="mont"
            >
              {item.message}
            </Text>
          </Box>
        ))}
      </Flex>

      <Input
        mb="36px"
        bg="white"
        placeholder="Email"
        h="56px"
        fontSize="14px"
        rounded="4px"
        py="15px"
      />
      <Textarea
        bg="white"
        placeholder="Message"
        height="120px"
        fontSize="14px"
        rounded="4px"
        py="15px"
        mb="36px"
      />

      <Button
        h="56px"
        w="100%"
        fontSize="20px"
        bg={colors.secondary2}
        rounded="4px"
        color={colors.black}
      >
        Submit
      </Button>
    </Box>
  );
}

export default ContactForm;
