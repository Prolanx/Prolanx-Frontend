import React, { useContext, useEffect, useState } from "react";
import { HStack, Image, Flex, Box, Button, IconButton } from "@chakra-ui/react";
import NavItem from "./Nav-Item";
import logoText from "../../assets/Logo-text.png";

import { FiMenu } from "react-icons/fi";

import { navLinks } from "../../constants";
import NavBar from "./Nav-Bar";
import { colors } from "../../constants/design";
import CustomLink from "../nav/CustomLink";
import useResponsive from "../../hooks/useResponsive";
import { Link } from "react-router-dom";
import { AppContext } from "../../App-Provider";

function Header({ ...props }) {
  const media = useResponsive();

  const token = localStorage.getItem("token");
  const [linkName, setLinkName] = useState(null);
  const loginLink = "https://academy.prolanx.co/my-dashboard/";

  const { toggleMobileNav } = useContext(AppContext);

  return (
    <Flex
      p={media.isDesktop ? "23px 120px" : "20px 10px"}
      alignItems="center"
      justifyContent="space-between"
      borderBottom=".1px solid"
      borderBottomColor={colors.accent2 + "50"}
      zIndex="500"
      pos="relative"
      w="100%"
      bg="transparent"
      {...props}
    >
      <Image src={logoText} w={!media.isDesktop && "100px"} />

      {/* <Button size={media.isMobile ? "xs" : "sm"} as={Link} to={loginLink}>
        Login
      </Button> */}

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
  );
}

// <NavItem
//   name={item}
//   bg={index === navLinks.length - 1 && colors.accent}
// />
export default Header;
