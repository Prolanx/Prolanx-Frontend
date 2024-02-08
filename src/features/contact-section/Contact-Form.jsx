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
import SectionWrapper2 from "../../components/other/SectionWrapper2";

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
      // minH="693px"
      py="50px"
      px={media.isLargeScreen ? "50px": media.isDesktop ? "50px" : "20px"}
      bg={colors.primaryBg}
      borderRadius={media.isMobile || media.isTablet ? "0px" : "8px"}
      pt="35px"
      zIndex="4000"
      pos="relative"
    
    >
      <Box w="100%" >
        <Heading
          mb="68px"
          fontSize={media.isDesktop ? "32px" : "22px"}
          fontWeight="600"
          color={colors.accent2}
          fontFamily="nexa"
        >
          Get in touch
        </Heading>

        <SimpleGrid
        columns={3}
        spacingX={5}
          mb="40px"
          justifyContent={media.isDesktop && "space-between"}
          flexDir={media.isDesktop ? "row" : "column"}
        >
          {data.map((item) => (
            <Box color={colors.accent2} mb={!media.isDesktop && "10px"} maxw="300px">
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
        </SimpleGrid>

        <Input
          mb="36px"
          bg="white"
          placeholder="Email"
          h="56px"
          fontSize="14px"
          size="xs"
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
          minH={!media.isMobile && "56px"}
          w="100%"
          fontSize={media.isMobile ? "14px" : media.isTablet ? "20px" : "20px"}
          bg={colors.accent}
          rounded="4px"
          fontFamily="nexa"
          color={colors.black}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default ContactForm;
