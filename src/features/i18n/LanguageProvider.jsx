import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./LanguageContext";

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
