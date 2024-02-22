import React, { useContext, useEffect } from "react";
import { HStack, Image, Flex, Box, IconButton } from "@chakra-ui/react";

import logoText from "assets/prolanx-logo.svg";
import logoTextColored from "assets/prolanx-logo-colored.png";
import { FiMenu } from "react-icons/fi";
import { appLinks, navLinks } from "../../constants";
import { colors } from "../../constants/design";
import useResponsive from "../../hooks/useResponsive";
import { AppContext } from "../../App-Provider";
import SectionWrapper2 from "../other/SectionWrapper2";
import HeaderLink from "../nav/HeaderLink";
import CustomLink from "../nav/CustomLink";
import useScrollPosition from "../../hooks/useScrollPosition";
import HeaderLinkFixed from "../nav/HeaderLinkFixed";
import HeaderContent from "./HeaderContent";

function Header({ ...props }) {
  const media = useResponsive();
  const { isHeaderFixed } = useContext(AppContext);
  const border = "1px solid " + colors.whiteText + "60";
  const borderFixed = "1px solid " + colors.primary + "30";

  useScrollPosition()

  useEffect(()=> {
console.log('isHeader fixed ', isHeaderFixed)
  }, [isHeaderFixed])

  return (
    <Box
      borderBottom={isHeaderFixed ? borderFixed : border}
      pos="relative"
      w="100%"
      bg={isHeaderFixed ? colors.whiteText : "transparent"}
      position={isHeaderFixed ? "fixed" : "relative"}
      zIndex="5000"
      transition=".5s"
      {...props}
    >
      {isHeaderFixed ? (
        <HeaderContent
          py={media.isMobile || media.isTablet ? "20px" : "10px"}
        />
      ) : (
        <HeaderContent />
      )}
    </Box>
  );
}

export default Header;
