import { Heading } from "@chakra-ui/react";
import React from "react";

function CustomHeading({ title, ...props }) {
  return (
    <Heading
      fontFamily="nexa"
      fontSize="48px"
      fontWeight="500"
    
      {...props}
    >
      {title}
    </Heading>
  );
}

export default CustomHeading;
