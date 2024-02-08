import { Box, Image } from "@chakra-ui/react";
import React from "react";

import Footer from "../../components/footer/Footer";

import logoBigLeft from "../../assets/logo-big-left.png";
import logoBigRight from "../../assets/logo-big-right.png";
import ChooseUsSection from "../../features/choose-us/Choose-Us-Section";

import ContactSection from "../../features/contact-section/Contact-Section";
import ServiceSection from "../../features/services/Service-Section";

import AboutSection from "./features/AboutSection";
import LearnSection from "./features/LearnSection";
import HomeIntroSection from "./features/Home-Intro-Section";
import Page from "../../Page";

function Home() {
  return (
    <Page>
      <Box overflowX="hidden" position="relative" overflow="hidden">
      
        <HomeIntroSection />
        <Image
          src={logoBigRight}
          pos="absolute"
          right="0px"
          top="476px"
          zIndex="500"
        />

        <AboutSection />
        <ServiceSection />
        <ChooseUsSection />
        <Box pos="relative" overflow="hidden">
          <Image
            src={logoBigLeft}
            pos="absolute"
            left="0px"
            top="110px"
            zIndex="1500"
          />
          <LearnSection />
        </Box>
        
        {/* 
      <Box position="relative">
        <Image
          src={logoBigRight}
          pos="absolute"
          right="0px"
          top="314px"
          zIndex="1500"
        />
     
      </Box> */}

        <ContactSection />

        <Footer />
      </Box>
    </Page>
  );
}

export default Home;
