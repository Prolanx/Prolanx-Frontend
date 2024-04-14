import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import notFound from "assets/404.png";
import CustomHeading from "../../components/heading/Custom-Heading";
import Footer from "../../components/footer/Footer";
import SectionWrapper2 from "../../components/other/SectionWrapper2";

import { colors } from "../../constants/design";
import { Link } from "react-router-dom";

import useResponsive from "../../hooks/useResponsive";

import HeaderContentV2 from "../../components/header/HeaderContentV2";
function NotFound() {
  const media = useResponsive();
  return (
    <Box>

      {/* <Header bg={"#F4FAFF"} /> */}
      <HeaderContentV2/>
      <React.Fragment>
        <SectionWrapper2>
          <Flex flexDir="column" alignItems="center">
            <Image
              src={notFound}
              maxH={
                media.isMobile ? "150px" : media.isTablet ? "200px" : "300px"
              }
              maxW={
                media.isMobile ? "150px" : media.isTablet ? "200px" : "300px"
              }
              objectFit="cover"
              objectPosition="center"
              mb="50px"
            />
            <CustomHeading
              title="Page Not Found"
              fontSize={media.isMobile ? "30px" : "32px"}
              mb={"25px"}
              fontFamily="nexa"
            />

            <Box w={media.isMobile ? "100%" : media.isTablet ? "80%" : "60%"} textAlign="center">
              <Text  mb={"50px"} textAlign="center" fontFamily="mont">
                The page you were looking for does not exist. You may have
                mistyped the addressd or the pae may have moved
              </Text>

             
              <Text
            
                as={Link}
                replace={true}
                to={"/"}
                textAlign="center"
                color={colors.primary}
                fontFamily="mont"
              >
                Take me to the home page
              </Text>
            </Box>
          </Flex>
        </SectionWrapper2>
      </React.Fragment>

      <Footer />
    </Box>
  );
}

export default NotFound;
