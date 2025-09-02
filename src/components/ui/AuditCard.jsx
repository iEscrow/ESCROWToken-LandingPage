import { Trans } from "react-i18next";

export default function AuditCard({
  label = "token security",
  image,
  title,
  description,
  cta,
  variant = "primary",
}) {
  return (
    <div
      className={`relative z-10 w-full flex flex-col items-center max-w-[300px] rounded-2xl p-8 border-2 lg:max-w-[360px] 
        ${variant === "primary" ? "border-primary" : "border-tertiary"}
      `}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/40 to-transparent backdrop-blur-lg rounded-2xl"></div>

      <div className="absolute -top-16 left-1/2 -translate-x-1/2">
        <div className="relative">
          <small className="w-full text-center absolute bottom-6 left-1/2 -translate-x-1/2 uppercase font-bold text-[1rem]">
            {label}
          </small>
          <img
            src={image}
            alt="token security"
            loading="lazzy"
            draggable="false"
          />
        </div>
      </div>

      <h3 className="font-semibold mt-28 text-3xl lg:text-[38px]">
        <Trans i18nKey={title}>
          <span className="gradient-text"></span>
        </Trans>
      </h3>
      <p className="mt-6 leading-9 text-[1rem] text-text-secondary max-w-[350px] lg:max-w-[500px] lg:mt-16 lg:text-[18px]">
        {description}
      </p>
      <a
        href="#"
        className={`w-full font-bold py-2 rounded-full mt-10 transition-colors duration-200 lg:mt-16 ${
          variant === "primary"
            ? "bg-primary hover:bg-primary-hover active:bg-primary-active"
            : " bg-tertiary hover:bg-tertiary-hover active:bg-tertiary-active"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}
