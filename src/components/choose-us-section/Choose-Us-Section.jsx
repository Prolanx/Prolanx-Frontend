import React from "react";
import ChooseUsItem from "./Choose-Us-Item";
import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { colors } from "../../constants/design";

import innovateIcon from "../../assets/innovation-icon.png";
import knowledgeIcon from "../../assets/knowledge-icon.png";
import solutionsIcon from "../../assets/solutions-icon.png";
import excellenceIcon from "../../assets/excellence-icon.png";

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

  return (
    <Box p="80px 120px" bg={colors.primary2}>
      <Heading
        pb="8px"
        mb="61px"
        display="inline-block"
        fontSize="32px"
        fontWeight="500"
        borderBottom="1px solid #00000050"
        color={colors.accent2}
        borderBottomColor={colors.accent2}
      >
        Why choose Us
      </Heading>

      <Flex>
        {chooseUsOptions.map((item) => (
          <ChooseUsItem data={item} icons={chooseUsIcons} />
        ))}
      </Flex>
    </Box>
  );
}

export default ChooseUsSection;
