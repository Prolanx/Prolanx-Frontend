import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import FaqComponent from "./Faq-Component";
import useResponsive from "../../hooks/useResponsive";
import SectionWrapper from "../../components/other/SectionWrapper";
import CustomHeading from "../../components/heading/Custom-Heading";
import { faqData } from "../../constants";
import SectionWrapper2 from "../../components/other/SectionWrapper2";
import SectionTitle from "../../components/title/Section-Title";

function FaqSection({ hideTitle, title, faqData, ...props }) {
  const media = useResponsive();
  return (
    <SectionWrapper2>
      {!hideTitle && (
        <SectionTitle
          title={title}
          // fontSize={media.isDesktop ? "32px" : "25px"}
          textAlign="center"
          mb="50px"
          border="0px"
          w="100%"
        
        />
      )}

      <Center>
        <FaqComponent data={faqData} />
      </Center>
    </SectionWrapper2>
  );
}

export default FaqSection;
