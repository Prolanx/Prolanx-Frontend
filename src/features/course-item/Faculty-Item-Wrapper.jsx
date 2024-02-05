import { Box, Image } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../components/heading/Custom-Heading";
import useResponsive from "../../hooks/useResponsive";
import { colors } from "../../constants/design";

function FacultyItemWrapper({
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
      p={media.isDesktop ? "35px" : media.isTablet ? "25px" : "10px"}
      minW={media.isMobile ? "100%" : "467px"}
      mb={!media.isDesktop && "35px"}
      {...props}
    >
      <Image
        h={media.isDesktop ? "300px" : media.isTablet ? "248px" : "150px"}
        // w={media.isDesktop ? "397px" : "100%"}
        w="100%"
        rounded="8px"
        mb="16px"
        bg="purple.400"
        src={data?.image}
        objectFit="cover"
      />
      <CustomHeading
        title={data?.title}
        fontSize={media.isDesktop ? "20px" : media.isTablet ? "20px" : "18px"}
        mb="26px"
      />

      {children}
    </Box>
  );
}
export default FacultyItemWrapper;