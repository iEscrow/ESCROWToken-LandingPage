import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Logo from "../assets/images/banner/banner_icon.png";

export default function Loading() {
  const containerRef = useRef(null);
  const spinnerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        spinnerRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          repeat: -1,
          yoyo: true,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center h-screen"
    >
      <div ref={spinnerRef}>
        <img src={Logo} alt="iescrow logo" />
      </div>
    </div>
  );
}
