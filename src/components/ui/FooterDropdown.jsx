import { useState } from "react";

export default function FooterDropdown({ title = "", list = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full border-b-[1px] border-card-border pb-2 md:border-none md:pb-0 md:w-auto">
      {/* Botón para togglear el menú en mobile */}
      <button
        type="button"
        className="flex w-full items-center justify-between text-primary uppercase font-semibold md:cursor-default md:pointer-events-none"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-controls={`footer-menu-${title}`}
      >
        {title}
        {/* Flecha visible solo en mobile */}
        <span className="md:hidden">
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {/* Menú de items */}
      <ul
        id={`footer-menu-${title}`}
        className={`text-text-secondary mt-2 space-y-2 ${
          isOpen ? "block" : "hidden"
        } md:block`}
        // Oculta el menú para lectores de pantalla cuando está colapsado
        aria-hidden={!isOpen && "true"}
      >
        {list.map(({ href = "/#", target = "_self", label = "" }, index) => (
          <li key={`${label}-${index}`}>
            <a
              href={href}
              target={target}
              rel={target === "_blank" ? "noopener noreferrer" : undefined}
              className="hover:text-primary transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
