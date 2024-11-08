import { createContext, useContext, useState } from 'react';

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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, font, toggleFont }}>
      <div className={`${theme} ${font}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}