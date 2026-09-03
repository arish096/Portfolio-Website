import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const THEMES = [
  { id: "midnight", name: "Midnight AI", swatch: ["#5b8cff", "#a35bff"] },
  { id: "aurora", name: "Aurora Purple", swatch: ["#a24bff", "#ff5ba8"] },
  { id: "ocean", name: "Ocean Blue", swatch: ["#3fd0e0", "#3a6fe0"] },
  { id: "cyber", name: "Cyber Green", swatch: ["#3ce68b", "#38d5d0"] },
  { id: "sunset", name: "Sunset Orange", swatch: ["#ff9243", "#ff5ba0"] },
  { id: "rose", name: "Rose Pink", swatch: ["#ff6f9c", "#a24bff"] },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

const STORAGE_KEY = "portfolio-theme";

const ThemeContext = createContext<{ theme: ThemeId; setTheme: (t: ThemeId) => void }>({
  theme: "midnight",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>("midnight");

  useEffect(() => {
    const stored = window.sessionStorage.getItem(STORAGE_KEY) as ThemeId | null;
    if (stored && THEMES.some((t) => t.id === stored)) setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.sessionStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
