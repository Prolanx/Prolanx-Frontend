import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Divider,
  Spacer,
} from "@chakra-ui/react";

import React from "react";
import CustomHeading from "../heading/Custom-Heading";
import useResponsive from "../../hooks/useResponsive";
import { FiFile, FiPlus } from "react-icons/fi";
import { colors } from "../../constants/design";

function AccordionItemComponent({ children, title, ...props }) {
  const media = useResponsive();
  return (
    <AccordionItem {...props}>
      <AccordionButton py="20px">
        <CustomHeading
          fontSize={media.isMobile ? "17px": "20px"}
          textAlign="left"
          title={title}
          w="90%"
        />
        <Spacer/>
        <AccordionIcon as={FiPlus}  />
      </AccordionButton>

      <AccordionPanel p="0px" >
      {children}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default AccordionItemComponent;
