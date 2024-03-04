import {
  Divider,
  Heading,
  Text,
  Box,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import useResponsive from "../../hooks/useResponsive";
import { colors } from "../../constants/design";
import { Link } from "react-router-dom";

function FooterList({ title, data, ...props }) {
  const media = useResponsive();
  const border = "1px solid " + colors.accent + "50";
  return (
    <Box
      color={colors.whiteText}
      {...props}
      w={media.isDesktop ? "90%" : "100%"}
      me={media.isDesktop && "100px"}
    >
      <Text
        fontSize={media.isDesktop ? "20px" : "18px"}
        mb="22px"
        p="10px 0px"
        borderBottom={border}
        fontFamily="nexa"
        display={media.isMobile || media.isTablet || media.isLaptop ? "block" : "inline-block"}
      >
        {title}
      </Text>
      <SimpleGrid
        columns={media.isDesktop ? 1 : 2}
        mb={media.isDesktop ? "0px" : "15px"}
       
      >
        {data.map((item) => (
          <Text
            mb="20px"
            fontFamily="mont"
            as={Link}
            to={item.link}
            fontSize={
              media.isDesktop ? "16px" : media.isTablet ? "14px" : "13px"
            }
          >
            {item.name}
          </Text>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default FooterList;
