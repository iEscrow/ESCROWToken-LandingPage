import { createContext, useContext } from "react";

/**
 * Context for theme management, providing theme state and toggle functionality.
 *
 * @type {React.Context<{ theme: string, toggleTheme: () => void } | undefined>}
 */
export const ThemeContext = createContext();

/**
 * Custom hook to access the theme context.
 *
 * @function useTheme
 * @returns {{ theme: string, toggleTheme: () => void }} The theme context object containing the current theme and toggle function.
 * @throws {Error} If called outside a `ThemeProvider`.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
