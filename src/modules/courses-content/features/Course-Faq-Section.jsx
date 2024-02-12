import React from "react";
import CourseInfoComponent from "../component/Course-Info-Component";
import AccordionComponent from "../../../components/accordion/Accordion";
import AccordionItemComponent from "../../../components/accordion/Accordion-Item";
import { courseFaqData } from "../constant";
import { Box, Text } from "@chakra-ui/react";
import FaqComponent from "../../../features/faqs/Faq-Component";
import FaqSection from "../../../features/faqs/Faq-Section";

function CourseFaqSection() {
  const data = [
    {
      title:
        "Does it make sense to join if Im already a computer Science student or graduate",
      message:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolore nostrum amet labore enim.",
    },
    {
      title:
        "Does it make sense to join if Im already a computer Science student or graduate",
      message:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolore nostrum amet labore enim.",
    },
    {
      title:
        "Does it make sense to join if Im already a computer Science student or graduate",
      message:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolore nostrum amet labore enim.",
    },
    {
      title:
        "Does it make sense to join if Im already a computer Science student or graduate",
      message:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolore nostrum amet labore enim.",
    },
    {
      title:
        "Does it make sense to join if Im already a computer Science student or graduate",
      message:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsum dolore nostrum amet labore enim.",
    },
  ];
  return (
    <CourseInfoComponent
      title="FAQs"
      subTitle="Review common questions others also ask"
    >

      <FaqComponent data={data}/>
    </CourseInfoComponent>
  );
}

export default CourseFaqSection;
