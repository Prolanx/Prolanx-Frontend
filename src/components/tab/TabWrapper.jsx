import { Tab, TabList, TabPanels, Tabs, Box, TabPanel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function TabsWrapper({
  tabHeaders,
  children,
  tabsChanged,
  //   isFitted,
}) {
  return (
    <Tabs
      // isFitted={isFitted}
      onChange={(index) => {
        if (tabsChanged) tabsChanged(index);
      }}
    

      // defaultIndex={index && index}
      // index={index}
    >
      <TabList>
        {tabHeaders.map((item, index) => (
          <Tab
            key={index}
            _active={{
              bg: "blue.500",
            }}
            //   ps="0px"
            me={4}
            //   pb="25px"
          >
            {item}
          </Tab>
        ))}
      </TabList>
      <TabPanels
      //  pt="30px"
      >
        {children}
      </TabPanels>
    </Tabs>
  );
}

export default TabsWrapper;
