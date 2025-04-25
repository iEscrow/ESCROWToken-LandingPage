import styles from "./AuditCard.module.css";

export default function AuditCard({
  logo,
  children,
  tokenSecurity = "Token Security",
  description,
  cta = "See audit",
  href = "#",
  variant = "primary",
}) {
  return (
    <div className={`${styles.auditCard} ${styles[variant]}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={logo} alt={`audit logo`} draggable="false" loading="lazy" />
        <span>{tokenSecurity}</span>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3>{children}</h3>
        <p>{description}</p>

        <a href={href}>{cta}</a>
      </div>
    </div>
  );
}
