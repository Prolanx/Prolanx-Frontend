import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../../../components/header/Header";
import useResponsive from "../../../hooks/useResponsive";
import { colors } from "../../../constants/design";

function IntroWrapper({ children, height, mobileHeight, ...props }) {
  const media = useResponsive();

  const introHeightDesktop = height || "646px"
  const introMobileHeight  =  mobileHeight || "85vh";

  return (
    <Box
      h={media.isDesktop ? introHeightDesktop : introMobileHeight}
      position="relative"
      {...props}
    >
        <Box pos="absolute" w="100%">
        <Header />
        </Box>
  


      {children}
    </Box>
  );
}

export default IntroWrapper;
