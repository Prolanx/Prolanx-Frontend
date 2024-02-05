import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SecondaryIntro from "../../components/intro/Secondary-Intro";
import { cookiesIntro, cookiesContact, cookiesContent } from "./constant";
import CustomHeading from "../../components/heading/Custom-Heading";
import Footer from "../../components/footer/Footer";
import SectionWrapper from "../../components/other/SectionWrapper";
import PrivacyContact from "../../features/privacy/Privacy-Contact";
import PrivacySection from "../../features/privacy/PrivacySection";

function CookiePage() {
  return (
    <Box fontFamily="mont">
      <SecondaryIntro
        title="Cookies Policy"
        message="Empowering your journey through cutting edge technogy and expertise"
      />

      <SectionWrapper>
        <PrivacySection data={cookiesIntro} />

        {cookiesContent.map((item) => (
          <React.Fragment>
            {item.data ? (
              <PrivacySection data={item}>
                {item.data.map((data) => (
                  <React.Fragment>
                    <CustomHeading
                      title={data.title}
                      mb="10px"
                      fontSize="20px"
                      fontWeight="bold"
                    />
                    <Text mb="50px" fontSize="14px" fontFamily="mont">{data.message}</Text>
                  </React.Fragment>
                ))}
              </PrivacySection>
            ) : (
              <PrivacySection data={item} />
            )}

          </React.Fragment>
        ))}
        <PrivacyContact data={cookiesContact} />
      </SectionWrapper>
      <Footer />
    </Box>
  );
}

export default CookiePage;
