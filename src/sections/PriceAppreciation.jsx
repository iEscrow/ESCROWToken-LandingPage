import { Trans } from "react-i18next";

export default function PriceAppreciation({ t }) {
  return (
    <section className="container mx-auto p-4 text-center">
      <h2 className="text-text-primary flex flex-col font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
        <Trans i18nKey="Home.PriceAppreciation.title">
          <span className="gradient-text"></span>
        </Trans>
      </h2>
      <p className="text-text-secondary mt-4 max-w-[400px] mx-auto lg:max-w-[520px]">
        {t("Home.PriceAppreciation.description")}
      </p>
    </section>
  );
}
