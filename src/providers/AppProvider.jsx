import React, { memo } from "react";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
};

export default memo(AppProvider);
