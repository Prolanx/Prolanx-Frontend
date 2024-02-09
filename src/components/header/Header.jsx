import React, { useContext } from "react";
import { HStack, Image, Flex, Box, IconButton } from "@chakra-ui/react";

import logoText from "assets/prolanx-logo.svg";
import { FiMenu } from "react-icons/fi";
import { navLinks } from "../../constants";
import { colors } from "../../constants/design";
import useResponsive from "../../hooks/useResponsive";
import { AppContext } from "../../App-Provider";
import SectionWrapper2 from "../other/SectionWrapper2";
import HeaderLink from "../nav/HeaderLink";

function Header({ ...props }) {
  const media = useResponsive();
  const { toggleMobileNav } = useContext(AppContext);
  const border = "1px solid " + colors.whiteText + "60";
  return (
    <Box
      borderBottom={border}
      zIndex="500"
      pos="relative"
      w="100%"
      bg="transparent"
      {...props}
    >
      <SectionWrapper2 py={media.isMobile || media.isTablet ? "20px" : "23px"}>
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Image
            src={logoText}
            w={media.isMobile || media.isTablet ? "130px" : "auto"}
          />

          {media.isDesktop ? (
            <HStack>
              {navLinks.map((item, index) => (
                <React.Fragment>
                  {index !== navLinks.length - 1 ? (
                    <HeaderLink name={item.name} link={item.link} me="34px" />
                  ) : (
                    <HeaderLink
                      name={item.name}
                      link={item.link}
                      bg={colors.accent}
                      color={colors.black}
                      isHideBorder={true}
                      p="10px"
                    />
                  )}
                </React.Fragment>
              ))}
            </HStack>
          ) : (
            <IconButton
              icon={<FiMenu />}
              cursor="pointer"
              size="sm"
              onClick={toggleMobileNav}
            />
          )}
        </Flex>
      </SectionWrapper2>
    </Box>
  );
}

export default Header;
