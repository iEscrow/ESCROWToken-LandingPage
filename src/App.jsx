import { useTranslation } from "react-i18next";
import { useTheme } from "./features/theme/themeUtils";
import { useLanguage } from "./features/i18n/useLanguage";

export default function App() {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

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
