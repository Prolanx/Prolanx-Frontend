import { Box } from "@chakra-ui/react";
import React from "react";
import SecondaryIntro from "../../components/intro/Secondary-Intro";
import RelativeWrapper from "../../components/other/RelativeWrapper";
// import CurvyBackground from "../../components/other/CurvyBackground";
import ContactSection from "../../features/contact-section/Contact-Section";
import Footer from "../../components/footer/Footer";
import TeamSection from "../../features/teams/TeamSection";
import VisionSection from "./features/vision/VisionSection";
import MissionSection from "./features/mission/Mission-Section";
import { scroller } from "react-scroll";

function About() {
  const handleScroll = (section) => {
    const options = {
      duration: 600,
      // delay: 100,
      smooth: true,
      offset: 50, // Scrolls to section + 50 pixels down the page
    };
    scroller.scrollTo(section, options);
  };
  const vision = {
    title: "Our Vision",
    subTitle: "We aspire to be global leader in the IT Industry",
    message: [
      {
        data: "We aspire to be a global leader in the IT industry, known for both our wide range of services and impact on the community, as well as for pushing advancement in technology through continuous innovation, research, and education",
      },
      {
        data: "Our vision is to create a future where businesses can easily connect to the digital world and where our contributions are key to making technology and knowledge better in the IT industry.",
      },
    ],
  };

  const mission = {
    title: "Our Mission",
    message: [
      {
        data: "Here at Prolanx,   our   mission   is   to   offer   individuals   and   businesses   innovative digital resources that will help them succeed in the digital age. It is very important   to   us   to   foster   a   culture   of   constant   creativity, which is supported by comprehensive research and a strong commitment to transferring knowledge and training.",
      },
      {
        data: "We want to close the gap between the   way   businesses   operate   now   and   the   huge   opportunities   that   new technologies   will   bring   by   creating   an   excellent   place   to   work   that encourages   growth   and   success.   By   doing   this,   we   make   sure   that   our clients, whether they are businesses or individuals, stay at the top of their IT industries.",
      },
    ],
  };

  return (
    <Box overflowX="hidden">
      <SecondaryIntro
        title="About Us"
        message="Crafted with passion, powered by innovation. Discover who we are, what drives us, and how we're making a difference"
      />

      <RelativeWrapper>
    
        <VisionSection data={vision} handleScroll={handleScroll} />
        {/* <CurvyBackground isRight={true} top="-170px" /> */}
      </RelativeWrapper>

      <RelativeWrapper>
   
        <MissionSection data={mission} />
             {/* <CurvyBackground top="-300px" /> */}
      </RelativeWrapper>

      <RelativeWrapper>

      <TeamSection />
        {/* <CurvyBackground isRight={true} top="0px" /> */}

      </RelativeWrapper>

      <div name="contact-section">
        <RelativeWrapper>
          
        <ContactSection />
        {/* <CurvyBackground top="-300px" /> */}
          
        </RelativeWrapper>
      </div>

      <Footer />
    </Box>
  );
}

export default About;
