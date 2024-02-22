import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import IntroWrapper from "./Intro-Wrapper";
import useResponsive from "../../hooks/useResponsive";
import introIcon from "assets/intro-icon.svg";

function SecondaryIntro({ title, message }) {
  const media = useResponsive();
  return (
    <IntroWrapper>
      <Image
        src={introIcon}
        pos="absolute"
        opacity=".35"
        objectFit="cover"
        h={media.isMobile || media.isTablet ? "100%" : "auto"}
        top={media.isMobile || media.isTablet ? "0px" : "-110px"}
        right={media.isMobile || media.isTablet ? "0px" : "-340px"}
      />

      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        color={colors.accent2}
        textAlign="center"
        h="100%"
      >
        <Heading
          fontFamily="nexa"
          fontWeight="700"
          fontSize={media.isDesktop ? "60px" : "25px"}
          w={media.isMobile || media.isTablet ? "100%" : "60%"}
          mb={media.isDesktop ? "50px" : "30px"}
          mt={media.isDesktop ? "100px" : "30px"}
        >
          {title}
        </Heading>
        <Text
          fontFamily="mont"
          fontSize={{
            base: "14.5px",
            lg: "24px",
          }}
          w={media.isDesktop ? "60%" : "98%"}
        >
          {message}
        </Text>
      </Flex>
    </IntroWrapper>
  );
}

export default SecondaryIntro;
