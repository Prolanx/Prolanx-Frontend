import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import useResponsive from "../../../hooks/useResponsive";

function CourseTopicItem({ data }) {
  const media = useResponsive();
  return (
    <Flex
      flexDir={media.isMobile || media.isTablet ? "column" : "row"}
      alignItems={media.isMobile || media.isTablet ? "flex-start": "center"}
      p="12px 0px"
      borderTop="1px solid #00000020"
    >
      <Heading
        fontSize="16px"
        fontWeight="700"
        fontFamily="nexa"
        minW="fit-content"
        me={5}
        mb={media.isMobile || media.isTablet ? "10px" : "0px"}
      >
        Week One
      </Heading>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
    </Flex>
  );
}

export default CourseTopicItem;
