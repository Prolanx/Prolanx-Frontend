import React from "react";
import AccordionItemComponent from "../../../components/accordion/Accordion-Item";
import { colors } from "../../../constants/design";

function CoursePlanAccordionItem({ title, children }) {
  const border = "1px solid " + colors.accent;
  return (
    <AccordionItemComponent
      title={title || "Month 1: Front-End Foundation and First MVP"}
      border={border}
      rounded="8px"
      mb="20px"
      triggerProps={{
        pb: "25px",
        pt: "25px",
        _hover: {
          background: colors.primaryAccent,
          // color: "teal.500",
        },
      }}
    >
      {children}
    </AccordionItemComponent>
  );
}

export default CoursePlanAccordionItem;
