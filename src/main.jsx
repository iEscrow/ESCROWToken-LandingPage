import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./features/i18n/i18n.js";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./features/i18n/LanguageProvider.jsx";
import { ThemeProvider } from "./features/theme/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
