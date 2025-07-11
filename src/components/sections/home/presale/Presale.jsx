import styles from "./Presale.module.css";
import GradientText from "../../../ui/gradientText/GradientText";
import video from "../../../../assets/images/presale/presale.png";
export default function Presale() {
  const counter = "00:00:00:00";

  return (
    <section className={styles.presale}>
      {/* Content */}
      <div className={styles.content}>
        <h2>
          <GradientText>Presale starts in:</GradientText>
        </h2>
        <p className={styles.counter}>{counter}</p>
        <p>
          Join iEscrow’s hybrid P2P revolution. $Escrow brings control,
          security, and freedom. Don’t miss out!
        </p>
      </div>

      {/* Video */}
      <div className={styles.videoCont}>
        <img src={video} alt="presale video" />
      </div>
    </section>
  );
}
