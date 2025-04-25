import styles from "./HomeBanner.module.css";
import GradientText from "../../../ui/gradientText/GradientText";
import animatedImg from "../../../../assets/images/banner/animatedIcon.png";
import CustomButton from "../../../ui/buttons/customButton/CustomButton";
import { Trans } from "react-i18next";

export default function HomeBanner({ t }) {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1>
          <Trans i18nKey="Home.Banner.title">
            <GradientText></GradientText>
          </Trans>
        </h1>
        <p>{t("Home.Banner.description")}</p>
        <div className={styles.buttons}>
          <CustomButton variant="secondary">
            {t("Home.Banner.presale")}
          </CustomButton>
          <CustomButton variant="primary">
            {t("Home.Banner.whitepaper")}
          </CustomButton>
        </div>
      </div>
      <img src={animatedImg} alt="animated logo" />
    </section>
  );
}
