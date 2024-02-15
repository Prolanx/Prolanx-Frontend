import { AppContext } from "../App-Provider";
import { useContext, useEffect, useState } from "react";

const useScrollPosition = () => {
  const context = useContext(AppContext);

  const { setIsHeaderFixed } = context;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    handleHiddenState(position);
    if (position <= 581) return setIsHeaderFixed(false);
    setIsHeaderFixed(true);
  };

  const handleHiddenState = (position) => {
    if (position <= 200) setHeaderHidden(false);
    if (position > 200)  setHeaderHidden(true);
    if (position > 581)setHeaderHidden(false);
  };

  useEffect(() => {
    console.log("scroll position ", scrollPosition);
  }, [scrollPosition]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    headerHidden,
  };
};

export default useScrollPosition;
