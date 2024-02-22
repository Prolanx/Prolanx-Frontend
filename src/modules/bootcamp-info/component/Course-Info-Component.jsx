import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../../components/heading/Custom-Heading";
import useResponsive from "../../../hooks/useResponsive";

function CourseInfoComponent({ title, subTitle, message, children }) {
  const media = useResponsive()
  return (
    <Box px={media.isDesktop && "27px"} py="50px">
      <CustomHeading
        title={title}
        fontFamily="mont"
        fontSize="28px"
        mb="36px"
      />
      <CustomHeading title={subTitle} fontSize="40px" mb="36px"  maxW="590px" />
      <Text fontFamily="mont" mb="36px" maxW="692px">
        {message}
      </Text>
      <React.Fragment>{children}</React.Fragment>
    </Box>
  );
}

export default CourseInfoComponent;
