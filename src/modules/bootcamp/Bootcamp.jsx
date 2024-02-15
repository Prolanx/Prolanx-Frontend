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

function Bootcamp() {
  return (
    <Box bg={colors.whiteText} overflow="hidden">
      <SecondaryIntro
        title="Our Bootcamp"
        message="Empowering your journey through cutting edge technogy and expertise"
      />
      <ProgramSection />
      <TechSection />
      <FacultySection />
      <EnrollSection />
      <TutorsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}

export default Bootcamp;
