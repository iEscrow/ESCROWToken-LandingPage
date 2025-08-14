import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function getTimeLeft(targetDate) {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default function CounterDown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-2 text-3xl lg:text-6xl lg:gap-4">
      <p className="flex flex-col items-center">
        {timeLeft.days}
        <span className="text-sm font-light lg:text-2xl lg:mt-1">
          {t("Home.Presale.time.days")}
        </span>
      </p>
      :
      <p className="flex flex-col items-center">
        {timeLeft.hours}
        <span className="text-sm font-light lg:text-2xl lg:mt-1">
          {t("Home.Presale.time.hours")}
        </span>
      </p>
      :
      <p className="flex flex-col items-center">
        {timeLeft.minutes}
        <span className="text-sm font-light lg:text-2xl lg:mt-1">
          {t("Home.Presale.time.minutes")}
        </span>
      </p>
      :
      <p className="flex flex-col items-center">
        {timeLeft.seconds}
        <span className="text-sm font-light lg:text-2xl lg:mt-1">
          {t("Home.Presale.time.seconds")}
        </span>
      </p>
    </div>
  );
}
