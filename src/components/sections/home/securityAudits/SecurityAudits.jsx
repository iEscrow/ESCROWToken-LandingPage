import styles from "./SecurityAudits.module.css";
import { Trans } from "react-i18next";
import GradientText from "../../../ui/gradientText/GradientText";
import AuditCard from "../../../ui/cards/auditCard/AuditCard";
import Audit1Logo from "../../../../assets/images/securityAudits/audit1.png";
import Audit2Logo from "../../../../assets/images/securityAudits/audit2.png";

export default function SecurityAudits({ t }) {
  return (
    <section className={styles.securityAudits}>
      <div className={styles.content}>
        <h2>
          <Trans i18nKey="Home.Security.title">
            <GradientText></GradientText>
          </Trans>
        </h2>
        <p className={styles.slogan}>
          <Trans i18nKey="Home.Security.slogan">
            <span className={styles.highlight}></span>
          </Trans>
        </p>
        <p>{t("Home.Security.description")}</p>
      </div>

      <div className={styles.audits}>
        {/* Certik Audit 1 */}
        <AuditCard
          logo={Audit1Logo}
          tokenSecurity={t("Home.Security.audit1.tokenSecurity")}
          description={t("Home.Security.audit1.description")}
          href="#"
          cta={t("Home.Security.audit1.cta")}
          variant="primary"
        >
          <Trans i18nKey="Home.Security.audit1.title">
            <GradientText></GradientText>
          </Trans>
        </AuditCard>

        {/* Certik Audit 2 */}
        <AuditCard
          logo={Audit2Logo}
          tokenSecurity={t("Home.Security.audit2.tokenSecurity")}
          description={t("Home.Security.audit2.description")}
          href="#"
          cta={t("Home.Security.audit2.cta")}
          variant="secondary"
        >
          <Trans i18nKey="Home.Security.audit2.title">
            <GradientText></GradientText>
          </Trans>
        </AuditCard>
      </div>
    </section>
  );
}
