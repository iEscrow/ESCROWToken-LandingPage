import { Trans } from "react-i18next";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppreciationCard from "./ui/AppreciationCard";
import feeBurn from "../assets/images/cards/feeburn.png";
import locked from "../assets/images/cards/locked.png";
import deflationary from "../assets/images/cards/deflationary.png";
import presale from "../assets/images/cards/presale.png";
import tokenomics from "../assets/images/cards/tokenomics.png";

gsap.registerPlugin(ScrollTrigger);

export default function PriceAppreciation({ t }) {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const createTimeline = ({ isMobile }) => {
      const cards = cardsRef.current;

      gsap.set(cards.slice(1), {
        y: isMobile ? "50%" : "100%", // menos desplazamiento en mobile
        autoAlpha: 0,
        scale: isMobile ? 0.95 : 0.8, // escala inicial más sutil en mobile
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: ".cards-container", // 🔹 hace que el contenedor quede fijo
          pinType: "fixed",
          start: isMobile ? "top top" : "top -33%",
          end: `+=${cards.length * (isMobile ? 600 : 820)}`, // menos scroll en mobile
          scrub: true,
          markers: false,
        },
      });

      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;

        tl.to(
          card,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            transformOrigin: "center center",
          },
          index === 0 ? 0 : "-=0.6"
        );

        if (!isLastCard) {
          tl.to(card, {
            autoAlpha: 0,
            scale: isMobile ? 0.95 : 0.8,
            duration: 1.5,
            ease: "power2.inOut",
            transformOrigin: "center center",
          });
        }
      });

      return tl;
    };

    mm.add("(min-width: 768px)", () => {
      createTimeline({ isMobile: false });
      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    });

    mm.add("(max-width: 767px)", () => {
      createTimeline({ isMobile: true }); // 🔹 mobile ahora también tiene pin + animación
      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    });

    return () => mm.revert();
  }, []);

  const cards = [
    {
      label: t("Home.PriceAppreciation.cards.feeBurn.label"),
      title: "Home.PriceAppreciation.cards.feeBurn.title",
      description: t("Home.PriceAppreciation.cards.feeBurn.description"),
      image: feeBurn,
    },
    {
      label: t("Home.PriceAppreciation.cards.locked.label"),
      title: "Home.PriceAppreciation.cards.locked.title",
      description: t("Home.PriceAppreciation.cards.locked.description"),
      image: locked,
    },
    {
      label: t("Home.PriceAppreciation.cards.deflationary.label"),
      title: "Home.PriceAppreciation.cards.deflationary.title",
      description: t("Home.PriceAppreciation.cards.deflationary.description"),
      image: deflationary,
    },
    {
      label: t("Home.PriceAppreciation.cards.presale.label"),
      title: "Home.PriceAppreciation.cards.presale.title",
      description: t("Home.PriceAppreciation.cards.presale.description"),
      image: presale,
    },
    {
      label: t("Home.PriceAppreciation.cards.tokenomics.label"),
      title: "Home.PriceAppreciation.cards.tokenomics.title",
      description: t("Home.PriceAppreciation.cards.tokenomics.description"),
      image: tokenomics,
    },
  ];

  return (
    <section
      id="price-appreciation"
      ref={containerRef}
      className="container mx-auto p-4 text-center lg:mt-40"
    >
      <h2 className="text-text-primary flex flex-col font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:leading-16">
        <Trans i18nKey="Home.PriceAppreciation.title">
          <span className="gradient-text"></span>
        </Trans>
      </h2>
      <p className="text-text-secondary mb-20 mt-4 max-w-[400px] mx-auto lg:max-w-[520px]">
        {t("Home.PriceAppreciation.description")}
      </p>

      <div className="cards-container relative w-full min-h-screen ">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`
            panel panel-${index + 1}
            w-full max-w-[1490px] inset-0 absolute md:inset-0  md:my-0 my-4 flex items-center justify-center
          `}
            style={{ zIndex: 10 + index }}
          >
            <div className="card-wrapper w-full max-w-[1440px] lg:mb-5">
              <AppreciationCard
                label={card.label}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
