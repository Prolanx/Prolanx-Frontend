import React from "react";
import { navItems } from "../../constants";
import { HStack } from "@chakra-ui/react";
import NavItem from "./Nav-Item";

function NavBar() {
  return (
    <HStack>
      {navItems.map((item) => (
        <Box me="34px">
          <NavItem name={item} />
        </Box>
      ))}
    </HStack>
  );
}

export default NavBar;
