import { useTranslation } from "react-i18next";
import { useTheme } from "./features/theme/themeUtils";

export default function App() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <h1>{t("Welcome")}</h1>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("es")}>Spanish</button>
      <h2>Current theme: {theme}</h2>
      <button onClick={toggleTheme} aria-label="Change theme">
        Change theme
      </button>
    </>
  );
}
