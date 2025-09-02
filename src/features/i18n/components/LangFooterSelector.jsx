import { useRef, useState } from "react";
import World from "../../../assets/icons/footer_world.svg";
import useClickOutside from "../../../lib/hooks/useClickOutside";
import { useTranslation } from "react-i18next";
import LanguageList from "../../../lib/data/languages.json";

export default function LangFooterSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const languageDropdownRef = useRef(null);
  const { i18n } = useTranslation();

  useClickOutside(languageDropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={languageDropdownRef}>
      <button
        className="flex items-center gap-2 uppercase text-sm cursor-pointer"
        onClick={toggleDropdown}
        aria-label="Seleccionar idioma"
        aria-expanded={isOpen}
        aria-controls="language-menu"
      >
        <img src={World} alt="world icon" />
        {i18n.language}
      </button>

      {isOpen && (
        <ul
          id="language-menu"
          role="menu"
          className="absolute right-0 bottom-[calc(100%_+_0.2rem)] mb-2 w-48 bg-black border border-card-border rounded-md shadow-lg py-1 z-10 transition-all duration-200 ease-in-out"
        >
          {LanguageList?.map((lang) => (
            <li
              key={lang.id}
              role="menuitem"
              tabIndex={0}
              onClick={() => changeLanguage(lang.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  changeLanguage(lang.value);
                }
              }}
              className={`px-4 py-2 hover:bg-card-bg focus:bg-card-border cursor-pointer transition ${
                lang.value === i18n.language
                  ? "text-primary"
                  : "text-text-secondary"
              }`}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
