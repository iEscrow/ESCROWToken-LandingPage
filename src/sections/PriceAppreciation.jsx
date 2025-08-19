import { Trans } from "react-i18next";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppreciationCard from "../components/AppreciationCard";
import feeBurn from "../assets/images/cards/feeburn.png";
import locked from "../assets/images/cards/locked.png";
import deflationary from "../assets/images/cards/deflationary.png";
import presale from "../assets/images/cards/presale.png";
import tokenomics from "../assets/images/cards/tokenomics.png";

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function PriceAppreciation({ t }) {
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const panels = gsap.utils.toArray(".panel", containerRef.current);

  //   // Configurar snapping, pin y animaciones para cada tarjeta
  //   panels.forEach((panel, index) => {
  //     // Pin y snap para fijar la tarjeta
  //     const pinTrigger = ScrollTrigger.create({
  //       trigger: panel,
  //       start: "top top+=60", // Fija 60px desde la parte superior
  //       end: `+=${window.innerHeight * 0.8}`, // Duración del snap
  //       pin: true,
  //       pinSpacing: false, // Evita espacio extra
  //       snap: {
  //         snapTo: 1, // Snapping completo
  //         duration: 0.5, // Transición suave
  //         ease: "power1.inOut",
  //       },
  //       markers: false, // Desactiva en producción
  //     });

  //     // Animación de paralaje (entrada) para tarjetas posteriores
  //     if (index > 0) {
  //       gsap.fromTo(
  //         panel,
  //         { y: () => (panel.offsetHeight / 2) * index }, // Posición inicial
  //         {
  //           y: 0, // Posición final
  //           ease: "none",
  //           scrollTrigger: {
  //             trigger: containerRef.current,
  //             start: `top top+=${window.innerHeight * index}`, // Ajustado para empezar más arriba
  //             end: `top top+=${window.innerHeight * (index + 1.5)}`, // Scroll más lento
  //             scrub: 1.5, // Movimiento gradual
  //           },
  //         }
  //       );
  //     }

  //     // Animación de salida (hacer más chica y transparente)
  //     gsap.fromTo(
  //       panel,
  //       { scale: 1, opacity: 1 }, // Estado inicial
  //       {
  //         scale: 0.8, // Más chica
  //         opacity: 0.3, // Más transparente
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: panel,
  //           start: () => pinTrigger.end, // Comienza EXACTAMENTE cuando termina el pin
  //           end: `+=${window.innerHeight * 0.5}`, // Duración de la salida
  //           scrub: true, // Suave y vinculado al scroll
  //         },
  //       }
  //     );
  //   });

  //   // Limpieza
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

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
      ref={containerRef}
      className="container mx-auto p-4 text-center lg:mt-40"
      // style={{ minHeight: `${window.innerHeight * cards.length * 0.8}px` }}
    >
      <h2 className="text-text-primary flex flex-col font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
        <Trans i18nKey="Home.PriceAppreciation.title">
          <span className="gradient-text"></span>
        </Trans>
      </h2>
      <p className="text-text-secondary mt-4 max-w-[400px] mx-auto lg:max-w-[520px]">
        {t("Home.PriceAppreciation.description")}
      </p>

      <div className="flex flex-col gap-16 mt-10 lg:mt-32">
        {cards.map((card, index) => {
          // console.log(`Z index ${index}`);

          return (
            <div
              key={index}
              className="panel"
              style={{
                position: "relative",
                zIndex: 10 + index,
                minHeight: "600px",
              }}
            >
              <div className="card-wrapper">
                <AppreciationCard
                  label={card.label}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
