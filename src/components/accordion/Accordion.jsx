import { Accordion } from "@chakra-ui/react";

import React from "react";

function AccordionComponent({ children, allowToggle }) {
  return <Accordion allowToggle={allowToggle}>{children}</Accordion>;
}

export default AccordionComponent;
