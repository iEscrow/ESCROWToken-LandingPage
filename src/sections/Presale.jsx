import Rocket from "../assets/images/presale/presale.png";
import CounterDown from "../components/CounterDown";

export default function Presale({ t }) {
  return (
    <section className="relative text-text-primary my-32 flex flex-col gap-8 md:flex-row md:h-[344px] md:items-center lg:h-[540px]">
      <div className="flex flex-col items-center gap-8 md:items-start md:container md:mx-auto">
        <div className="flex flex-col items-center text-center p-4 gap-8 md:text-start md:items-start lg:gap-12">
          <h2 className="gradient-text text-xl font-bold sm:text-2xl md:text-3xl lg:text-[55px]">
            {t("Home.Presale.title")}
          </h2>

          <CounterDown targetDate="2025-12-31T23:59:59" />

          <p className="font-thin text-text-secondary max-w-[400px] md:max-w-[320px] lg:text-2xl lg:max-w-[490px] lg:leading-9">
            {t("Home.Presale.description")}
          </p>
        </div>

        <div className="overflow-hidden w-full h-full flex items-start justify-center md:absolute md:right-0 md:top-0 md:-z-10 md:justify-end">
          <div className="hidden absolute left-0 top-0 md:flex h-full w-[50%] bg-black-gradient"></div>
          <img
            src={Rocket}
            alt="rocket launcher video"
            className="h-full w-full object-cover md:w-[80%]"
          />
        </div>
      </div>
    </section>
  );
}
