import React from "react";
import useResponsive from "../../../hooks/useResponsive";
import { SimpleGrid, Flex } from "@chakra-ui/react";

function BootcampDisplayWrapper({ children }) {
  const media = useResponsive();
  return (
    <Flex
      justifyContent={media.isMobile ? "flex-start" : "center"}
    
    >
      <SimpleGrid
        w={media.isMobile && "100%"}
        columns={media.isMobile ? 1 : media.isTablet || media.isLaptop ? 2 : 3}
        spacingX="33px"
        spacingY="36px"
      >
        {children}
      </SimpleGrid>
    </Flex>
  );
}

export default BootcampDisplayWrapper;
