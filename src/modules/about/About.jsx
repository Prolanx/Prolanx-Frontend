import { Box } from "@chakra-ui/react";
import React from "react";

import SecondaryIntro from "../../components/intro/Secondary-Intro";
// import ContactSection from "../../components/contact-section/Contact-Section";

import ContactSection from "../../features/contact-section/Contact-Section";
import Footer from "../../components/footer/Footer";
import TeamSection from "../../features/teams/TeamSection";
import VisionSection from "./features/vision/VisionSection";
import MissionSection from "./features/mission/Mission-Section";
import useResponsive from "../../hooks/useResponsive";
function About() {
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

  const media = useResponsive();
  return (
    <Box>
      <SecondaryIntro
        title="About Us"
        message="Empowering your journey through cutting edge technogy and expertise"
      />

      <VisionSection data={vision} />

      <MissionSection data={mission} />
      <TeamSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}

export default About;
