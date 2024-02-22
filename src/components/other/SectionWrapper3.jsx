import { Box } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

const SectionWrapper3 = ({ children, ...props }) => {
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
    padding = "30px"; // Padding for small laptop
  } else if (isMediumLaptop) {
    padding = "40px"; // Padding for medium laptop
  } else {
    padding = "0px"; // No padding for large screens
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      py="70px"
      //   alignItems={isTablet || isMobile ? "center" : "flex-start"}
      {...props}
    >
      <Box maxWidth="1320px" width="100%" px={padding} bg="green">
        {children}
      </Box>
    </Box>
  );
};

export default SectionWrapper3;
