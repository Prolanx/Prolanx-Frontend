import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import Drawer from "../drawer/Drawer";
import { navLinks } from "../../constants";
import CustomLink from "./CustomLink";
import { colors } from "../../constants/design";
import { AppContext } from "../../App-Provider";
import useCustomRouter from "../../hooks/useCustomRouter";
import SectionWrapper2 from "../other/SectionWrapper2";
import useResponsive from "../../hooks/useResponsive";
import logoTextColored from "assets/prolanx-logo-colored.png";
import { FiX } from "react-icons/fi";

function MobileNav() {
  const { isMobileNavOpen, toggleMobileNav } = useContext(AppContext);
  const router = useCustomRouter();
  const media = useResponsive();
  const { currentUrl } = router;
  const controls = {
    isOpen: isMobileNavOpen,
  };
  return (
    <Box pos="relative" zIndex="1500">
      <Drawer controls={controls} size="full">
        <SectionWrapper2 p="0px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            py={media.isMobile || media.isTablet ? "20px" : "16px"}
            mb={5}
            position="relative"
            zIndex="5000"
          >
            <Image
              src={logoTextColored}
              w={media.isMobile || media.isTablet ? "130px" : "auto"}
              h="22px"
            />
            <IconButton
              icon={<FiX />}
              cursor="pointer"
              size="sm"
              onClick={toggleMobileNav}
            />
          </Flex>
          {navLinks.map((item) => (
            <Box
              p="10px 10px"
              rounded="md"
              bg={item.link === currentUrl ? colors.black : "white"}
              mb={2}
            >
              <CustomLink
                name={item.name}
                link={item.link}
                color={item.link === currentUrl ? "white" : colors.black}
                onClick={toggleMobileNav}
              />
            </Box>
          ))}
        </SectionWrapper2>
      </Drawer>
    </Box>
  );
}

export default MobileNav;
