import React from "react";
import CourseInfoComponent from "../component/Course-Info-Component";
import AccordionComponent from "../../../components/accordion/Accordion";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CourseTopicSection from "./Course-Topic-Section";
import CoursePlanAccordionItem from "./Course-Plan-Accordion-Item";

function CoursePlanSection({ data }) {
  const overview = data?.overview;

  return (
    <CourseInfoComponent
      title="Curriculum"
      subTitle="Learn by doing with a unique experience"
      message="Our Bootcamp offers a comprehensive, practical learning
      experience with a focus on current industry practices. using an
      agile, hands-on approach, it includes interactive live sessions
      that go beyond theoretical knowledge, preparing participants for
      real-world applications and success."
    >
      <Box>
        <AccordionComponent allowToggle={true}>

        
          {overview && Object.keys(overview).map((item, index) => (
            <CoursePlanAccordionItem
              title={"Month " + (index + 1)  +" "+ overview[item].title}
            >
              <CourseTopicSection weeks={overview[item].summary} message={overview[item].message} />
            </CoursePlanAccordionItem>
          ))}
         
        </AccordionComponent>
      </Box>
    </CourseInfoComponent>
  );
}

export default CoursePlanSection;
