import React from "react";
import { colors } from "../../constants/design";
import { Heading, Box, Text, Flex } from "@chakra-ui/react";
import useResponsive from "../../hooks/useResponsive";
import { Link } from "react-router-dom";
import BorderedButton from "../../components/button/BorderedButton";

function ServiceItem({ data, isBorderRight, isBorderTop }) {
  const media = useResponsive();
  const border = "1px solid " + colors.secondary + "90";
  const borderHover = "1px solid " + colors.secondaryAccent;
  return (
    <Box
      py="36px"
      px={media.isDesktop ? "45px" : media.isTablet ? "30px" : "15px"}
      minH={media.isDesktop && "400px"}
      border={media.isMobile || media.isTablet || media.isLaptop ? border : null}
      borderRight={media.isMobile || media.isTablet || media.isLaptop ? border: isBorderRight ? border : "0px"}
      borderTop={isBorderTop ? border : !media.isDesktop ? border : null}
      color={colors.black}
      pos="relative"
      transition=".3s"
      _hover={{
        boxShadow: "0 0 5px " + colors.secondary,
        border: border,
      }}
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
        mb="36px"
      >
        {data.message}
      </Text>

      <BorderedButton
        title="Learn more"
        pos={media.isDesktop && "absolute"}
        bottom={media.isDesktop && "44px"}
        as={Link}
        border={border}
        to={"/services"}
      />
    </Box>
  );
}

export default ServiceItem;
