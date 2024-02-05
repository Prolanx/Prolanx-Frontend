import React from "react";
import useResponsive from "../../../hooks/useResponsive";
import { colors } from "../../../constants/design";
import CourseInfoComponent from "../component/Course-Info-Component";
import AccordionComponent from "../../../components/accordion/Accordion";
import AccordionItemComponent from "../../../components/accordion/Accordion-Item";

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
      <React.Fragment>
        <AccordionComponent allowToggle={true}>
          <AccordionItemComponent
            title="Month 1: Front-End Foundation and First MVP"
            mb="36px"
            border="1px solid #00000050"
            rounded="md"
          ></AccordionItemComponent>

          <AccordionItemComponent title="Month 1: Front-End Foundation and First MVP"></AccordionItemComponent>

          <AccordionItemComponent title="Month 1: Front-End Foundation and First MVP"></AccordionItemComponent>

          <AccordionItemComponent title="Month 1: Front-End Foundation and First MVP"></AccordionItemComponent>
        </AccordionComponent>
      </React.Fragment>
    </CourseInfoComponent>
  );
}

export default CoursePlanSection;
