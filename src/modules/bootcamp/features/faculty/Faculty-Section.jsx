import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import FacultyItem from "./Faculty-Item";
import CustomHeading from "../../../../components/heading/Custom-Heading";
import HorizontalScroll from "../../../../components/other/HorizontalScroll";
import SectionWrapper from "../../../../components/other/SectionWrapper";
import { faculty } from "../../../../constants";
import useResponsive from "../../../../hooks/useResponsive";

function FacultySection() {
  const media = useResponsive();
  return (
    <SectionWrapper px={!media.isMobile && "0px"}>
      <Flex flexDir="column" alignItems="center">
        <CustomHeading
          title="Explore Our Faculty"
          mb={media.isDesktop ? "44px" : media.isTablet ? "30px" : "20px"}
          fontSize={media.isDesktop ? "32px" : media.isTablet ? "30px" : "25px"}
          textAlign="center"
        />
        <Text
          fontFamily="mont"
          fontSize={
            media.isDesktop ? "20px" : media.isTablet ? "16px" : "13.5px"
          }
          mb={media.isDesktop ? "86px" : "55px"}
          textAlign="center"
          maxW={media.isMobile ? "100%" : media.isTablet ? "80%" : "900px"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </Text>
      </Flex>

      {media.isMobile ? (
        <React.Fragment>
          {Object.keys(faculty).map((item, index) => (
            <FacultyItem data={faculty[item]} />
          ))}
        </React.Fragment>
      ) : (
        <HorizontalScroll>
          {Object.keys(faculty).map((item, index) => (
            <FacultyItem
              data={faculty[item]}
              ms={index === 0 && "120px"}
              me="36px"
            />
          ))}
        </HorizontalScroll>
      )}
    </SectionWrapper>
  );
}

export default FacultySection;
