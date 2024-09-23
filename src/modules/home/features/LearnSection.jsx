import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../../constants/design";
// import showcase from "../../../assets/showcase.png";
import showcase from "assets/internship-home.jpg";
import useResponsive from "../../../hooks/useResponsive";
import { Link } from "react-router-dom";
import BorderedButton from "../../../components/button/BorderedButton";
import { appLinks, internshipLink } from "../../../constants";
import SectionWrapper2 from "../../../components/other/SectionWrapper2";

function LearnSection() {
  const media = useResponsive();
  return (
    <Box
      backgroundImage={showcase}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      zIndex="300"
      pos="relative"
    >

      <Box bg="#00000050" w="100%" h="100%" pos="absolute"></Box>
      <SectionWrapper2 zIndex="500" pos="relative">
        <Flex flexDir="column" justifyContent="center" color={colors.accent2}>
          <Heading
            fontWeight="600"
            mb="44px"
            fontFamily="nexa"
            fontSize={media.isDesktop ? "40px" : "30px"}
          >
            {/* Ready to learn ? */}

            Prolanx Internship
          </Heading>

          <Text
            fontSize={media.isMobile ? "14.5px" : "20px"}
            mb="44px"
            maxW="415px"
            fontFamily="mont"
          >
            Join our three-month Full Stack Development Internship and become a competent, experienced, and confident developer

            {/* Our objective is to endow our students with a comprehensive set of
            tools that will enable them to actively shape their own professional
            journey. */}
          </Text>

          <BorderedButton
            title="Enroll Now"
            w={media.isMobile ? "100%" : "250px"}
            as={Link}
            // to={appLinks.bootcampList}
            to={internshipLink}
            color={colors.whiteText}
            _hover={{
              color: "black",
              bg: colors.accent,
            }}
          />
        </Flex>
      </SectionWrapper2>
    </Box>
  );
}

export default LearnSection;
