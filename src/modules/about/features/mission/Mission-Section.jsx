import React from "react";
import SectionWrapper from "components/other/SectionWrapper";
import { Box, Heading, Flex, Text, Image } from "@chakra-ui/react";
import aboutMission from "assets/about-mission.svg";
import useResponsive from "../../../../hooks/useResponsive";
import { colors } from "../../../../constants/design";
import SectionWrapper2 from "../../../../components/other/SectionWrapper2";

function MissionSection({ data }) {
  const media = useResponsive();
  return (
    <SectionWrapper2 bg={colors.accent3}>
      <Flex flexDir={media.isDesktop ? "row" : "column"}>
        <Box maxW="590px">
          <Heading
            mb="50px"
            fontSize="32px"
            color={colors.black}
            fontFamily="nexa"
          >
            {data.title}
          </Heading>

          <Box fontSize="20px" color={colors.black} fontFamily="mont">
            {data.message.map((item) => (
              <Text mb="36px">{item.data}</Text>
            ))}
          </Box>
        </Box>

        <Flex
          justifyContent={!media.isDesktop && "center"}
          mt={media.isMobile || media.isTablet ? "50px" : "0px"}
        >
          <Image
            ms={media.isDesktop && "105px"}
            src={aboutMission}
            h={media.isTablet ? "250px" : media.isMobile ? "230px" : "auto"}
            w={media.isTablet ? "250px" : media.isMobile ? "230px" : "auto"}
          />
        </Flex>
      </Flex>
    </SectionWrapper2>
  );
}

export default MissionSection;
