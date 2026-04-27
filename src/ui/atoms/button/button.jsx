import './css/button.css'
import { motion } from "framer-motion";

const colorClassMap = {
    azul: 'button--azul',
    blue: 'button--azul',
    rojo: 'button--rojo',
    red: 'button--rojo',
    blanco: 'button--blanco',
    white: 'button--blanco',
};

export default function Button({ children, style, color = 'azul', className = '', ...props }) {
    const styleClass = style ? `button--${style}` : '';
    const colorClass = colorClassMap[color] ?? '';

    return (
        <motion.button
            className={['button', styleClass, colorClass, className].filter(Boolean).join(' ')}
            whileHover={{ scale: 1.1 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}
