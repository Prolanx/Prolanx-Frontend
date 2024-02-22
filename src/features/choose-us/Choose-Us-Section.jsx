import React from "react";
import ChooseUsItem from "./Choose-Us-Item";
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { colors } from "../../constants/design";

import innovateIcon from "../../assets/innovation-icon.png";
import knowledgeIcon from "../../assets/knowledge-icon.png";
import solutionsIcon from "../../assets/solutions-icon.png";
import excellenceIcon from "../../assets/excellence-icon.png";
import SectionWrapper from "../../components/other/SectionWrapper";
import useResponsive from "../../hooks/useResponsive";
import SectionTitle from "../../components/title/Section-Title";
import SectionWrapper2 from "../../components/other/SectionWrapper2";

function ChooseUsSection() {
  const chooseUsIcons = {
    innovation: innovateIcon,
    solutions: solutionsIcon,
    knowledge: knowledgeIcon,
    excellence: excellenceIcon,
  };

  const chooseUsOptions = [
    {
      title: "Innovation and Research",
      message: "A hotbed of innovation continually pushing the status quo",
      key: "innovation",
    },
    {
      title: "Knowledge Transfer",
      message: "Empowering individual with necessary knowledge and skills",
      key: "knowledge",
    },
    {
      title: "Customs Solutions",
      message:
        "Expertise in creating custom solutions that help businesses transition seamlessly",
      key: "solutions",
    },
    {
      title: "Excellence and Vision",
      message: "A brand that represents excellence innovation and vision",
      key: "excellence",
    },
  ];

  const media = useResponsive();

  return (
    <SectionWrapper2 background={colors.primaryBg}>
      <Box>
        <Flex justifyContent={media.isLargeScreen && "start"}>
          <SectionTitle
            name="Why Choose us"
            mb="60px"
            color={colors.whiteText}
            borderBottom={"1px solid " + colors.accent + "50"}
          />
        </Flex>
        <SimpleGrid
          spacing={5}
          columns={
            media.isMobile ? 1 : media.isTablet ? 2 : media.isLaptop ? 3 : 4
          }
        >
          {chooseUsOptions.map((item, index) => (
            <ChooseUsItem data={item} icons={chooseUsIcons} />
          ))}
        </SimpleGrid>
      </Box>
    </SectionWrapper2>
  );
}

export default ChooseUsSection;
