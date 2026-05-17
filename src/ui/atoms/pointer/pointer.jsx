import './css/pointer.css';
import { motion } from 'framer-motion';

export default function Pointer() {
  return (
    <motion.span
      className="pointer-wrapper"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="pointer"></span>
    </motion.span>
  );
}
