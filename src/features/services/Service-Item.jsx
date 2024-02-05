import React from "react";
import { colors } from "../../constants/design";
import { Button, Heading, Box, Text, Flex } from "@chakra-ui/react";
import useResponsive from "../../hooks/useResponsive";

function ServiceItem({ data, isHideBorder, isBorderTop }) {
  const media = useResponsive();
  const border = "1px solid " + colors.primaryGrad + "50";
  return (
    <Box
      py="36px"
      px={media.isDesktop && "45px"}
      minH={media.isDesktop && "400px"}
      borderRight={isHideBorder ? "0px" : border}
      borderTop={isBorderTop && border}
      color={colors.black}
      pos="relative"
    >
      <Flex flexDir={media.isDesktop ? "column" : "row"} mb="36px">
        <Heading
          fontSize={media.isMobile ? "20px" : "28px"}
          fontWeight="600"
          color="#2E3133"
          fontFamily="nexa"
          mb={1}
          me={!media.isDesktop && 2}
        >
          Prolanx
        </Heading>

        <Heading
          fontSize={media.isMobile ? "20px" : "28px"}
          fontWeight="600"
          color="#2E3133"
          fontFamily="nexa"
        >
          {data.title}
        </Heading>
      </Flex>

      <Text
        fontSize={media.isMobile ? "14px" : "16px"}
        fontFamily="mont"
        color="#2E3133"
        w={media.isDesktop ? "306px" : "100%"}
      >
        {data.message}
      </Text>

      {/* {data.link && (
        <Button
          h="50px"
          border=".5px solid"
          borderColor={colors.primaryGrad}
          fontSize="17px"
          bg="transparent"
          rounded="2px"
          pos={media.isDesktop && "absolute"}
          bottom={media.isDesktop && "40px"}
          mt={!media.isDesktop && "35px"}
        >
          Learn More
        </Button>
      )} */}
    </Box>
  );
}

export default ServiceItem;
