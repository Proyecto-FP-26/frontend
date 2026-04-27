import './css/icon.css';
import { motion } from "framer-motion";

export default function Icon({ icon: IconComponent }) {
    if (!IconComponent) return null;

    return (
        <motion.span
            className="icon-wrapper"
            whileHover={{ y: -1, rotate: -10, scale: 1.08 }}
            whileTap={{ y: 0, rotate: 0, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 500, damping: 24, mass: 0.6 }}
        >
            <IconComponent className="icon" />
        </motion.span>
    );
}
