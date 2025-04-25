import styles from "./Hamburger.module.css";

/**
 * Reusable hamburger button for navbars
 * @param {{toggle: boolean, handleToggle: () => void}}
 * @returns {JSX.Element}
 */
export default function Hamburger({ toggle, handleToggle }) {
  return (
    <button
      onClick={handleToggle}
      className={`${styles.hamburger} ${toggle ? styles.active : ""}`}
      aria-label="Toggle navigation"
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </button>
  );
}
