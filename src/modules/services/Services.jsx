import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SecondaryIntro from "../../components/intro/Secondary-Intro";
// import { cookiesIntro, cookiesContact, cookiesContent } from "./constant";
// import CustomHeading from "../../components/heading/Custom-Heading";
import Footer from "../../components/footer/Footer";
import SectionWrapper from "../../components/other/SectionWrapper";
import ServiceItemRight from "./features/Service-Item-Right";
import serviceAcademy from "assets/service-academy.svg";

import serviceHub from "assets/service-hub.svg";
import serviceInsight from "assets/service-insight.svg";
import serviceInnovate from "assets/service-innovate.svg";

import serviceTalent from "assets/service-talent.svg";
import ServiceInfoSectionRegular from "./features/Service-Info-Section-Regular";

import ServiceInfoSectionAlternate from "./features/Service-Info-Section-Alternate";
import { colors } from "../../constants/design";
import ChooseUsSection from "../../features/choose-us/Choose-Us-Section";
import useCustomRouter from "../../hooks/useCustomRouter";
import { useParams } from "react-router";
import { scroller } from "react-scroll";
import Page from "../../Page";
function Services() {
  const router = useCustomRouter();
  const params = useParams();

  
  console.log('params ', params)

  const handleScroll = (section) => {
    const options = {
      duration: 1200,
      delay: 800,
      smooth: true,
      offset: 50, // Scrolls to section + 50 pixels down the page
      // ... other options
    };
    scroller.scrollTo(section, options);
  };

  useEffect(() => {
    if (params?.section && params?.section !== "") handleScroll(params?.section);
  }, [params?.section]);

  return (
    <Page>
  <Box fontFamily="mont">
      <SecondaryIntro
        title="Services"
        message="Empowering your journey through cutting edge technogy and expertise"
        fontFamily="nexa"
      />

      <div name={"academy"}>
        <SectionWrapper>
          <ServiceInfoSectionRegular
            title="Prolanx Academy"
            image={serviceAcademy}
          />
        </SectionWrapper>
      </div>

      <div name={"innovate"}>
        <ServiceInfoSectionAlternate
          title="Prolanx Innovate"
          image={serviceInnovate}
          sideOverlayBg={colors.secondary3}
        />
      </div>

      <div name={"hub"}>
        <SectionWrapper>
          <ServiceInfoSectionRegular title="Prolanx Hub" image={serviceHub} />
        </SectionWrapper>
      </div>

      <div name={"talent"}>
        <ServiceInfoSectionAlternate
          title="Prolanx Talent"
          image={serviceTalent}
          sideOverlayBg={colors.primary2}
        />
      </div>

      <div name={"insight"}>
        <SectionWrapper>
          <ServiceInfoSectionRegular
            title="Prolanx Insight"
            image={serviceInsight}
          />
        </SectionWrapper>
      </div>

      <ChooseUsSection />

      <Footer />
    </Box>
    </Page>
  
  );
}

export default Services;
