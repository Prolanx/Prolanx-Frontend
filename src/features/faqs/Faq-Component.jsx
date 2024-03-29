import { Box, Center } from "@chakra-ui/react";
import React from "react";
import useResponsive from "../../hooks/useResponsive";
import { colors } from "../../constants/design";
import AccordionComponent from "../../components/accordion/Accordion";
import AccordionItemComponent from "../../components/accordion/Accordion-Item";


function FaqComponent({ data }) {
  const media = useResponsive();
  return (
    <Box maxW="703px" bg={colors.primaryBg} color={colors.whiteText}>
    <AccordionComponent allowToggle={true}>
      {data.map((item) => (
        <AccordionItemComponent title={item.title} bg={colors.whiteText} color={colors.black}>
          <Box
            fontFamily="mont"
            fontSize={media.isMobile ? "15px" : "15px"}
            bg={colors.whiteText}
            color={colors.black}
            py="20px"
            pb="50px"
            px="20px"
          >
            {item.message}
          </Box>
        </AccordionItemComponent>
      ))}
    </AccordionComponent>
  </Box>
  );
}

export default FaqComponent;
