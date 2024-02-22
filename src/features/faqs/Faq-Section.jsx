import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import FaqComponent from "./Faq-Component";
import useResponsive from "../../hooks/useResponsive";
import SectionWrapper from "../../components/other/SectionWrapper";
import CustomHeading from "../../components/heading/Custom-Heading";
import { faqData } from "../../constants";


function FaqSection({ hideTitle, ...props }) {
  const media = useResponsive();
  return (
    <SectionWrapper>
      {!hideTitle && (
        <CustomHeading
          title="FAQ"
          fontSize={media.isDesktop ? "32px" : "25px"}
          textAlign="center"
          mb="50px"
        />
      )}

      <Center>
        <FaqComponent data={faqData} />
      </Center>
    </SectionWrapper>
  );
}

export default FaqSection;
