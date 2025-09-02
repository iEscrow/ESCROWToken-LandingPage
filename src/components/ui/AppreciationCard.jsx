import { Trans } from "react-i18next";
import cardBg from "../../assets/images/cards/bg.png";

export default function AppreciationCard({ label, title, description, image }) {
  return (
    <div
      className="text-text-primary bg-card-bg p-8 rounded-2xl flex flex-col items-center justify-between md:flex-row md:p-10 lg:px-20 lg:h-[600px] lg:rounded-3xl bg-bottom bg-no-repeat md:bg-right lg:w-full xl:max-w-[1300px] xl:mx-auto"
      style={{
        backgroundImage: `url(${cardBg})`,
      }}
    >
      <div className="md:text-left">
        <small className="gradient-text uppercase tracking-[4px] font-medium">
          {label}
        </small>
        <h3 className="font-semibold text-3xl md:text-3xl lg:text-6xl flex flex-col lg:leading-18">
          <Trans i18nKey={title}>
            <span className="gradient-text"></span>
          </Trans>
        </h3>
        <p className="mt-6 leading-8 max-w-[350px] lg:max-w-[500px]">
          {description}
        </p>
      </div>
      <img
        src={image}
        alt={title}
        className="mt-32 md:m-0 w-full md:max-w-[260px] md:mt-0 lg:max-w-[360px] xl:max-w-[440px] 2xl:max-w-[469px]"
        draggable={false}
        loading="lazzy"
      />
    </div>
  );
}
