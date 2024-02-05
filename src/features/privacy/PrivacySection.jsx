import React from "react";
import CustomHeading from "../../components/heading/Custom-Heading";
import { Text, Box } from "@chakra-ui/react";
import useResponsive from "../../hooks/useResponsive";

function PrivacySection({ data, children, ...props }) {
  const media = useResponsive();
  return (
    <Box mb="50px" {...props}>
      <CustomHeading
        title={data.title}
        mb="25px"
        fontWeight="bold"
        fontSize={media.isDesktop ? "28px" : media.isTablet ? "24px" : "20px"}
      />
      <Text mb="25px" fontSize={media.isDesktop ? "16px" : "14px"}>
        {data?.date}
      </Text>
      <Text fontFamily="mont" fontSize={media.isDesktop ? "16px" : "14px"}>
        {data.message}
      </Text>
      <React.Fragment>{children}</React.Fragment>
    </Box>
  );
}

export default PrivacySection;
