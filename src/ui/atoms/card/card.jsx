import './css/card.css';
import { motion } from 'framer-motion';

export default function Card({ children, className = '', ...props }) {
  return (
    <motion.div
      className={['card', className].filter(Boolean).join(' ')}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
