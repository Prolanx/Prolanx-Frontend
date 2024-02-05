import { Box, Heading, Image, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import ContactForm from "./Contact-Form";

import mapIcon from "../../assets/map.png";
import useResponsive from "../../hooks/useResponsive";
import SectionWrapper from "../../components/other/SectionWrapper";
function ContactSection() {
  const media = useResponsive();

  return (
    <Box pos="relative" minH="auto">
      <Image
        zIndex="100"
        w="100%"
        pos="absolute"
        top="350px"
        objectFit="cover"
        objectPosition="center"
        src={mapIcon}
      />

      <SectionWrapper
        p={media.isDesktop && "80px 0px"}
        pos="relative"
        zIndex="1000"
      >
        <ContactForm />
      </SectionWrapper>
    </Box>
  );
}

export default ContactSection;
