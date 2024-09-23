import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/footer/Footer";
import ChooseUsSection from "../../features/choose-us/Choose-Us-Section-v2";
import GetIntoInternship from "./features/Get-Into-Internship";
import InternshipProgramSection from "./features/Internship-Program-Section";

import introBg from "../../assets/internship-bg-web-2.png";
import innovateIcon from "../../assets/innovation-icon.png";
import knowledgeIcon from "../../assets/knowledge-icon.png";
import solutionsIcon from "../../assets/solutions-icon.png";
import excellenceIcon from "../../assets/excellence-icon.png";
import TutorsSection from "../../features/tutors/Tutors-Section-v2";

import teamTobi from "assets/team-tobi.png";
import teamTope from "assets/team-tope.jpg";
import useTypewriterLastWord from "../../hooks/useTypewriter";
import FaqSection from "../../features/faqs/Faq-Section-v2";
import { internshipFaq, internshipSummary } from "../../constants";
import InternshipIntroSection from "./features/Internship-Intro-Section";
import InternshipLearnSection from "./features/Internship-Learn-Section";
const Internship = () => {
  const formLink = "https://tally.so/r/31vpvb";
  const sentence = "Become";
  const words = ["Competent", "Experienced", "Confident"];
  const word = useTypewriterLastWord(sentence, words, 100, 2000);

  const enrollIcons = {
    training: innovateIcon,
    agile: solutionsIcon,
    certificate: knowledgeIcon,
    cv: excellenceIcon,
  };

  const enrollOptions = [
    {
      title: "In-depth Project Driven Training ",
      message:
        "Our students will a thorough understanding of the subject, transcending traditional education models to provide a deep, practical knowledge roles",
      key: "training",
    },
    {
      title: "Agile Methodology Training",
      message:
        "Our students will learn the Agile methodology, an essential skill set for modern work environments, preparing them to adapt to various project managements roles",
      key: "agile",
    },
    {
      title: "Certificate and Reference",
      message:
        "Our students will receive a certificate of completion and have the opportunity to list Prolanx on their CV. We are proud to provide references, showcasing the skills and experience gained ",
      key: "certificate",
    },
    {
      title: "CV Review",
      message:
        "Upon completion, we offer personalized CV reviews to help our students showcase their skills and experience effectively.",
      key: "cv",
    },
  ];

  const tutors = [
    { name: "Oluwatobi Akinwande", role: "Agile Coach", image: teamTobi },
    {
      name: "Temitope Daramola",
      role: "Fullstack Web Development",
      image: teamTope,
    },
  ];

  return (
    <Box>
      <InternshipIntroSection
        formLink={formLink}
        word={word}
        introBg={introBg}
      />

      <ChooseUsSection
        py="85px"
        title="Why Enroll ? "
        options={enrollOptions}
        icons={enrollIcons}
      />

      <GetIntoInternship />

      <InternshipLearnSection
        formLink={formLink}
        internshipSummary={internshipSummary}
      />
      <InternshipProgramSection />

      <TutorsSection tutors={tutors} />

      <FaqSection title="Frequently Asked Questions" faqData={internshipFaq} />

      <Footer />
    </Box>
  );
};

export default Internship;
