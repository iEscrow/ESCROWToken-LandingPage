import styles from './CustomButton.module.css';
import { Link } from 'react-router-dom';

/**
 * Reusable main custom button
 * @param {{children: React.ReactNode, variant?: 'primary' | 'secondary', to?: string}}
 * @returns {JSX.Element}
 */
export default function CustomButton({
  children,
  variant = 'primary',
  to,
  ...props
}) {
  return (
    <Link className={`${styles.button} ${styles[variant]}`} to={to} {...props}>
      {children}
    </Link>
  );
}
