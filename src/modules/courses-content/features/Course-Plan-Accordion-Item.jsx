import React from "react";
import AccordionItemComponent from "../../../components/accordion/Accordion-Item";


function CoursePlanAccordionItem({ title, children }) {
  return (
    <AccordionItemComponent
    title={title || "Month 1: Front-End Foundation and First MVP"}
    border="1px solid #00000050"
    rounded="md"
  >
      {children}
  </AccordionItemComponent>
  );
}

export default CoursePlanAccordionItem;
