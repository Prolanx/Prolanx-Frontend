import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import homeAboutImage from "../../../assets/home-about-image.svg";
import useResponsive from "../../../hooks/useResponsive";
import { Link } from "react-router-dom";
import { navLinks, routes } from "../../../constants";
function AboutSection() {
  const media = useResponsive();
  return (
    <Flex
      p={media.isDesktop ? "80px 120px" : "50px 20px"}
      flexDir={media.isDesktop ? "row" : "column"}
      position="relative"
    >
      <Flex justifyContent={!media.isDesktop && "center"}>
        <Image
          src={homeAboutImage}
          me={media.isDesktop && "140px"}
          h={media.isTablet ? "300px" : media.isMobile ? "200px" : "auto"}
          w={media.isTablet ? "300px" : media.isMobile ? "200px" : "auto"}
        />
      </Flex>

      <Box maxW="500px" color="#2E3133" mt={!media.isDesktop && "50px"}>
        <Text
          fontSize={media.isMobile ? "19px" : "32px"}
          borderBottomWidth=".1px"
          borderBottomColor="#2E313390"
          display="inline-block"
          pb={1}
          mb="44px"
          fontWeight="600"
          fontFamily="nexa"
        >
          About Prolanx
        </Text>

        <Text
          mb="36px"
          fontWeight="600"
          fontFamily="nexa"
          fontSize={media.isMobile ? "25px" : "40px"}
        >
          We are a global Leader in the IT Industry
        </Text>

        <Text
          fontSize={media.isMobile ? "13px" : "20px"}
          fontWeight="400"
          mb="36px"
          fontFamily="mont"
        >
          Prolanx is a hotbed of innovation that goes beyond simple solutions.
          We believe in continually pushing the status quo and building a
          culture in which proactive innovation is the norm rather than the
          exception
        </Text>

        <Button
          size={media.isMobile ? "sm" : "lg"}
          h="50px"
          as={Link}
          to={routes.about}
          bg="transparent"
          variant="outline"
          borderColor="#008DB9"
        >
          Learn More About Us
        </Button>
      </Box>
    </Flex>
  );
}

export default AboutSection;
