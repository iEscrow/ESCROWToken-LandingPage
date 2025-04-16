import React, { memo } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../features/theme/ThemeContext";
import { LanguageProvider } from "../features/i18n/LanguageProvider";

const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default memo(AppProvider);
