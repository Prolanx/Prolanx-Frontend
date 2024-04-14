import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import useResponsive from "../../hooks/useResponsive";
import { useMediaQuery } from "react-responsive";

function SectionWrapper2({ children, ...props }) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isSmallLaptop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1279px)",
  });
  const isMediumLaptop = useMediaQuery({
    query: "(min-width: 1280px) and (max-width: 1439px)",
  });

  let padding = "20px"; // Default padding for large screens
  if (isMobile) {
    padding = "20px"; // Padding for tablet/mobile
  } else if (isTablet) {
    padding = "50px"; // Padding for small laptop
  } else if (isSmallLaptop) {
    padding = "50px"; // Padding for small laptop
  } else if (isMediumLaptop) {
    padding = "100px"; // Padding for medium laptop 40 before
  } else {
    padding = "100px"; // No padding for large screens
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      py="70px"
      pos="relative"
      zIndex="500"
      {...props}
    >
      <Box maxWidth="1320px"  width="100%" px={padding}>
        {children}
      </Box>
    </Box>
  );
}

export default SectionWrapper2;