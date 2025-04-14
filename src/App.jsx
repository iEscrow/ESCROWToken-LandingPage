import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <h1>{t("Welcome")}</h1>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("es")}>Spanish</button>
    </>
  );
}
