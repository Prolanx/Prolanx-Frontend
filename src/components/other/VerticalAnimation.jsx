import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

const VerticalAnimation = ({ children, initialPos }) => {
  const [fadeInComplete, setFadeInComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeInComplete(true);
    }, 1000); // Adjust the delay according to your needs
    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      // initial={{ opacity: 0, y: -50 }} // Initial state (invisible and positioned above)
      // animate={{ opacity: 1, y: 0 }} // Animation state (visible and in its normal position)

      initial={{ opacity: 0 }}
      animate={{ opacity: fadeInComplete ? 1 : 0 }}
      transition={{ duration: 3 }}
    >
      {fadeInComplete && (
        <motion.div
          // initial={{ y: initialPos.y, }}
          // animate={{ y: [initialPos.y, initialPos.y + 20, initialPos.y] }}
          initial={{ y: 0, }}
          animate={{ y: [0,  15, -30, 0] }}
          // animate={{ y: [0, 0, 1] }}
          transition={{ duration:5, repeat: Infinity }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default VerticalAnimation;
