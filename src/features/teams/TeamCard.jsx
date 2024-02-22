import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import useResponsive from "../../hooks/useResponsive";
import CustomHeading from "../../components/heading/Custom-Heading";

function TeamCard({ name, role, ...props }) {
  const media = useResponsive();
  return (
    <Box {...props}>
      <Image
        h={media.isMobile || media.isTablet ? "210px" : "360px"}
        minW={media.isMobile || media.isTablet ? "220px" : "283px"}
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
