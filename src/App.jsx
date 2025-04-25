import { Route, Routes } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "./features/theme/themeUtils";
// import { useLanguage } from "./features/i18n/useLanguage";
import HomePage from "./pages/home/HomePage";

export default function App() {
  // const { t } = useTranslation();
  // const { changeLanguage } = useLanguage();
  // const { theme, toggleTheme } = useTheme();

  return (
    <Routes>
      {/* Pages */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
