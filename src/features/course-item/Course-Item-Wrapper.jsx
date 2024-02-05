import { Box, Image } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../components/heading/Custom-Heading";
import useResponsive from "../../hooks/useResponsive";
import { colors } from "../../constants/design";

function CourseItemWrapper({ title, image, data, imageProps, children, ...props }) {
  const media = useResponsive();
  const borderStyle = ".5px solid" + colors.primary + "90";

  return (
    <Box
      border={borderStyle}
      rounded="8px"
      p={media.isDesktop ? "20px" : media.isTablet ? "20px" : "10px"}
        w="378px"
      maxH="450px"
      mb={!media.isDesktop && "35px"}
      {...props}
    >
      <Image
        h="215px"
        // w={media.isDesktop ? "310px" : "100%"}
        w={"100%"}
        rounded="8px"
        mb="36px"
        bg="purple.400"
        src={data?.image}
        objectFit="cover"
        {...imageProps}
      />
      <CustomHeading title={data?.title} fontSize="20px" mb="26px" />

      {children}
    </Box>
  );
}
export default CourseItemWrapper;
