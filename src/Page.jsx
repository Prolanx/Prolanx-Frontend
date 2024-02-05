// Page.js
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router";

const Page = ({ children }) => {
  const location = useLocation();
  const animations = {
    // initial: { opacity: 0, x: 50 },
    // animate: { opacity: 1, x: 0 },
    // exit: { opacity: 0, x: -50 },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.div
      // key={location.pathname}
      variants={animations}
      initial={"initial"}
      animate="animate"
      transition={{
        ease: "easeIn",
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Page;
