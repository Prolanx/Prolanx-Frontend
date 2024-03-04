import React from "react";
import SecondaryIntro from "../../components/intro/Secondary-Intro";
import { privacyContact, privacyContent, privacyIntro } from "./constant";
import Footer from "../../components/footer/Footer";
import SectionWrapper from "../../components/other/SectionWrapper";
import PrivacySection from "../../features/privacy/PrivacySection";
import PrivacyContact from "../../features/privacy/Privacy-Contact";
import RelativeWrapper from "../../components/other/RelativeWrapper";
import CurvyBackground from "../../components/other/CurvyBackground";
import SectionWrapper2 from "../../components/other/SectionWrapper2";

function Privacy() {
  return (
    <RelativeWrapper>
      <SecondaryIntro
        title="We care about your privacy"
        message="Your privacy is important to us at Prolanx. We respect your privacy regarding any information we may collect from you accross or website"
      />

      <CurvyBackground top="240px" />
      <CurvyBackground top="464px" isRight={true} />

      <RelativeWrapper>
        <CurvyBackground top="800px" />
        <CurvyBackground top="1040px" isRight={true} />
        <SectionWrapper2>
          <PrivacySection data={privacyIntro} />
          {privacyContent.map((item) => (
            <React.Fragment>
              <PrivacySection data={item} />
            </React.Fragment>
          ))}
          <PrivacyContact data={privacyContact} />
        </SectionWrapper2>
      </RelativeWrapper>

      <Footer />
    </RelativeWrapper>
  );
}

export default Privacy;
