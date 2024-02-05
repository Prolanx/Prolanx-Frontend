import { TabPanel } from "@chakra-ui/react";
import React from "react";

function TabItem({ children }) {
  return <TabPanel p={0} mt={10} >{children}</TabPanel>;
}

export default TabItem;
