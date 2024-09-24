import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import useResponsive from "../../hooks/useResponsive";

function ChooseUsItem({ data, icons, ...props }) {
  const media = useResponsive();
  return (
    <Box
      p={media.isDesktop ? "30px 24px" : "26px 20px"}
      maxW={media.isDesktop && "283px"}
      border=".5px solid"
      borderColor={colors.secondaryAccent}
      rounded="8px"
      color={colors.whiteText}
      mb={!media.isDesktop && "40px"}
      {...props}
    >
      <Image src={icons[data.key]} mb="36px" h="50px" w="50px" />

      <Heading
        minH="60px"
        fontSize={media.isDesktop ? "20px" : "20px"}
        w="100%"
        fontWeight="500"
        fontFamily="mont"
      >
        {data.title}
      </Heading>

      <Text
        fontSize={media.isDesktop ? "14.3px" : "14px"}
        fontFamily="mont"
        color={colors.accent2}
        mt="35px"
      >
        {data.message}
      </Text>
    </Box>
  );
}

export default ChooseUsItem;
