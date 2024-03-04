import { Flex, Image, Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../../components/heading/Custom-Heading";
import useResponsive from "../../../hooks/useResponsive";
import SectionWrapper2 from "../../../components/other/SectionWrapper2";
import ServiceContent from "./Service-Content";

function ServiceInfoAlternate({ heading, image, data, sideOverlayBg }) {
  const media = useResponsive();
  return (
    <Box pos="relative" zIndex="200">
      <Box
        display={media.isDesktop ? "block" : "none"}
        h="100%"
        w="41%"
        bg={sideOverlayBg}
        pos="absolute"
        right="0px"
      />
      <SectionWrapper2>
        <CustomHeading
          title={heading}
          mb={media.isMobile || media.isTablet ? "70px" : "34px"}
          textAlign={media.isDesktop && "end"}
          pos="relative"
          color={media.isDesktop && "white"}
          zIndex="200"
          fontSize={media.isMobile ? "25px" : "32px"}
        />

        <SimpleGrid
          columns={media.isMobile || media.isTablet ? 1 : 2}
          // spacingX={"118px"}
          spacingX={"100px"}
        >
          {media.isMobile || media.isTablet ? (
            <Flex justifyContent="center">
              <Image
                h={
                  media.isMobile ? "180px" : media.isTablet ? "300px" : "495px"
                }
                w={
                  media.isMobile ? "180px" : media.isTablet ? "300px" : "495px"
                }
                src={image}
                zIndex="500"
              />
            </Flex>
          ) : null}

          <ServiceContent
            data={data}
            type={media.isMobile || media.isTablet ? "right" : "left"}
            mt="39px"
          />

          {media.isMobile || media.isTablet ? null : (
            <Flex>
              <Image h={"495px"} w={"495px"} src={image} zIndex="500" />
            </Flex>
          )}
        </SimpleGrid>
      </SectionWrapper2>
    </Box>
  );
}

export default ServiceInfoAlternate;
