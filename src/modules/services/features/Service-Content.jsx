import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../../components/heading/Custom-Heading";
import useResponsive from "../../../hooks/useResponsive";
import BaseButton from "../../../components/button/BaseButton";
import { Link } from "react-router-dom";

function ServiceContent({ data, type, ...props }) {
  const media = useResponsive();

  return (
    <Box
      maxW={media.isMobile || media.isTablet ? "100%" : "553px"}
      textAlign={media.isMobile ? "center": type == "left" && "end"}
      {...props}
    >
      <CustomHeading
        title={data.title}
        mb="44px"
        fontFamily="nexa"
        fontSize={media.isMobile ? "28px": "35px"}
      />
      <Text mb="44px" fontFamily="mont" fontSize="16px">
        {data.message}
      </Text>
      <BaseButton title={data.btnText} as={Link} to={data.btnLink} />
    </Box>
  );
}

export default ServiceContent;
