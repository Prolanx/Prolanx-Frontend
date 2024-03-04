import { Box } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../constants/design";
import SecondaryIntro from "../../components/intro/Secondary-Intro";
import logoBottomRight from "../../assets/logo-bottom-right.png";
import logoTopLeft from "../../assets/logo-top-left.png";
import ContactSection from "../../features/contact-section/Contact-Section";
import Footer from "../../components/footer/Footer";
import EnrollSection from "./features/enroll/Enroll-Section";
import TutorsSection from "./features/tutors/Tutors-Section";
import ProgramSection from "./features/program/Program-Section";
import FacultySection from "./features/faculty/Faculty-Section";
import TechSection from "./features/tech-stacks/Tech-Section";
import FaqSection from "../../features/faqs/Faq-Section";
import RelativeWrapper from "../../components/other/RelativeWrapper";
import IndexWrapper from "../../components/other/IndexWrapper";
import CurvyBackground from "../../components/other/CurvyBackground";

function Bootcamp() {
  const intro = {
    title: "Bootcamp",
    message: "Forge Your Career Path In Tech With Our Immersive Bootcamp",
    // Dive into our transformative programs designed to elevate your career. Join a community of driven individuals and unlock your full potential with us
  };
  return (
    <Box bg={colors.whiteText} overflow="hidden">
      <SecondaryIntro title={intro.title} message={intro.message} />
      <RelativeWrapper>
        <CurvyBackground top="-60px" />
        <ProgramSection />
      </RelativeWrapper>

      <RelativeWrapper>
        <CurvyBackground isRight={true} top="-347px" />
        <TechSection />
      </RelativeWrapper>

      <RelativeWrapper>
        <CurvyBackground />
        <FacultySection />
      </RelativeWrapper>

      <RelativeWrapper>
        <CurvyBackground isRight={true} top="100px" />
        <EnrollSection />
      </RelativeWrapper>

      <RelativeWrapper>
        <CurvyBackground top="24px" />
        <IndexWrapper>
        <TutorsSection />
        </IndexWrapper>
      
      </RelativeWrapper>

      <RelativeWrapper>
        <CurvyBackground isRight={true} top="66px" />
        <IndexWrapper>
          <FaqSection />
        </IndexWrapper>
      </RelativeWrapper>

      <Footer />
    </Box>
  );
}

export default Bootcamp;
