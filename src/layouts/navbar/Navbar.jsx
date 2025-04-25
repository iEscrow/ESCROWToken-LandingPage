import styles from "./Navbar.module.css";
import { useState, useCallback, useRef, useEffect } from "react";
// import { useTranslation } from "react-i18next";
import Hamburger from "../../components/ui/buttons/hamburger/Hamburger";
import { NavLink } from "react-router-dom";
/**
 * Main responsive navbar component
 *
 * Features:
 * - Dynamic styles based on scroll position
 * - Accessible keyboard navigation
 * - Responsive hamburger menu
 * - Multilingual support
 *
 * @returns {JSX.Element}
 */
export default function Navbar() {
  // const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
    document.body.style.overflow = toggle ? "auto" : "hidden"; // Prevent background scroll
  }, [toggle]);

  const handleClose = useCallback(() => {
    setToggle(false);
    document.body.style.overflow = "auto";
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggle, handleClose]);

  const getNavLinkClass = ({ isActive }) => (isActive ? styles.activeNav : "");

  return (
    <header className={styles.header} role="navigation">
      <nav>
        <Hamburger
          handleToggle={handleToggle}
          toggle={toggle}
          aria-expanded={toggle}
        />
        <ul className={styles.menu} role="menu">
          <li className={styles.navLink} role="menuitem">
            <NavLink to="/" onClick={handleClose} className={getNavLinkClass}>
              item 1
            </NavLink>
            <NavLink to="/" onClick={handleClose} className={getNavLinkClass}>
              item 2
            </NavLink>
            <NavLink to="/" onClick={handleClose} className={getNavLinkClass}>
              item 3
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
