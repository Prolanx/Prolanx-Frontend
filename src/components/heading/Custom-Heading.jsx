import { Heading } from "@chakra-ui/react";
import React from "react";

function CustomHeading({ title, children, ...props }) {
  return (
    <Heading fontFamily="nexa" fontSize="48px" fontWeight="500" {...props}>
      {title || children}
    </Heading>
  );
}

export default CustomHeading;
