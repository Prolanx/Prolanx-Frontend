import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import FooterList from "./Footer-List";
import twitter from "../../assets/x.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import logoText from "assets/prolanx-logo.svg";
import instagram from "../../assets/instagram.png";
import useResponsive from "../../hooks/useResponsive";
import SectionWrapper2 from "../other/SectionWrapper2";
import { routes, servicesSection } from "../../constants";
import { colors } from "../../constants/design";
import { Link } from "react-router-dom";
import CustomHeading from "../heading/Custom-Heading";

function Footer() {
  const list = [
    {
      title: "Quick links",
      data: [
        { name: "Home", link: routes.home },
        { name: "About", link: routes.about },
        { name: "Contact Us", link: "" },
      ],
    },

    {
      title: "Services",
      data: [
        {
          name: "Prolanx Academy",
          link: routes.services + servicesSection.academy,
        },
        {
          name: "Prolanx Innovate",
          link: routes.services + servicesSection.innovate,
        },
        { name: "Prolanx Hub", link: routes.services + servicesSection.hub },
        {
          name: "Prolanx Talent",
          link: routes.services + servicesSection.talent,
        },
        {
          name: "Prolanx Insight",
          link: routes.services + servicesSection.insight,
        },
      ],
    },

    {
      title: "Blog",
      data: [
        { name: "Stories", link: routes.home },
        { name: "News", link: routes.home },
      ],
    },
    {
      title: "Resources",
      data: [
        { name: "Support", link: routes.home },
        { name: "FAQ", link: routes.home },
      ],
    },
  ];
  const icons = [
    { src: twitter, link: "/" },
    { src: facebook, link: "/" },
    // { src: behance, link: "/" },
    // { src: dribble, link: "/" },
    { src: youtube, link: "/" },
    { src: instagram, link: "/" },
    // { src: github, link: "/" },
  ];

  const copyrightLinks = [
    { name: "Terms & conditions", link: "/home" },
    { name: "Privacy", link: routes.privacy },
    { name: "Cookies", link: routes.cookie },
  ];

  const border = "1px solid " + colors.primaryGrad + 50;
  const media = useResponsive();

  return (
    <SectionWrapper2
      bg="#2E3133"
      zIndex="5000"
      pos="relative"
      color={colors.accent3}
    >
      <Box w="100%">
        <Flex
          justifyContent="space-between"
          mb={media.isDesktop ? "52px" : "50px"}
          color="#E3F3FF"
          borderBottom={media.isDesktop && border}
          flexDir={media.isDesktop ? "row" : "column"}
        >
          <Image
            src={logoText}
            w={
              media.isMobile || media.isTablet || media.isLaptop
                ? "130px"
                : null
            }
            mb={media.isDesktop ? "16px" : "25px"}
          />

          <Flex>
            {icons.map((item) => (
              <Image
                src={item.src}
                cursor="pointer"
                h="24px"
                w="24px"
                me={media.isDesktop ? "18px" : "25px"}
              />
            ))}
          </Flex>
        </Flex>

        <SimpleGrid
          columns={media.isDesktop ? 4 : media.isTablet ? 2 : 1}
          flexWrap="wrap"
          spacingX={media.isDesktop ? 5 : 3}
          mb={media.isDesktop ? "0px" : "20px"}
        >
          {list.map((item) => (
            <FooterList title={item.title} data={item.data} />
          ))}
        </SimpleGrid>

        <Flex
          fontFamily="mont"
          flexDir={"column"}
          mt={"50px"}
          color={colors.whiteText}
          // justifyContent="center"
          // textAlign="center"
        >
          <Text fontSize="12px" pt="30px" mb="24px" borderTop={border}>
            Copyright C 2024 All rights reserved by Prolanx Digital Consulting
            Limited
          </Text>

          <Flex flexWrap="wrap" w="100%">
            {copyrightLinks.map((item) => (
              <Text
                fontSize="10px"
                textDecor="underline"
                me={8}
                as={Link}
                to={item.link}
              >
                {item.name}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Box>
    </SectionWrapper2>
  );
}

export default Footer;

{
  /* <Box rounded="0px"  color="#E3F3FF">
          <Text mb="27px" fontSize="20px">
            Subscribe to our Newsletter
          </Text>
          <Flex h="52px" mb="27px" color="black">
            <Input
              m="0px"
              h="100%"
              w="322px"
              bg="#F4FAFF"
              rounded="0px"
            ></Input>
            <Button
              m="0px"
              p="15px 20px"
              h="100%"
              rounded="0px"
              border="0px"
              bg={colors.secondary2}
            >
              Subscribe
            </Button>
          </Flex>

          <Text mb="10px" fontSize="20px">
            Email us at:{" "}
          </Text>
          <Text fontSize="14px">enquiry@prolanxdigital.co</Text>
        </Box> */
}
