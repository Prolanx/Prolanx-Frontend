import { Box, Heading, Image, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import ContactForm from "./Contact-Form";

import mapIcon from "../../assets/map.png";
import useResponsive from "../../hooks/useResponsive";
import SectionWrapper from "../../components/other/SectionWrapper";
import SectionWrapper2 from "../../components/other/SectionWrapper2";
function ContactSection() {
  const media = useResponsive();

  return (
    <Box pos="relative" minH="auto">
      <Image
        zIndex="100"
        w="100%"
        h="100%"
        pos="absolute"
        top="350px"
        objectFit="cover"
        objectPosition="center"
        src={mapIcon}
      />

      <SectionWrapper2
        pb={!media.isDesktop && "0px"}
        px={!media.isDesktop && "0px"}
        pos="relative"
        zIndex="1000"
      >
        <Box w="100%">
        <ContactForm />
        </Box>
       
      </SectionWrapper2>
    </Box>
  );
}

export default ContactSection;
