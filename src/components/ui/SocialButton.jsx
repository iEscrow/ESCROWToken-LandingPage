import { socialIcons } from "../../lib/utils/icons";

export default function SocialButton({
  href,
  title = "social media",
  icon,
  variant = "primary",
}) {
  const primaryStyles =
    "border-[1px] border-white text-white w-[51px] h-[51px] hover:scale-110 hover:text-secondary hover:border-secondary";
  const secondaryStyles =
    "w-8 h-8 bg-primary text-[#02284A] hover:bg-primary-hover";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`transition-property-transform-color-border-color duration-300 rounded-full flex items-center justify-center ${
        variant === "primary" ? primaryStyles : secondaryStyles
      }`}
    >
      <span
        className={`flex items-center justify-center ${
          variant === "primary" ? "w-6 h-6" : "w-4 h-4"
        }`}
      >
        {socialIcons[icon]}
      </span>
    </a>
  );
}
