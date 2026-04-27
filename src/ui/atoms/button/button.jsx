import './css/button.css'
import { motion } from "framer-motion";

export default function Button({ children, style, color }) {
    return (
        <motion.button className={`button button--${style} button--${color}`}
        whileHover={{ scale: 1.1 }}>
            {children}
        </motion.button>
    );
}