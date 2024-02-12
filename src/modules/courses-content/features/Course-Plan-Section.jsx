import React from "react";
import useResponsive from "../../../hooks/useResponsive";
import { colors } from "../../../constants/design";
import CourseInfoComponent from "../component/Course-Info-Component";
import AccordionComponent from "../../../components/accordion/Accordion";
import AccordionItemComponent from "../../../components/accordion/Accordion-Item";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CourseTopicSection from "./Course-Topic-Section";
import CoursePlanAccordionItem from "./Course-Plan-Accordion-Item";

function CoursePlanSection({ data }) {
  const media = useResponsive();
  return (
    <CourseInfoComponent
      title="Curriculum"
      subTitle="Learn by doing with our learning experience"
      message="Our Bootcamp offers a comprehensive, practical learning
      experience with a focus on current industry practices. using an
      agile, hands-on approach, it includes interactive live sessions
      that go beyond theoretical knowledge, preparing participants for
      real-world applications and success."
    >
      <Box>
        <AccordionComponent allowToggle={true}>

          <CoursePlanAccordionItem  title="Month 1: Front-End Foundation and First MVP">
          <CourseTopicSection/>
          </CoursePlanAccordionItem>
          
          <CoursePlanAccordionItem  title="Month 1: Front-End Foundation and First MVP">
          <CourseTopicSection/>
          </CoursePlanAccordionItem>
          
          <CoursePlanAccordionItem  title="Month 1: Front-End Foundation and First MVP">
          <CourseTopicSection/>
          </CoursePlanAccordionItem>
          
          <CoursePlanAccordionItem  title="Month 1: Front-End Foundation and First MVP">
          <CourseTopicSection/>
          </CoursePlanAccordionItem>

       
         
        </AccordionComponent>
      </Box>
    </CourseInfoComponent>
  );
}

export default CoursePlanSection;
