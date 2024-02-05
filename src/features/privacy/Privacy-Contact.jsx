import React from "react";
import CustomHeading from "../../components/heading/Custom-Heading";
import { Text, Box } from "@chakra-ui/react";
import useResponsive from "../../hooks/useResponsive";

function PrivacyContact({ data, ...props }) {
  const media = useResponsive();
  return (
    <Box {...props}>
    <CustomHeading
      title={data.title}
      mb="20px"
      fontWeight="bold"
      fontSize={media.isDesktop ? "28px" : "22px"}
    />
    <Text mb="20px" fontFamily="mont"  fontSize={media.isDesktop ? "16px" : "14px"}>{data.subTitle} </Text>
    <Text maxW={media.isDesktop ? "250px" : "100%"}fontFamily="mont"  fontSize={media.isDesktop ? "16px" : "14px"}>{data.message}</Text>
  </Box>
  );
}

export default PrivacyContact;
