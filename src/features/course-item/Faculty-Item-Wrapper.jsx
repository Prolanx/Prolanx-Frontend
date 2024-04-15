import { Box, Image } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../components/heading/Custom-Heading";
import useResponsive from "../../hooks/useResponsive";
import { colors } from "../../constants/design";

function FacultyItemWrapper({
  title,
  image,
  data,
  imageWidth,
  children,
  ...props
}) {
  const media = useResponsive();
  const borderStyle = ".5px solid" + colors.primary + "90";
  return (
    <Box
      border={borderStyle}
      rounded="8px"
      p={media.isDesktop ? "35px" : media.isTablet ? "25px" : "18px"}
      minW={media.isMobile ? "100%" : "467px"}
      mb={media.isMobile || media.isTablet ? "35px" : "0px"}
      {...props}
    >
      <Image
        h={media.isMobile ? "200px" : "248px"}
        w="100%"
        rounded="8px"
        bg="gray.100"
        mb="36px"
        src={data?.image}
        objectFit="cover"
        objectPosition="center"
      />
      <CustomHeading
        title={data?.title}
        fontSize={media.isMobile ? "18px" : "20px"}
        mb="26px"
      />

      {children}
    </Box>
  );
}
export default FacultyItemWrapper;
