import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const VerticalAnimation = ({ children }) => {
  const [fadeInComplete, setFadeInComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeInComplete(true);
    }, 1000); // Adjust the delay according to your needs
    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: fadeInComplete ? 1 : 0 }}
      transition={{ duration: 2 }}
    >
      {fadeInComplete && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 15, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default VerticalAnimation;
