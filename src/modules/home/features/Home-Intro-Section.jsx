import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Header from "../../../components/header/Header";
// import { colors } from "../../constants/design";

import introIcon from "assets/intro-icon.svg";
import homeIntroIcon from "assets/home-intro-image.png";
import VerticalAnimation from "../../../components/other/VerticalAnimation";
import { useEffect } from "react";
import useResponsive from "../../../hooks/useResponsive";
import { colors } from "../../../constants/design";
import SectionWrapper2 from "../../../components/other/SectionWrapper2";

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
      height={media.isDesktop ? "646px" : "85vh"}
      position="relative"
      bg={colors.primaryBg}
    >
      <Header />

      <SectionWrapper2 h="100%">
        <Flex pos="relative" minH="100%" alignItems="center">
          <Box
            flexDir={"column"}
            w="100%"
            textAlign={!media.isDesktop && "center"}
            // justifyContent="center"
            px={media.isTablet ? "50px" : media.isMobile ? "12px" : null}
          >
            <Heading
              fontWeight="700"
              fontSize={media.isDesktop ? "60px" : "25px"}
              fontFamily="nexaFont"
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
              Empowering your journey through cutting edge technology and
              expertise
            </Text>
          </Box>

          {media.isDesktop && (
            <Box
              position="absolute"
              top="-100px"
              zIndex="1000"
              // right="117px"
              right="0px"
            >
              <VerticalAnimation initialPos={initialPosition}>
                <Image
                  src={homeIntroIcon}
                  objectFit="cover"
                  zIndex="1000"
                  ref={boxRef}
                />
              </VerticalAnimation>
            </Box>
          )}
        </Flex>
      </SectionWrapper2>

      <Image
        src={introIcon}
        pos="absolute"
        opacity=".35"
        objectFit="cover"
        h={media.isMobile || media.isTablet ? "100%" : "auto"}
        top={media.isMobile || media.isTablet ? "0px" : "-110px"}
        right={media.isMobile || media.isTablet ? "0px" : "-340px"}
      />
    </Box>
  );
}

export default HomeIntroSection;
