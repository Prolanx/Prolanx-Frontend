import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

import { colors } from "../../../../constants/design";
import programIcon from "assets/program-icon.png";
import VerticalAnimation from "../../../../components/other/VerticalAnimation";
import { programList } from "../../../../constants/program.data";
import useResponsive from "../../../../hooks/useResponsive";
import SectionWrapper from "../../../../components/other/SectionWrapper";
import ProgramItem from "../../../../features/Program-Item";

function ProgramSection() {
  const media = useResponsive();

  return (
    <SectionWrapper>
      <Flex flexDir={media.isDesktop ? "row" : "column"} pt="50px">
        <Box me={media.isDesktop && "110px"} maxW={media.isDesktop && "600px"}>
          <Heading
            mb="24px"
            fontFamily="mont"
            fontWeight="500"
            fontSize={
              media.isDesktop ? "28px" : media.isTablet ? "20px" : "16px"
            }
          >
            Program Highlights
          </Heading>

          <Heading
            fontFamily="nexa"
            fontWeight="500"
            mb="24px"
            fontSize={
              media.isDesktop ? "48px" : media.isTablet ? "30px" : "25px"
            }
          >
            Learn by doing with our learning experience
          </Heading>

          <Text
            fontSize={media.isMobile ? "16px" : "16px"}
            fontFamily="mont"
            color={colors.black}
            mb={media.isDesktop ? "130px" : "50px"}
          >
            Our Bootcamp offers a comprehensive, prcatical learning experience
            with a focus on current industry practices, using an agile hands on
            approadh, it includes interactive live session that go beyond
            theoritical knowledge, preparing participants for world application
            and success
          </Text>
        </Box>

        {/* <Image src={programIcon} /> */}
        {media.isDesktop && (
          <VerticalAnimation>
            <Image src={programIcon} mt="-50px" />
          </VerticalAnimation>
        )}
      </Flex>

      <Flex flexDir={media.isDesktop ? "row" : "column"}>
        {programList.map((item) => (
          <ProgramItem data={item} />
        ))}
      </Flex>
    </SectionWrapper>
  );
}

export default ProgramSection;
