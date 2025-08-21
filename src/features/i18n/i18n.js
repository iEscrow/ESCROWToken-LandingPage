import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "../../locales/en/translation.json";
import esTranslation from "../../locales/es/translation.json";
import chTranslation from "../../locales/ch/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
      ch: {
        translation: chTranslation,
      },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "es", "ch"],
    load: "languageOnly",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
