import React from "react";
import CourseInfoComponent from "../component/Course-Info-Component";
import AccordionComponent from "../../../components/accordion/Accordion";
import AccordionItemComponent from "../../../components/accordion/Accordion-Item";
import { courseFaqData } from "../constant";
import { Box, Text } from "@chakra-ui/react";
import FaqComponent from "../../../features/faqs/Faq-Component";


function CourseFaqSection() {
  return (
    <CourseInfoComponent
      title="FAQs"
      subTitle="Review common questions others also ask"
    >

      <AccordionComponent allowToggle={true}>
        {courseFaqData.map((item) => (

          <AccordionItemComponent title={item.title}>
            <Box p="15px">
            <Text>{item.message}</Text>
            </Box>
          
           
          </AccordionItemComponent>
        ))}
      </AccordionComponent>
    </CourseInfoComponent>
  );
}

export default CourseFaqSection;
