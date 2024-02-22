import React from "react";
import { Box, Heading, Flex, Text, Image } from "@chakra-ui/react";
import aboutMission from "assets/about-mission.svg";
import useResponsive from "../../../../hooks/useResponsive";
import { colors } from "../../../../constants/design";
import SectionWrapper2 from "../../../../components/other/SectionWrapper2";

function MissionSection({ data }) {
  const media = useResponsive();
  return (
    <SectionWrapper2>
      <Flex
        flexDir={media.isMobile || media.isTablet ? "column" : "row"}
        justifyContent="space-between"
      >
        <Box
          maxW={media.isMobile || media.isTablet ? "100%" : media.isLaptop ? "500px": "590px"}
          w="100%"
          me="100px"
        >
          <Heading
            mb="50px"
            fontSize="32px"
            color={colors.black}
            fontFamily="nexa"
          >
            {data.title}
          </Heading>

          <Box color={colors.black} fontFamily="mont">
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
            h={media.isTablet ? "250px" : media.isMobile ? "240px" : "auto"}
            w={media.isTablet ? "250px" : media.isMobile ? "240px" : "auto"}
          />
        </Flex>
      </Flex>
    </SectionWrapper2>
  );
}

export default MissionSection;
