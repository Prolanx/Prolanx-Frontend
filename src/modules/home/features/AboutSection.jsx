import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import homeAboutImage from "../../../assets/home-about-image.svg";
import useResponsive from "../../../hooks/useResponsive";
import { Link } from "react-router-dom";
import { navLinks, routes } from "../../../constants";
import SectionWrapper2 from "../../../components/other/SectionWrapper2";
import SectionTitle from "../../../components/title/Section-Title";
import BorderedButton from "../../../components/button/BorderedButton";
function AboutSection() {
  const media = useResponsive();
  return (
    <SectionWrapper2>
      <Flex flexDir={media.isDesktop ? "row" : "column"} position="relative">
        <Flex justifyContent={!media.isDesktop && "center"}>
          <Image
            src={homeAboutImage}
            me={media.isDesktop && "144px"}
            h={media.isTablet ? "350px" : media.isMobile ? "200px" : "auto"}
            w={media.isTablet ? "350px" : media.isMobile ? "200px" : "auto"}
          />
        </Flex>

        <Flex
          flexDir="column"
          maxW="500px"
          color="#2E3133"
          mt={!media.isDesktop && "80px"}
        >
          <Box>
            <SectionTitle
              fontSize={media.isMobile ? "19px" : "32px"}
              mb="44px"
              title="  About Prolanx"
            />
          </Box>

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

          <BorderedButton
            title="Explore our faculties"
            as={Link}
            to={routes.about}
            size={media.isMobile ? "sm" : "lg"}
            maxW={media.isMobile ? "100%" : "279px"}
          />
        </Flex>
      </Flex>
    </SectionWrapper2>
  );
}

export default AboutSection;
