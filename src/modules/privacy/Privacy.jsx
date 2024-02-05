import React from "react";
import SecondaryIntro from "../../components/intro/Secondary-Intro";
import { privacyContact, privacyContent, privacyIntro } from "./constant";
import Footer from "../../components/footer/Footer";
import SectionWrapper from "../../components/other/SectionWrapper";
import PrivacySection from "../../features/privacy/PrivacySection";
import PrivacyContact from "../../features/privacy/Privacy-Contact";

function Privacy() {
  return (
    <React.Fragment>
      <SecondaryIntro
        title="We care about your privacy"
        message="Your privacy is important to us at Prolanx. We respect your privacy regarding any information we may collect from you accross or website"
      />

      <SectionWrapper>
        <PrivacySection data={privacyIntro} />

        {privacyContent.map((item) => (
          <React.Fragment>
            <PrivacySection data={item} />
          </React.Fragment>
        ))}

        <PrivacyContact data={privacyContact} />
      </SectionWrapper>
      <Footer />
    </React.Fragment>
  );
}

export default Privacy;
