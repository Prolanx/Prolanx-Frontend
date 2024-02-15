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

function HeaderContent({ ...props }) {
  const media = useResponsive();
  const { toggleMobileNav, isHeaderFixed } = useContext(AppContext);

  return (
    <SectionWrapper2
        py={media.isMobile || media.isTablet ? "20px" : "16px"}
      {...props}
    >
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <CustomLink to={appLinks.home}>
          <Image
            src={isHeaderFixed ? logoTextColored : logoText}
            w={media.isMobile || media.isTablet ? "130px" : "auto"}
          />
        </CustomLink>

        {media.isDesktop ? (
          <HStack>
            {navLinks.map((item, index) => (
              <React.Fragment>
                {index !== navLinks.length - 1 ? (
                  <React.Fragment>
                    {isHeaderFixed ? (
                      <HeaderLinkFixed
                        name={item.name}
                        link={item.link}
                        me="34px"
                      />
                    ) : (
                      <HeaderLink name={item.name} link={item.link} me="34px" />
                    )}
                  </React.Fragment>
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
  );
}

export default HeaderContent;
