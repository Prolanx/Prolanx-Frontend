import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import useResponsive from "../../hooks/useResponsive";
import SectionTitle from "../../components/title/Section-Title";
import SectionWrapper2 from "../../components/other/SectionWrapper2";
import ContactFields from "./Contact-Fields";
import { data } from "./constants";


function ContactForm({ ...props }) {
  const media = useResponsive();
  const border = "1px solid " + colors.whiteText + "80";
  return (
    <SectionWrapper2
      py="50px"
      // px={media.isLargeScreen ? "50px" : media.isDesktop ? "50px" : "20px"}
      bg={colors.primaryBg}
      borderRadius={media.isMobile || media.isTablet ? "0px" : "8px"}
      pt="35px"
      zIndex="4000"
      pos="relative"
      {...props}
    >
   
      <SectionTitle
        name="Get in touch"
        mb="60px"
        pb="20px"
        color={colors.whiteText}
        borderBottom={border}
        fontFamily="nexa"
        fontSize={media.isDesktop ? "32px" : "22px"}
      />

      <SimpleGrid
        columns={media.isMobile ? 1 : media.isTablet ? 2 : 3}
        spacingX={5}
        spacingY={5}
        mb="40px"
        justifyContent={media.isDesktop && "space-between"}
        flexDir={media.isDesktop ? "row" : "column"}
      >
        {data.map((item) => (
          <Box
            color={colors.whiteText}
            mb={!media.isDesktop && "10px"}
            maxw="300px"
          >
            <Heading
              mb={media.isDesktop ? "15px" : "5px"}
              fontSize={media.isDesktop ? "28px" : "20px"}
              fontWeight="500"
              fontFamily="nexa"
            >
              {item.title}
            </Heading>
            <Text
              maxW="300px"
              fontSize={media.isDesktop ? "16px" : "13px"}
              fontFamily="mont"
            >
              {item.message}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      <ContactFields />
    </SectionWrapper2>
  );
}

export default ContactForm;
