import { Trans } from "react-i18next";

export default function Community({ t }) {
  return (
    <section id="community" className="relative text-center mt-32">
      <h2 className="gradient-text flex gap-2 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
        {t("Home.Community.title")}
      </h2>

      <p className="text-text-secondary mt-6">
        <Trans i18nKey={"Home.Community.cta"}>
          <a href="" className="text-primary underline cursor-pointer"></a>
          <a href="" className="text-primary underline cursor-pointer"></a>
        </Trans>
      </p>
    </section>
  );
}
