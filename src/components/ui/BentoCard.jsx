export default function BentoCard({ children, extraclases, active = false }) {
  const unActiveStyles =
    "text-text-secondary border-[1px] border-card-border bg-black/70 backdrop-blur-lg";
  const activeStyles = "text-text-primary bg-[#571FF2]/60";
  return (
    <div
      className={`relative rounded-2xl p-8 h-[320px] flex flex-col items-center text-center gap-4 md:text-left md:items-start lg:gap-8 xl:h-[360px] xl:p-12 ${
        active ? activeStyles : unActiveStyles
      } ${extraclases}`}
    >
      {children}
    </div>
  );
}
