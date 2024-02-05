import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import useResponsive from "../../hooks/useResponsive";
import CustomHeading from "../../components/heading/Custom-Heading";

function TeamCard({ name, role, ...props }) {
  const media = useResponsive();
  return (
    <Box {...props}>
      <Image
        h={media.isDesktop ? "360px" : "200px"}
        minW={media.isDesktop ? "283px" : "220px"}
        objectFit="cover"
        bg="purple.400"
        mb="36px"
        rounded="8px"
      />

      <CustomHeading
        mb="9px"
        title={name}
        fontWeight="bold"
        fontSize={media.isDesktop ? "24px" : "16px"}
      />

      <Text fontFamily="mont" fontSize={media.isDesktop ? "16px" : "12.5px"}>
        {role}
      </Text>
    </Box>
  );
}

export default TeamCard;
