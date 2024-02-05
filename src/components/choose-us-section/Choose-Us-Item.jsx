import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import innovateIcon from "../../assets/innovation-icon.png";
import { colors } from "../../constants/design";

function ChooseUsItem({ data, icons, ...props }) {
  return (
    <Box
      p="36px 0px"
      me="24px"
      w="283px "
      ps="30px"
      border=".5px solid"
      borderColor={colors.secondary + "50"}
      rounded="md"
      color={colors.accent2}
      {...props}
    >
      <Image src={icons[data.key]} mb="36px" />
      <Text mb="36px" fontSize="28px" fontWeight="400">
        {data.title}
      </Text>

      <Text mb="36px" fontSize="16px" color={colors.accent2}>
        {data.message}
      </Text>
    </Box>
  );
}

export default ChooseUsItem;
