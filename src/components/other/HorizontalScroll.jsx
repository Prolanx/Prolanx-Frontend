import {
  Flex,
  Box,
  Button,
  IconButton,
  Icon,
  Center,
  Image,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";

import scrollRight from "assets/scroll-right.svg";
import scrollLeft from "assets/scroll-left.svg";

import { FiChevronLeft, FiChevronRight, FiChevronsLeft } from "react-icons/fi";

const HorizontalScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollableWidth, setScrollableWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const contentWidth = scrollRef.current.scrollWidth;
      setScrollableWidth(contentWidth - containerWidth);
    }
  }, [scrollPosition]);
  const positions = { left: "left", right: "right" };
  const handleScroll = (scrollOffset, position) => {
    console.log("scroll offset", scrollOffset);

    // if button position is right then check if scroll position
    // is less than scrollable width
    if (position == positions.right) {
      const canScrollRight = scrollPosition < scrollableWidth;
      if (!canScrollRight) return;
    }

    if (position == positions.left) {
      const canScrollLeft = scrollPosition > 0;
      if (!canScrollLeft) return;
    }

    if (scrollRef.current) {
      const newScrollPosition = scrollPosition + scrollOffset;
      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      setScrollPosition(newScrollPosition);
    }
  };

  return (
    <React.Fragment>
      <Flex
        ref={scrollRef}
        overflowX="hidden"
        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
        css={{ scrollBehavior: "smooth" }}
      >
        {children}
      </Flex>

      <Flex mt="50px" justifyContent="center">
        <Image
          src={scrollLeft}
          onClick={() => handleScroll(-500, positions.left)}
          me="30px"
          cursor="pointer"
        />
        <Image
          src={scrollRight}
          onClick={() => handleScroll(500, positions.right)}
          cursor="pointer"
        />
      </Flex>
    </React.Fragment>
  );
};

export default HorizontalScroll;
