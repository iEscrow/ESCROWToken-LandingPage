import { Trans } from "react-i18next";
import Mobile from "../assets/images/exchange/mobile_exchange.png";
import Left from "../assets/images/exchange/desktop_left_exchange.png";
import Right from "../assets/images/exchange/desktop_right_exchange.png";

export default function Exchange({ t }) {
  return (
    <section id="exchange" className="relative">
      <div className="p-4 text-center flex flex-col items-center gap-16 md:py-32 lg:py-40 xl:py-90">
        <h2 className="text-text-primary flex gap-2 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
          <Trans i18nKey="Home.Exchange.title">
            <span className="gradient-text"></span>
          </Trans>
        </h2>

        <div className="flex flex-col items-center gap-4 text-text-secondary max-w-[400px] lg:max-w-[590px]">
          <p>{t("Home.Exchange.description1")}</p>
          <p>{t("Home.Exchange.description2")}</p>
          <p>{t("Home.Exchange.description3")}</p>
        </div>
      </div>
      <img src={Mobile} alt="phone application" className="md:hidden w-full" />
      <img
        src={Left}
        alt="phone application"
        className="hidden md:block h-[580px] absolute left-0 top-0 -translate-y-16 lg:h-[620px] xl:h-[1000px]"
      />
      <img
        src={Right}
        alt="phone application"
        className="hidden md:block h-[600px] absolute right-0 top-0 lg:h-[640px] xl:h-[1000px]"
      />
    </section>
  );
}
