import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import useResponsive from "../hooks/useResponsive";
import CustomHeading from "../components/heading/Custom-Heading";
import { colors } from "../constants/design";

function ProgramItem({ data }) {
  const media = useResponsive();
  const border = "1px solid " + colors.accent + "90";
  return (
    <Box
      py="16px"
      px="20px"
      // maxW={media.isDesktop && "300px"}
      mb={!media.isDesktop && "30px"}
      textAlign={media.isMobile || media.isTablet ? "center" : "start"}
      borderRight={media.isMobile | media.isTablet ? "0px" : border}
    >
      <Flex
        mb="20px"
        alignItems="center"
        flexDir={media.isMobile || media.isTablet ? "column" : "row"}
      >
        <Image
          src={data.image}
          me="16px"
          objectFit="center"
          w="56px"
          h="56px"
          mb={!media.isDesktop && "20px"}
        />
        <CustomHeading fontSize="20px" fontWeight="500" title={data.title} />
      </Flex>
      <Text fontSize="14.5px" fontFamily="mont">
        {data.message}
      </Text>
    </Box>
  );
}

export default ProgramItem;
