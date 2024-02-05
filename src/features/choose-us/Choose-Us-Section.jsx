import React from "react";
import ChooseUsItem from "./Choose-Us-Item";
import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { colors } from "../../constants/design";

import innovateIcon from "../../assets/innovation-icon.png";
import knowledgeIcon from "../../assets/knowledge-icon.png";
import solutionsIcon from "../../assets/solutions-icon.png";
import excellenceIcon from "../../assets/excellence-icon.png";
import SectionWrapper from "../../components/other/SectionWrapper";
import useResponsive from "../../hooks/useResponsive";
import SectionTitle from "../../components/title/Section-Title";

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
    <SectionWrapper bg={colors.primary2}>
      
      <SectionTitle name="Why Choose us" pb="8px" mb="60px" />

      <Flex flexDir={media.isDesktop ? "row " : "column"}>
        {chooseUsOptions.map((item) => (
          <ChooseUsItem data={item} icons={chooseUsIcons} />
        ))}
      </Flex>
    </SectionWrapper>
  );
}

export default ChooseUsSection;
