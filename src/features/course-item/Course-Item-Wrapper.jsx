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
      pos="relative"
      border={borderStyle}
      rounded="8px"
      p={media.isMobile ? "20px 15px" : media.isTablet ? "25px 20px" : "32px"}
      pb="80px"
      maxW={media.isMobile || media.isTablet ? "100%"  : "100%"}
      minH="250px"
      {...props}
    >
      <Image
        h={media.isMobile ? "180px" : "215px"}
        rounded="8px"
        w="100%"
        mb="36px"
        bg="gray.100"
        src={data?.image}
        objectFit="cover"
        objectPosition="center"
        {...imageProps}
      />
      <CustomHeading title={data?.title} fontSize="20px" mb="26px" />
      <Box pos="absolute" bottom="30px">
        {children}
      </Box>
    </Box>
  );
}
export default CourseItemWrapper;
