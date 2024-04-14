import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { colors } from "../../constants/design";
import useResponsive from "../../hooks/useResponsive";
import { AppContext } from "../../App-Provider";
import useScrollPosition from "../../hooks/useScrollPosition";
import HeaderContent from "./HeaderContent";

function Header({ ...props }) {
  const media = useResponsive();
  const { isHeaderFixed } = useContext(AppContext);
  const border = "1px solid " + colors.whiteText + "60";
  const borderFixed = "1px solid " + colors.primary + "30";

  useScrollPosition();
  return (
    <Box
    borderBottom={isHeaderFixed ? borderFixed : border}
    w="100%"
    bg={isHeaderFixed ? colors.whiteText : "transparent"}
    position={isHeaderFixed ? "fixed" : "relative"}
    zIndex="2500"
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
