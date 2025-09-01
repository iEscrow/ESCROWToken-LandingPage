import { socialIcons } from "../lib/utils/icons";

export default function SocialButton({ href, title = "social media", icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="relative transition-property-transform-color-border-color duration-300 rounded-full border-[1px] border-white text-white w-[51px] h-[51px] flex items-center justify-center hover:scale-110 hover:text-secondary hover:border-secondary"
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6">
        {socialIcons[icon]}
      </span>
    </a>
  );
}
