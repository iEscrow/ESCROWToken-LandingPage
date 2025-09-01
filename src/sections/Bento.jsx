import BentoCard from "../components/BentoCard";
import Rocket from "../assets/images/cards/tokenomics.png";

export default function Bento() {
  return (
    <section className="w-full flex flex-col items-center text-center gap-4">
      <h2 className="text-5xl text-text-primary font-bold flex flex-col items-center text-center gap-4">
        Engineered for Sustained{" "}
        <span className="gradient-text">Price Appreciation</span>
      </h2>
      <p className="text-text-secondary max-w-[500px]">
        Limited presale, deflationary mechanics, and strategic tokenomics drive
        value for early investors.
      </p>

      <div className="w-full mt-10 py-4 bg-no-repeat bg-cover bg-center bg-[url('/images/bento_bg.png')] lg:py-32">
        <div className="w-full p-4 container mx-auto grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 gap-4 xl:max-w-[1300px]">
          <BentoCard extraclases="col-span-1 md:col-span-3 ">
            <h3 className="text-2xl font-semibold text-text-primary">
              Locked Staking
            </h3>
            <p className="text-base leading-9 max-w-[400px]">
              With this type of staking, holders tend to lock in value for
              longer periods of time, resulting in better price action and
              greater yield.
            </p>
          </BentoCard>

          <BentoCard extraclases="col-span-1 md:col-span-2 " active>
            <h3 className="text-2xl font-semibold text-text-primary">
              Locked Staking
            </h3>
            <p className="text-base leading-9">
              With this type of staking, holders tend to lock in value for
              longer periods of time, resulting in better price action and
              greater yield.
            </p>
          </BentoCard>

          <BentoCard extraclases="col-span-1 md:col-span-2 ">
            <h3 className="text-2xl font-semibold text-text-primary">
              Locked Staking
            </h3>
            <p className="text-base leading-9">
              With this type of staking, holders tend to lock in value for
              longer periods of time, resulting in better price action and
              greater yield.
            </p>
          </BentoCard>

          <BentoCard extraclases="col-span-1 md:col-span-3">
            <h3 className="text-2xl font-semibold text-text-primary">
              Locked Staking
            </h3>
            <p className="text-base leading-9">
              With this type of staking, holders tend to lock in value for
              longer periods of time, resulting in better price action and
              greater yield.
            </p>
          </BentoCard>

          <BentoCard extraclases="col-span-1 md:col-span-5 ">
            <h3 className="text-2xl font-semibold text-text-primary">
              Locked Staking
            </h3>
            <p className="text-base leading-9 max-w-[400px] xl:max-w-[600px]">
              With this type of staking, holders tend to lock in value for
              longer periods of time, resulting in better price action and
              greater yield.
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
