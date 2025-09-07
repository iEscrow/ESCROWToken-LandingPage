import BentoCard from "./ui/BentoCard";
import Rocket from "../assets/images/cards/tokenomics.png";
import { Trans } from "react-i18next";

export default function Bento({ t }) {
  return (
    <section className="w-full flex flex-col items-center text-center gap-4 md:mt-20">
      <h2 className="text-text-primary flex flex-col font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:leading-16">
        <Trans i18nKey="Home.Bento.title">
          <span className="gradient-text"></span>
        </Trans>
      </h2>
      <p className="text-text-secondary mb-20 mt-4 max-w-[400px] mx-auto lg:max-w-[520px]">
        {t("Home.Bento.description")}
      </p>

      <div className="w-full py-4 bg-no-repeat bg-cover bg-center bg-[url('/images/bento_bg.png')] lg:py-32">
        <div className="w-full p-4 container mx-auto grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 gap-4 xl:max-w-[1300px]">
          <BentoCard extraclases="col-span-1 md:col-span-3 ">
            <h3 className="text-2xl font-semibold text-text-primary lg:text-4xl ">
              {t("Home.Bento.cards.1.title")}
            </h3>
            <p className="text-base leading-9 max-w-[400px]">
              {t("Home.Bento.cards.1.description")}
            </p>
          </BentoCard>

          <BentoCard extraclases="col-span-1 md:col-span-2 " active>
            <h3 className="text-2xl font-semibold text-text-primary lg:text-4xl ">
              {t("Home.Bento.cards.2.title")}
            </h3>
            <p className="text-base leading-9">
              {t("Home.Bento.cards.2.description")}
            </p>
          </BentoCard>

          <BentoCard extraclases="col-span-1 md:col-span-2 ">
            <h3 className="text-2xl font-semibold text-text-primary lg:text-4xl ">
              {t("Home.Bento.cards.3.title")}
            </h3>
            <p className="text-base leading-9">
              {t("Home.Bento.cards.3.description")}
            </p>
          </BentoCard>

          <BentoCard extraclases="col-span-1 md:col-span-3">
            <h3 className="text-2xl font-semibold text-text-primary lg:text-4xl ">
              {t("Home.Bento.cards.4.title")}
            </h3>
            <p className="text-base leading-9">
              {t("Home.Bento.cards.4.description")}
            </p>
          </BentoCard>

          <BentoCard extraclases="col-span-1 md:col-span-5 ">
            <h3 className="text-2xl font-semibold text-text-primary lg:text-4xl ">
              {t("Home.Bento.cards.5.title")}
            </h3>
            <p className="text-base leading-9 max-w-[400px] xl:max-w-[600px]">
              {t("Home.Bento.cards.5.description")}
            </p>
            <img
              src={Rocket}
              alt="rocket launcher"
              draggable="false"
              loading="lazy"
              className="hidden absolute right-30 top-0 lg:block h-full"
            />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
