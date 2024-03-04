import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SecondaryIntro from "../../components/intro/Secondary-Intro";
import Footer from "../../components/footer/Footer";
import SectionWrapper from "../../components/other/SectionWrapper";
import serviceAcademy from "assets/service-academy.svg";
import serviceHub from "assets/service-hub.svg";
import serviceInsight from "assets/service-insight.svg";
import serviceInnovate from "assets/service-innovate.svg";
import serviceTalent from "assets/service-talent.svg";
import ServiceInfoRegular from "./features/Service-Info-Regular";
import ServiceInfoAlternate from "./features/Service-Info-Alternate";
import { colors } from "../../constants/design";
import ChooseUsSection from "../../features/choose-us/Choose-Us-Section";
import useCustomRouter from "../../hooks/useCustomRouter";
import { useParams } from "react-router";
import { scroller } from "react-scroll";
import Page from "../../Page";

import SectionWrapper2 from "../../components/other/SectionWrapper2";
import CurvyBackground from "../../components/other/CurvyBackground";
import RelativeWrapper from "../../components/other/RelativeWrapper";
import { servicesContent } from "./constants";

function Services() {
  const params = useParams();

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
    if (params?.section && params?.section !== "") {
      handleScroll(params?.section);
    }
  }, [params?.section]);

  return (
    <Page>
      <Box fontFamily="mont" pos="relative">
        <SecondaryIntro
          title="Services"
          message="Empowering your journey through cutting edge technogy and expertise"
          fontFamily="nexa"
        />

        <CurvyBackground isRight={true} top="345px" />
        <div name={"academy"}>
          <RelativeWrapper>
            <CurvyBackground top="326px" />
            <ServiceInfoRegular
                heading="Prolanx Academy"
                data={servicesContent.academy}
                image={serviceAcademy}
              />
          </RelativeWrapper>
        </div>

        <div name={"innovate"}>
          <ServiceInfoAlternate
            heading="Prolanx Innovate"
            data={servicesContent.innovate}
            image={serviceInnovate}
            sideOverlayBg={colors.secondary3}
          />
        </div>

        <div name={"hub"}>
          <RelativeWrapper>
            <CurvyBackground isRight={true} top="0px" />
            <CurvyBackground top="483px" />
            <ServiceInfoRegular
                heading="Prolanx Hub"
                data={servicesContent.hub}
                image={serviceHub}
              />
          </RelativeWrapper>
        </div>

        <div name={"talent"}>
          <ServiceInfoAlternate
            heading="Prolanx Talent"
            data={servicesContent.talent}
            image={serviceTalent}
            sideOverlayBg={colors.primary}
          />
        </div>

        <div name={"insight"}>
          <RelativeWrapper>
            <CurvyBackground top="495px" />
            <CurvyBackground isRight={true} top="0px" />
            <ServiceInfoRegular
                heading="Prolanx Insight"
                data={servicesContent.insight}
                image={serviceInsight}
              />
          </RelativeWrapper>
        </div>

        <ChooseUsSection />

        <Footer />
      </Box>
    </Page>
  );
}

export default Services;
