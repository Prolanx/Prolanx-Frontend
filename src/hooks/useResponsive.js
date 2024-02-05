import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  // const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const isDesktop = useMediaQuery({ minWidth: 1024 });




  const isLargeScreen = useMediaQuery({ minWidth: 1920 });

  return { isMobile, isTablet, isDesktop, isLargeScreen };
};

export default useResponsive;
