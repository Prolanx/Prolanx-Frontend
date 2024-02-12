import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../../constants/design";
import showcase from "../../../assets/showcase.png";
import useResponsive from "../../../hooks/useResponsive";
import { Link } from "react-router-dom";
import BorderedButton from "../../../components/button/BorderedButton";

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
        Ready to learn ?
      </Heading>

      <Text
        fontSize={media.isMobile ? "14.5px" : "20px"}
        mb="44px"
        maxW="415px"
        fontFamily="mont"
      >
        Our objective is to endow our students with a comprehensive set of tools
        that will enable them to actively shape their own professional journey.
      </Text>

      <BorderedButton
        title="View our courses"
        w="250px"
        as={Link}
        to={loginLink}
        zIndex="5000"
        size="sm"
        color={colors.whiteText}

        _hover={{
          color: "black",
          bg: colors.accent
        }}
      />
    </Flex>
  );
}

export default LearnSection;
