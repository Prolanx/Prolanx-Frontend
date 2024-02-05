import { Box, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import Drawer from "../drawer/Drawer";
import { navLinks } from "../../constants";
import CustomLink from "./CustomLink";
import { colors } from "../../constants/design";
import { AppContext } from "../../App-Provider";
import useCustomRouter from "../../hooks/useCustomRouter";

function MobileNav() {
  const { isMobileNavOpen, toggleMobileNav } = useContext(AppContext);
  const router = useCustomRouter();

  const {currentUrl} = router

  const controls = {
    isOpen: isMobileNavOpen,
    onClose: toggleMobileNav,
  };
  return (
    <Drawer controls={controls} size="full" p="0px" title={"Prolanx"}>
      <Flex flexDir="column">
        {navLinks.map((item) => (
          <React.Fragment>
            <CustomLink
              name={item.name}
              link={item.link}
              mb={3}
              color={item.link === currentUrl ? "white" : colors.black}
              bg={item.link ===  currentUrl  ? colors.black : "white"}
              onClick={toggleMobileNav}
            />
          </React.Fragment>
        ))}
      </Flex>
    </Drawer>
  );
}

export default MobileNav;
