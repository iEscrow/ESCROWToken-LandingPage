import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

/**
 * Retrieves the language context value.
 *
 * @function useLanguage
 * @returns {Object} Language context object with properties like `language` (string) and `setLanguage` (function).
 * @throws {Error} If called outside a `LanguageProvider`.
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
