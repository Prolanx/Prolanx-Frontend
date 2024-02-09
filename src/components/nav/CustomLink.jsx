import React  from "react";
import { Link, } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { colors } from "../../constants/design";

function CustomLink({ name, link, children, ...props }) {
  return (
    <Box
      as={Link}
      to={link}
      rounded="4px"
      textAlign="center"
      fontSize="16px"
      color={colors.accent2}
      fontFamily="mont"
      {...props}
    >
      {name}
      {children}
    </Box>
  );
}

export default CustomLink;
