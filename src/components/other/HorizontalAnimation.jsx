import { motion } from "framer-motion";

const HorizontalAnimation = ({ children, isRight }) => {
  const right = [0, 200, -250, 0];
  const left = [0, -250, 200, 0];
  return (
    <motion.div
      initial={{ y: 0, x: 0 }}
      //   animate={{ x: [0, 200, -250, 0] }}
      animate={{ x: isRight ? right : left }}
      transition={{ duration: 8, repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
};

export default HorizontalAnimation;
