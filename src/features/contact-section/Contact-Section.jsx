import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ContactForm from "./Contact-Form";
import mapIcon from "../../assets/map.png";
import useResponsive from "../../hooks/useResponsive";
import SectionWrapper2 from "../../components/other/SectionWrapper2";
function ContactSection() {
  const media = useResponsive();

  return (
    <Box pos="relative" zIndex="300">

      
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

      {media.isMobile || media.isTablet ? (
        <ContactForm mb="150px" />
      ) : (
        <SectionWrapper2>
          <ContactForm mb="150px" />
        </SectionWrapper2>
      )}
    </Box>
  );
}

export default ContactSection;
