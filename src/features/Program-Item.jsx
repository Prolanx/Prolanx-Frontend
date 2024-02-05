import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import useResponsive from "../hooks/useResponsive";
import CustomHeading from "../components/heading/Custom-Heading";

function ProgramItem({ data }) {
  const media = useResponsive()
  return (
    <Box
    py="16px"
    px={media.isDesktop && "20px"}
    maxW={media.isDesktop && "300px"}
    mb={!media.isDesktop && "30px"}
    textAlign={!media.isDesktop && "center"}
  >
    
    <Flex
      mb="20px"
      alignItems="center"
      flexDir={media.isDesktop ? "row" : "column"}
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
