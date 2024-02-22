import React from "react";
import CourseInfoComponent from "../component/Course-Info-Component";
import FaqComponent from "../../../features/faqs/Faq-Component";
import { faqData } from "../../../constants";

function CourseFaqSection() {
  return (
    <CourseInfoComponent
      title="FAQs"
      subTitle="Review common questions others also ask"
    >
      <FaqComponent data={faqData} />
    </CourseInfoComponent>
  );
}

export default CourseFaqSection;
