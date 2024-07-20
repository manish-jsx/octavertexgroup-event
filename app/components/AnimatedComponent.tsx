import { motion } from 'framer-motion';

const AnimatedComponent = () => (
  <motion.div whileHover={{ scale: [1, 2, 1.5, 2], transition: { duration: 0.5 } }}>
    Hover me!
  </motion.div>
);

export default AnimatedComponent;
