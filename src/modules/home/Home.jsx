import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

// import reactLogo from "./assets/react.svg"
import image from "../../assets/intro-bg.png";
import about1 from "../../assets/about-1.png";
import about2 from "../../assets/about-2.png";
import about3 from "../../assets/about-3.png";
import iconSignin from "../../assets/signin.png";
import serviceClip from "../../assets/service-clip.png";
import ServiceItem from "./component/Service-Item";

function Home() {
  const navLinks = [
    "Home",
    "About",
    "Services",
    "Resources",
    "Insight",
    "Login",
  ];

  return (
    <Box overflowX="hidden">
      {/* Header */}
      <Flex
        justifyContent="space-between"
        bg="#008DB9"
        color="#E3F3FF"
        h="82px"
        p="26px 120px"
        borderBottomWidth="1px"
        borderBottomColor="#E3F3FF"
      >
        <Text fontSize="24px" fontWeight="500">
          Prolanx
        </Text>

        <HStack>
          {navLinks.map((item, index) => (
            <Text
              key={item}
              //  me={index !== navLinks.length - 1 && "60px"}
              me="60px"
            >
              {item}
            </Text>
          ))}
        </HStack>
      </Flex>

      {/* Main Section */}
      <Flex minH="564px" bg="#008DB9" color="#E3F3FF">
        <Box mt="86px" ms="122px" w="24%">
          <Box
            w="402px"
            color="#E3F3FF"
            mb="28px"
            fontSize="60px"
            fontWeight="semibold"
          >
            <Text>Empower</Text>
            <Text>Your </Text>
            <Text>Digital Future</Text>
          </Box>

          <Text
            fontSize="24px"
            w="438px"
            lineHeight="31px"
            letterSpacing="0.8px"
            fontWeight="400px"
          >
            Empowering your journey through cutting edge technology and
            expertise
          </Text>
        </Box>

        <Image w="100%" minH="564px" src={image} objectFit="cover"></Image>
      </Flex>

      {/* About */}

      <Flex minH="682px" p="100px 120px" bg="#E3F3FF">
        <Image w="364px" h="485px" src={about1} objectFit="cover" me="24px" />
        <Box>
          <Image
            w="231px"
            h="231px"
            src={about2}
            objectFit="cover"
            mb="24px"
            me="76px"
          />
          <Image w="231px" h="231px" src={about3} objectFit="cover" />
        </Box>

        <Box w="517px" color="#2E3133">
          <Text
            fontSize="30px"
            borderBottomWidth=".1px"
            borderBottomColor="#2E313390"
            display="inline-block"
            pb={1}
            mb="39px"
            fontWeight="500"
          >
            About Prolanx
          </Text>

          <Text mb="40px" fontSize="40px" fontWeight="600">
            We are a global Leader in the IT Industry
          </Text>

          <Text fontSize="18.5px" fontWeight="400" mb="51px">
            Prolanx is a hotbed of innovation that goes beyond simple solutions.
            We believe in continually pushing the status quo and building a
            culture in which proactive innovation is the norm rather than the
            exception
          </Text>

          <Button
            w="316px"
            h="71px"
            bg="transparent"
            variant="outline"
            borderColor="#008DB9"
          >
            Learn More About Us
            <Image ms="30px" src={iconSignin} />
          </Button>
        </Box>
      </Flex>

      {/* Services */}

      <Box
        minH="1000px"
        bg="#E3F3FF"
        backgroundImage={serviceClip}
        p="0px 120px"
        pt="80px"
      >
        <Heading fontSize="32px" fontWeight="700" mb="58px">
          Our Services
        </Heading>

        <Grid
          minH="400px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={5}
        >
          <GridItem colSpan={1}>
            <ServiceItem title="Prolanx Academy" />
          </GridItem>
          <GridItem colSpan={1}>
            <ServiceItem title="Prolanx Academy" />
          </GridItem>
          <GridItem rowSpan={2} colSpan={1}>
            <ServiceItem height="100%" title="Prolanx Academy" />
          </GridItem>
          <GridItem colSpan={1}>
            <ServiceItem title="Prolanx Academy" />
          </GridItem>
          <GridItem colSpan={1}>
            <ServiceItem title="Prolanx Academy" />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
