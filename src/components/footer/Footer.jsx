import { Box, Flex, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import FooterList from "./Footer-List";
import logoText from "assets/prolanx-logo.svg";
import useResponsive from "../../hooks/useResponsive";
import SectionWrapper2 from "../other/SectionWrapper2";
import { routes, servicesSection } from "../../constants";
import { colors } from "../../constants/design";
import { Link } from "react-router-dom";
import { FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

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
    { src: FaXTwitter, link: "https://x.com/Prolanxdigital" },
    { src: FaFacebook, link: "/" },
    { src: FaYoutube, link: "/" },
    { src: FiLinkedin, link: "https://www.linkedin.com/company/prolanx/" },
    { src: FaInstagram, link: "https://www.instagram.com/prolanx_digital/" },
  ];

  const copyrightLinks = [
    { name: "Terms & conditions", link: "/home" },
    { name: "Privacy", link: routes.privacy },
    { name: "Cookies", link: routes.cookie },
  ];

  const border = "1px solid " + colors.primaryGrad + 50;
  const media = useResponsive();

  return (
    <SectionWrapper2 bg={colors.black} zIndex="1000" pos="relative">
      <Box w="100%">
        <SimpleGrid
          columns={media.isMobile ? 1 : 2}
          spacingX={media.isMobile ? 3 : media.isTablet ? "105px" : 3}
          mb={media.isDesktop ? "52px" : "50px"}
          color="#E3F3FF"
          borderBottom={media.isMobile ? "0px" : border}
        >
          <Image
            src={logoText}
            w={
              media.isMobile || media.isTablet || media.isLaptop
                ? "130px"
                : null
            }
            mb={media.isMobile || media.isTablet ? "50px" : "20px"}
          />

          <Flex justifyContent={media.isMobile ? "flex-start" : "flex-end"}>
            {icons.map((item) => (

              <Link to={item.link}>
     <Icon
                // src={item.src}
              
                as={item.src}
                fontSize="24px"
                cursor="pointer"
                me={media.isDesktop ? "18px" : "25px"}
              />
              </Link>
         
            ))}
          </Flex>
        </SimpleGrid>

        <SimpleGrid
          columns={media.isDesktop ? 4 : media.isTablet ? 2 : 1}
          flexWrap="wrap"
          spacingX={media.isMobile ? 3 : media.isTablet ? "105px" : 3}
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
