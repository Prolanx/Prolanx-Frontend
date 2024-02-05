import { Box, Circle, Image, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../../../constants/design";
import CustomHeading from "../../../../components/heading/Custom-Heading";
import useResponsive from "../../../../hooks/useResponsive";

function EnrollItem({ data }) {
  const media = useResponsive();

  return (
    <Box
      px={media.isMobile ? "15px" : "26px"}
      minH="228px"
      rounded="8px"
      pos="relative"
      bg={colors.primaryGrad}
      color="#fff"
    >
      <Image
        w={media.isMobile ? "55px" : "65px"}
        h={media.isMobile ? "55px" : "65px"}
        mt="-26px"
        mb="25px"
        src={data.image}
        objectFit="cover"
      />
      <CustomHeading
        mb="20px"
        fontFamily="nexa"
        fontSize={media.isMobile ? "20px" : "24px"}
        fontWeight="bold"
        title={data.title}
      />

      <Text fontFamily="mont" fontSize="14px" mb={!media.isDesktop && "40px"}>
        {data.message}
      </Text>
    </Box>
  );
}
export default EnrollItem;
