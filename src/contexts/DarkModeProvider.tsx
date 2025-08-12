"use client";

import useLocalStorageState from "@/hooks/useLocalStorageState";
import { createContext, useContext, useEffect } from "react";

// Type definition for Dark Mode Context
type DarkModeContextType = { isDarkMode: boolean; toggleDarkMode: () => void };

// Create the context with a default value
const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

/**
 * DarkModeProvider Component
 * - Provides dark mode state and toggle function to the app.
 * - Persists the user's preference in localStorage.
 * - Automatically applies the correct class (light-mode or dark-mode) to <html>.
 */
const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  // Store dark mode state in localStorage, initial value is based on system preference
  const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
    "isDarkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Toggle function to switch between dark and light mode
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Apply the correct theme class to <html> whenever isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

/**
 * Custom hook to use Dark Mode Context
 * - Must be used inside DarkModeProvider.
 * - Provides access to isDarkMode state and toggleDarkMode function.
 */
export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}
