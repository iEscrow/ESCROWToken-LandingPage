import styles from "./Community.module.css";
import { Suspense, lazy } from "react";
import GradientText from "../../../ui/gradientText/GradientText";
const CommunitySlider = lazy(() =>
  import("../../../ui/sliders/communitySlider/CommunitySlider")
);

/**
 * Our Community layout section that contains the title and slider
 * @returns {JSX.Element}
 */
export default function Community() {
  const list = [
    {
      id: 1,
      name: "LI",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "LI",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "LI",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      name: "LI",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <section className={`${styles.community}`}>
      <div className={styles.wrapper}>
        <h2>
          <GradientText>Our Community</GradientText>
        </h2>
        <Suspense fallback={null}>
          <CommunitySlider list={list} />
        </Suspense>
      </div>
      <p className={styles.cta}>
        Got questions? <a href="#">Contact us</a> or join our community!
      </p>
      <div className={styles.social}></div>
    </section>
  );
}
