import { Center, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";

function NavItem({ name, ...props }) {
  return (
    <Center
      p="8px"
      // rounded="md"
      // border=".5px solid #00000050"
      me="34px"
      {...props}
    >
      <Text fontSize="16px" fontWeight="500" color={colors.accent2}>
        {name}
      </Text>
    </Center>
  );
}

export default NavItem;
