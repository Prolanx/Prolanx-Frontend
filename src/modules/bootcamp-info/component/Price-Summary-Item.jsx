import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../../components/heading/Custom-Heading";

function PriceSummaryItem({ title, currency, value, titleProps }) {
  return (
    <Flex
      justifyContent="space-between"
      p="16px 8px"
      borderBottom="1px solid #00000050"
      fontFamily="mont"
    >
      <Text  {...titleProps} >{title} </Text>
      <Text>
        {currency} {value}{" "}
      </Text>
    </Flex>
  );
}

export default PriceSummaryItem;
