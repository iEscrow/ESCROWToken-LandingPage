import bannerImg from "../assets/images/banner/banner_icon.png";
import bannerBg from "../assets/images/banner/banner_bg.png";
import { Trans } from "react-i18next";

export default function HomeBanner({ t }) {
  return (
    <section
      className="w-full h-screen text-text-primary"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        backgroundSize: "contain",
      }}
    >
      <div className="container mx-auto h-full flex flex-col items-center justify-center gap-20 p-4 lg:flex-row lg:justify-between">
        <div className="text-center flex flex-col items-center lg:text-left lg:items-start">
          <h1 className="text-3xl font-bold max-w-[460px] sm:text-4xl sm:max-w-[500px] lg:text-5xl lg:max-w-[730px] leading-14">
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
              className="w-full max-w-[300px] border-2 border-text-primary px-6 py-2 rounded-full uppercase text-center lg:max-w-[216px]"
            >
              {t("Home.Banner.presale")}
            </a>
            <a
              href="#"
              className="w-full max-w-[300px] border-2 border-primary bg-primary px-6 py-2 rounded-full uppercase text-center lg:max-w-[216px]"
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
