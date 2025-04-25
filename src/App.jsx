import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
// import { useTheme } from "./features/theme/themeUtils";

export default function App() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <Routes>
      {/* Pages */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
