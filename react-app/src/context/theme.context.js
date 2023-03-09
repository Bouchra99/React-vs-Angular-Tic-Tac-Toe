import { createContext, useContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // to insure that the theme is retained after refreshing the page
  const initialTheme = () => localStorage.getItem("THEME");
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  useLayoutEffect(() => {
    localStorage.setItem("THEME", theme);
    if (theme === "light") {
      document.querySelector("body").classList.remove("dark-mode");
      document.querySelector("body").classList.add("light-mode");
    } else {
      document.querySelector("body").classList.remove("light-mode");
      document.querySelector("body").classList.add("dark-mode");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// hook to use theme
const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThme must be used within a ThemeProvider");
  }

  return context;
};

export { ThemeProvider, useTheme };
