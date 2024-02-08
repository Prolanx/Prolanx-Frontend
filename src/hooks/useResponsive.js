
import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  // const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const isLaptop = useMediaQuery({ minWidth: 1024,   maxWidth: 1279   });

  const isDesktop = useMediaQuery({ minWidth: 1280,  });

  const isxl = useMediaQuery({ minWidth: 1280,  });
  const is2xl = useMediaQuery({ minWidth: 1920, maxWidth: 2559 });
  const is3Xl = useMediaQuery({ minWidth: 2560,  maxWidth: 3839 });
  const is4k = useMediaQuery({ minWidth: 3840 });


  const isLargeScreen = useMediaQuery({ minWidth: 1920 });
  return { isMobile, isTablet, isLaptop, isDesktop, isLargeScreen, isxl, is2xl, is3Xl, is4k };
};

export default useResponsive;
