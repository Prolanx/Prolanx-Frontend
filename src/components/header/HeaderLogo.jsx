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

function HeaderLogo({ ...props }) {
  const media = useResponsive();
  const { toggleMobileNav, isHeaderFixed } = useContext(AppContext);

  return (
    <CustomLink to={appLinks.home}>
    <Image
      src={isHeaderFixed ? logoTextColored : logoText}
      w={media.isMobile || media.isTablet ? "130px" : "auto"}
    />
  </CustomLink>
  );
}

export default HeaderLogo;
