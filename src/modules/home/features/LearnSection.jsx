import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../../constants/design";
import showcase from "../../../assets/showcase.png";
import useResponsive from "../../../hooks/useResponsive";
import { Link } from "react-router-dom";

function LearnSection() {
  const media = useResponsive();

  const loginLink = "https://academy.prolanx.co/my-dashboard/";
  return (
    <Flex
      flexDir="column"
      backgroundImage={showcase}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      p={media.isDesktop ? "80px 120px" : "80px 20px"}
      justifyContent="center"
      alignItems={!media.isDesktop && "center"}
      textAlign={!media.isDesktop && "center"}
      color={colors.accent2}
      pos="relative"
    >
      <Heading
        fontWeight="600"
        mb="44px"
        fontFamily="nexa"
        fontSize={media.isDesktop ? "40px" : "30px"}
      >
      Get started
      </Heading>

      <Text
        fontSize={media.isDesktop ? "20px" : "14.8px"}
        mb="44px"
        maxW="415px"
        fontFamily="mont"
      >
        Our objective is to endow our students with a comprehensive set of tools
        that will enable them to actively shape their own professional journey.
      </Text>

      <Button
        w="250px"
        as={Link}
        to={loginLink}
        zIndex="5000"
        size="sm"
        _hover={{
          background: colors.accent,
          color: colors.black,
        }}
      >
        View Our Courses
      </Button>
    </Flex>
  );
}

export default LearnSection;
