import { useTranslation } from "react-i18next";
import { LanguageContext } from "./LanguageContext";

/**
 * Language context provider component.
 *
 * @function LanguageProvider
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to be wrapped by the provider.
 * @returns {JSX.Element} A provider component that supplies language context.
 */
export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const value = {
    language: i18n.languages[0],
    changeLanguage: (lng) => i18n.changeLanguage(lng),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
