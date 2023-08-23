import { createContext, useState } from 'react';

const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };

export const ThemeContext = createContext(null)