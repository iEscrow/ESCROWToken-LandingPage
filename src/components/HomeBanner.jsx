import bannerImg from "../assets/images/banner/banner_icon.png";
import { Trans } from "react-i18next";

export default function HomeBanner({ t }) {
  return (
    <section className="w-full h-screen text-text-primary lg:mt-0 bg-[url('images/banner_bg_mobile.png')] bg-cover bg-center bg-no-repeat md:bg-[url('images/banner_bg.png')]">
      <div className="container mx-auto h-full flex flex-col items-center justify-center gap-20 p-4 lg:flex-row lg:justify-between">
        <div className="text-center flex flex-col items-center lg:text-left lg:items-start animate-fade-left">
          <h1 className="mt-20 text-xl font-bold max-w-[460px] sm:text-3xl sm:max-w-[500px] lg:text-4xl lg:max-w-[730px] lg:leading-14 lg:mt-0 xl:text-5xl xl:leading-16">
            <Trans i18nKey="Home.Banner.title">
              <span className="gradient-text"></span>
            </Trans>
          </h1>
          <p className="text-text-secondary mt-8 text-sm max-w-[430px] md:text-lg md:max-w-[500px] lg:max-w-[600px]">
            {t("Home.Banner.description")}
          </p>
          <div className="mt-10 flex flex-col w-full items-center gap-4 md:flex-row">
            <a
              href="#"
              className="w-full font-semibold max-w-[300px] border-2 border-text-primary hover:text-black hover:bg-white transition-colors duration-300 px-6 py-2 rounded-full uppercase text-center lg:max-w-[216px]"
            >
              {t("Home.Banner.presale")}
            </a>
            <a
              href="#"
              className="w-full font-semibold max-w-[300px] border-2 border-primary bg-primary hover:border-primary-hover hover:bg-primary-hover focus:bg-primary-active focus:border-primary-active transition-colors duration-500 px-6 py-2 rounded-full uppercase text-center lg:max-w-[216px]"
            >
              {t("Home.Banner.whitepaper")}
            </a>
          </div>
        </div>
        <img
          src={bannerImg}
          alt="escrow logo"
          draggable="false"
          loading="eager"
        />
      </div>
    </section>
  );
}
