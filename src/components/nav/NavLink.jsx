import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box,} from "@chakra-ui/react";
import { colors } from "../../constants/design";

function CustomLink({ name, link, children, ...props }) {
  const location = useLocation();
  const [isHover, setIsHover] = useState(false);
  const toggleHover = () => {
    // check the current status
  };
  const [isCurrent, setIsCurrent] = useState(false);

  useEffect(() => {
    if (location.pathname === link) {
      setIsCurrent(true);
    } else {
      setIsCurrent(false);
    }
  }, [location]);
  return (
    <Box
      as={Link}
      to={link}
      h="47px"
      me="34px"
      p="8px"
      rounded="4px"
      textAlign="center"
      display="flex"
      alignItems="center"
      fontSize="16px"
      color={colors.accent2}
      border={isCurrent && ".8px solid"}
      borderColor={colors.accent}
      _hover={{
        background: "white",
        color: "teal.500",
      }}
      {...props}
    >
      {name}
      {children}
    </Box>
  );
}

export default CustomLink;
