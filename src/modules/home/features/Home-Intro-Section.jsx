import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Header from "../../../components/header/Header";
// import { colors } from "../../constants/design";

import introIcon from "assets/intro-icon.svg";
import homeIntroIcon from "assets/home-intro-icon.svg";
import VerticalAnimation from "../../../components/other/VerticalAnimation";
import { useEffect } from "react";
import useResponsive from "../../../hooks/useResponsive";
import { colors } from "../../../constants/design";

function HomeIntroSection() {
  const boxRef = useRef(null);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (boxRef.current) {
      const { top, right } = boxRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      // Calculate the initial position based on top-right alignment
      const xPosition = viewportWidth - right; // Distance from the right edge of the viewport
      setInitialPosition({ x: xPosition, y: top });
    }
  }, []);

  const media = useResponsive();
  const title = "Empower Your Digital Future";

  return (
    <Box
      height={media.isDesktop ? "646px" : "100vh"}
      position="relative"
      bg={colors.primary2}
    >
      <Image
        src={introIcon}
        pos="absolute"
        opacity=".35"
        objectFit="cover"
        top="-110px"
        right="-340px"
      />

          
       {media.isDesktop && (
        <VerticalAnimation initialPos={initialPosition}>
          <Image
            src={homeIntroIcon}
            position="absolute"
            objectFit="cover"
            top="67px"
            right="117px"
            zIndex="1000"
            ref={boxRef}
          />
        </VerticalAnimation>
      )} 

      <Header />

      <Flex
        flexDir={"column"}
        ps={media.isDesktop ? "122px" : "0px"}
        textAlign={!media.isDesktop && "center"}
        justifyContent="center"
        h="100%"
        px={media.isTablet ? "50px" : media.isMobile ? "12px" : null}
      >
        <Heading
          fontWeight="700"
          fontSize={media.isDesktop ? "60px" : "25px"}
          fontFamily="nexa"
          w={media.isDesktop && "450px"}
          color={colors.accent2}
          mb={media.isDesktop ? "50px" : "20px"}
        >
          {title}
        </Heading>
        <Text
          maxW={media.isDesktop && "500px"}
          fontSize={media.isDesktop ? "24px" : "13px"}
          color={colors.accent2}
          fontFamily="mont"
          mb="70px"
        >
          Empowering your journey through cutting edge technogly and expertise
        </Text>
      </Flex>
    </Box>
  );
}

export default HomeIntroSection;