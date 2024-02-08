import React, { useContext, useEffect, useState } from "react";
import { HStack, Image, Flex, Box, Button, IconButton } from "@chakra-ui/react";
import NavItem from "./Nav-Item";
import logoText from "assets/prolanx-logo.svg";

import { FiMenu } from "react-icons/fi";

import { navLinks } from "../../constants";
import NavBar from "./Nav-Bar";
import { colors } from "../../constants/design";
import CustomLink from "../nav/CustomLink";
import useResponsive from "../../hooks/useResponsive";
import { Link } from "react-router-dom";
import { AppContext } from "../../App-Provider";
import SectionWrapper2 from "../other/SectionWrapper2";

function Header({ ...props }) {
  const media = useResponsive();

  const token = localStorage.getItem("token");
  const [linkName, setLinkName] = useState(null);
  const loginLink = "https://academy.prolanx.co/my-dashboard/";

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
      <SectionWrapper2
        py={media.isMobile || media.isTablet ? "20px" : "23px"}
        // p={media.isDesktop ? "23px 120px" : "20px 10px"}
      >
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Image
            src={logoText}
            w={media.isMobile || media.isTablet ? "130px" : "auto"}
          />

          {media.isDesktop ? (
            <HStack>
              {navLinks.map((item, index) => (
                <React.Fragment>
                  {index === navLinks.length - 1 ? (
                    <CustomLink
                      name={item.name}
                      link={item.link}
                      bg={colors.secondary2}
                      me="0px"
                      color={colors.black}
                    />
                  ) : (
                    <CustomLink name={item.name} link={item.link} />
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

// <NavItem
//   name={item}
//   bg={index === navLinks.length - 1 && colors.accent}
// />
export default Header;
