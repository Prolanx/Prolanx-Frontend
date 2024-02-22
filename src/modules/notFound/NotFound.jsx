import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import notFound from "assets/404.png";
import CustomHeading from "../../components/heading/Custom-Heading";
import Footer from "../../components/footer/Footer";
import SectionWrapper2 from "../../components/other/SectionWrapper2";
import Header from "../../components/header/Header";
import { colors } from "../../constants/design";
import { Link } from "react-router-dom";
function NotFound() {


  return (
    <Box >
    
      <SectionWrapper2>
        <Flex flexDir="column" alignItems="center">
          <Image
            src={notFound}
            maxH="400px"
            maxW="400px"
            objectFit="cover"
            objectPosition="center"
            mb="50px"
          />
          <CustomHeading title="Page Not Found" mb={"25px"} fontFamily="nexa" />
          <Text mb={"0px"} w="50%" textAlign="center" fontFamily="mont">
            The page you were looking for does not exist. You may have mistyped
            the addressd or the pae may have moved
          </Text>
          <Text
            mt={"20px"}
            w="50%"
            as={Link}
            to={"/"}
            textAlign="center"
            color={colors.primary}
            fontFamily="mont"
          >
            Take me to the home page
          </Text>
        </Flex>
      </SectionWrapper2>

      <Footer />
    </Box>
  );
}

export default NotFound;
