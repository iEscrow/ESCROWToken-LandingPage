import { Trans } from "react-i18next";
import AuditCard from "./ui/AuditCard";
import audit1 from "../assets/images/securityAudits/audit1.png";
import audit2 from "../assets/images/securityAudits/audit2.png";

export default function SecurityAudits({ t }) {
  return (
    <section
      id="audits"
      className="mt-40 pb-40 w-full text-text-primary text-center p-4 flex flex-col items-center bg-no-repeat bg-bottom bg-[url(/images/bg_audit_desktop.png)] bg-cover md:bg-contain md:bg-center lg:bg-bottom"
    >
      <h2 className="text-text-primary font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
        <Trans i18nKey="Home.SecurityAudits.title">
          <span className="gradient-text"></span>
        </Trans>
      </h2>

      <p className="mt-4 uppercase text-sm flex flex-col items-center text-center">
        <Trans i18nKey="Home.SecurityAudits.phrase">
          <span className="text-secondary"></span>
        </Trans>
      </p>

      <p className="text-text-secondary mt-8 text-sm max-w-[430px] md:text-lg md:max-w-[500px] lg:max-w-[600px]">
        {t("Home.SecurityAudits.description")}
      </p>

      <div className="mt-40 w-full flex flex-col gap-16 items-center md:flex-row md:justify-center md:gap-8">
        <AuditCard
          image={audit1}
          label={t("Home.SecurityAudits.card1.label")}
          title="Home.SecurityAudits.card1.title"
          description={t("Home.SecurityAudits.card1.description")}
          cta={t("Home.SecurityAudits.card1.cta")}
          variant="primary"
        />
        <AuditCard
          image={audit2}
          label={t("Home.SecurityAudits.card2.label")}
          title="Home.SecurityAudits.card2.title"
          description={t("Home.SecurityAudits.card2.description")}
          cta={t("Home.SecurityAudits.card2.cta")}
          variant="secondary"
        />
      </div>
    </section>
  );
}
