import { Box, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import logoBigLeft from "../../assets/logo-big-left.png";
import logoBigRight from "../../assets/logo-big-right.png";
import ChooseUsSection from "../../features/choose-us/Choose-Us-Section";
import ContactSection from "../../features/contact-section/Contact-Section";
import ServiceSection from "../../features/services/Service-Section";
import AboutSection from "./features/AboutSection";
import LearnSection from "./features/LearnSection";
import HomeIntroSection from "./features/Home-Intro-Section";
import { scroller } from "react-scroll";
import { useParams } from "react-router";

function Home() {
  const params = useParams();
  const handleScroll = (section) => {
    const options = {
      duration: 1200,
      delay: 800,
      smooth: true,
      offset: 50, // Scrolls to section + 50 pixels down the page
    };
    scroller.scrollTo(section, options);
  };
  useEffect(() => {
    if (params?.section && params?.section !== "") {
      handleScroll(params?.section);
    }
  }, [params?.section]);

  return (
    <Box overflowX="hidden">
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
      <LearnSection />

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

      <div name={"contact"}>
        <ContactSection />
      </div>

      <Footer />
    </Box>
  );
}

export default Home;
