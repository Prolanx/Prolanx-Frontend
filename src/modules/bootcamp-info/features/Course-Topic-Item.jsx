import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import useResponsive from "../../../hooks/useResponsive";

function CourseTopicItem({ title, week }) {
  const media = useResponsive();
  return (
    <Flex
      flexDir={media.isMobile || media.isTablet ? "column" : "row"}
      alignItems={media.isMobile || media.isTablet ? "flex-start" : "center"}
      p="15px 0px"
      borderTop="1px solid #00000020"
    >
      <Heading
        fontSize="16px"
        fontWeight="700"
        fontFamily="nexa"
        minW="fit-content"
        mb={media.isMobile || media.isTablet ? "10px" : "0px"}
      >
        {"Week " + week}
      </Heading>
      <Text
        ms={media.isMobile || media.isTablet ? "0px" : "50px"}
        fontFamily="mont"
      >
        {title}
      </Text>
    </Flex>
  );
}

export default CourseTopicItem;
