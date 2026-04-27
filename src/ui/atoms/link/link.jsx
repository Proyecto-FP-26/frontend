import './css/link.css';
import Icon from '../icon/icon.jsx';
import { motion } from 'framer-motion';

const colorClassMap = {
  primary: 'link--primary',
  muted: 'link--muted',
  error: 'link--error',
  white: 'link--white',
};

export default function Link({ children, href = '#', icon, color = 'muted', active = false, className = '', ...props }) {
  const colorClass = colorClassMap[color] ?? 'link--muted';

  return (
    <motion.a
      className={['link', colorClass, active ? 'link--active' : '', className].filter(Boolean).join(' ')}
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28, mass: 0.7 }}
      {...props}
    >
      {icon ? <Icon icon={icon} /> : null}
      <span className="link__text">{children}</span>
    </motion.a>
  );
}
