import Rocket from "../assets/presale.mp4";
import CounterDown from "./ui/CounterDown";

export default function Presale({ t }) {
  return (
    <section id="presale" className="relative text-text-primary my-32">
      <div className="flex flex-col items-center gap-8 md:items-start md:container md:mx-auto md:justify-center md:h-[344px] lg:h-[540px] xl:h-[620px] 2xl:h-[700px]">
        <div className="flex flex-col items-center text-center p-4 gap-8 md:text-start md:items-start  lg:gap-12">
          <h2 className="gradient-text text-xl font-bold sm:text-2xl md:text-3xl lg:text-[55px] lg:max-w-[520px] lg:leading-14">
            {t("Home.Presale.title")}
          </h2>

          <CounterDown targetDate="2025-12-31T23:59:59" />

          <p className="font-thin text-text-secondary max-w-[400px] md:max-w-[320px] lg:text-2xl lg:max-w-[490px] lg:leading-9">
            {t("Home.Presale.description")}
          </p>
        </div>

        <div className="overflow-hidden w-full h-full flex items-start justify-center md:absolute md:right-0 md:top-0 md:-z-10 md:justify-end">
          <div className="hidden z-20 absolute left-0 top-0 md:flex h-full w-full bg-black-gradient"></div>
          <div className="relative h-full w-full bg-red-200 md:w-[75%] -my-2">
            <div className="hidden z-20 absolute left-0 top-0 md:flex h-20 w-full bg-black-gradient-top"></div>
            <video
              src={Rocket}
              loop
              autoPlay
              muted
              className="w-full h-full object-cover"
            ></video>
            <div className="hidden z-20 absolute left-0 bottom-0 md:flex h-20 w-full bg-black-gradient-bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
