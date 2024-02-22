import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FiStar } from "react-icons/fi";

function CourseBenefitItem({ title }) {
  return (
    <Flex p="10px" fontFamily="mont" alignItems="center">
      <Icon as={FiStar} me="24px" />
      <Text fontWeight="semibold" fontSize="16px">
        {title}
      </Text>
    </Flex>
  );
}

export default CourseBenefitItem;
