import React from "react";
import useResponsive from "../../../hooks/useResponsive";
import { SimpleGrid, Flex } from "@chakra-ui/react";
import SectionWrapper2 from "../../../components/other/SectionWrapper2";

function BootcampDisplayWrapper({ children }) {
  const media = useResponsive();
  return (
    <SimpleGrid
      w={media.isMobile && "100%"}
      columns={media.isMobile ? 1 : media.isTablet || media.isLaptop ? 2 : 3}
      spacingX="33px"
      spacingY="36px"
    >
      {children}
    </SimpleGrid>
  );
}

export default BootcampDisplayWrapper;
