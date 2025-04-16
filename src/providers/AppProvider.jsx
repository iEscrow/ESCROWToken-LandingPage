import React, { memo } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../features/theme/ThemeContext";

const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default memo(AppProvider);
