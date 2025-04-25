import styles from "./GradientText.module.css";

export default function GradientText({ children }) {
  return <span className={styles.gradient}>{children}</span>;
}
