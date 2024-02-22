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
        title="Bootcamp"
        message="Dive into our transformative programs designed to elevate your career. Join a community of driven individuals and unlock your full potential with us"
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
