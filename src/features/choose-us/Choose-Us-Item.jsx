import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import useResponsive from "../../hooks/useResponsive";

function ChooseUsItem({ data, icons, ...props }) {
  const media = useResponsive();
  return (
    <Box
      p={media.isDesktop ? "26px 30px" : "26px 20px"}
      me={media.isDesktop && "24px"}
      w={media.isDesktop && "283px"}
      border=".5px solid"
      borderColor={colors.secondary + "50"}
      rounded="md"
      color={colors.accent2}
      mb={!media.isDesktop && "40px"}
      {...props}
    >
      <Image src={icons[data.key]} mb="36px" h="50px" w="50px" />

      <Heading
        mb="36px"
        fontSize={media.isDesktop ? "28px" : "22px"}
        fontWeight="500"
        fontFamily="nexa"
      >
        {data.title}
      </Heading>

      <Text
       
        fontSize={media.isDesktop ? "16px" : "14px"}
        fontFamily="mont"
        color={colors.accent2}
      >
        {data.message}
      </Text>
    </Box>
  );
}

export default ChooseUsItem;
