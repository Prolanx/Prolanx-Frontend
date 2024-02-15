import { Box, Image } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../components/heading/Custom-Heading";
import useResponsive from "../../hooks/useResponsive";
import { colors } from "../../constants/design";

function CourseItemWrapper({
  title,
  image,
  data,
  imageProps,
  children,
  ...props
}) {
  const media = useResponsive();
  const borderStyle = ".5px solid" + colors.primary + "90";

  return (
    <Box
      border={borderStyle}
      rounded="8px"
      p={media.isMobile ? "20px 15px" : media.isTablet ? "25px 20px" : "32px"}
      maxW={media.isMobile ? "100%" : "378px"}
      // maxH="450px"
      // mb={!media.isDesktop && "35px"}
      {...props}
    >
      <Image
        h={media.isMobile ? "180px": "215px"}
        rounded="8px"
        w="100%"
        mb="36px"
        bg="purple.400"
        src={data?.image}
        objectFit="cover"
        objectPosition="center"
        {...imageProps}
      />
      <CustomHeading title={data?.title} fontSize="20px" mb="26px" />

      {children}
    </Box>
  );
}
export default CourseItemWrapper;
