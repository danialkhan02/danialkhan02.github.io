import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [font, setFont] = useState('mono');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleFont = () => {
    setFont(font === 'mono' ? 'sans' : 'mono');
  };

  useEffect(() => {
    document.documentElement.className = `${theme} font-${font}`;
  }, [theme, font]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, font, toggleFont }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}