import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../../../constants/design";
import programIcon from "assets/program-icon.png";
import VerticalAnimation from "../../../../components/other/VerticalAnimation";
import { programList } from "../../../../constants/program.data";
import useResponsive from "../../../../hooks/useResponsive";
import ProgramItem from "../../../../features/Program-Item";
import SectionWrapper2 from "../../../../components/other/SectionWrapper2";
import LinkButton from "../../../../components/button/LinkButton";
import { appLinks } from "../../../../constants";

function ProgramSection() {
  const media = useResponsive();

  return (
    <SectionWrapper2 pb="50px" pos="relative" zIndex="200">
      <Flex
        flexDir={media.isDesktop ? "row" : "column"}
        justifyContent="space-between"
        pt="50px"
      >
        <Box me={media.isDesktop && "110px"} maxW={media.isDesktop && "600px"}>
          <Heading
            mb="24px"
            fontFamily="mont"
            fontWeight="500"
            fontSize={
              media.isMobile ? "16px" : media.isTablet ? "20px" : "28px"
            }
          >
            Program Highlights
          </Heading>

          <Heading
            fontFamily="nexa"
            fontWeight="500"
            mb="24px"
            fontSize={
              media.isMobile ? "25px" : media.isTablet ? "30px" : "40px"
            }
          >
            Master essential skills and accelerate your career journey
          </Heading>

          <Text
            fontSize={media.isMobile ? "16px" : "16px"}
            fontFamily="mont"
            color={colors.black}
            mb={media.isDesktop ? "130px" : "50px"}
          >
            Our Bootcamp offers a comprehensive, practical learning experience
            with a focus on current industry practices. using an agile, hands-on
            approach, it includes interactive live sessions that go beyond
            theoretical knowledge, preparing participants for real-world
            applications and success.
          </Text>
        </Box>

        {media.isDesktop && (
          <VerticalAnimation>
            <Image src={programIcon} mt="-50px" />
          </VerticalAnimation>
        )}
      </Flex>

      <SimpleGrid
        columns={media.isMobile ? 1 : media.isTablet || media.isLaptop ? 2 : 4}
        // spacingX={10}
        mt="80px"
        // w="100%"
      >
        {programList.map((item) => (
          <ProgramItem data={item} />
        ))}
      </SimpleGrid>

      <Flex justifyContent={media.isMobile || media.isTablet ? "center" : "flex-start"}>
        <LinkButton title="View our courses" mt="36px" to={appLinks.bootcampList} />
      </Flex>

      {/* <BaseButton title={"jdgbjk"}/> */}
    </SectionWrapper2>
  );
}

export default ProgramSection;
