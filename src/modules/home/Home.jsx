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
import RelativeWrapper from "../../components/other/RelativeWrapper";
// import CurvyBackground from "../../components/other/CurvyBackground";

function Home() {
  const params = useParams();
  const handleScroll = (section) => {
    const options = {
      duration: 700,
      // delay: 800,
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

      <RelativeWrapper>
        {/* <CurvyBackground isRight={true} /> */}
        <AboutSection />
      </RelativeWrapper>

      <RelativeWrapper>
        {/* <CurvyBackground /> */}
        <ServiceSection />
      </RelativeWrapper>

      <RelativeWrapper>
        {/* <CurvyBackground isRight={true} /> */}
        <ChooseUsSection />
      </RelativeWrapper>

      <LearnSection />

      <div name={"contact"}>
        <RelativeWrapper>
          {/* <CurvyBackground /> */}
          <ContactSection />
        </RelativeWrapper>
      </div>

      <Footer />
    </Box>
  );
}

export default Home;
