import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { lightTheme, darkTheme, defaultTheme, Theme } from '../Constants/Theme/theme';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setCustomTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  const setCustomTheme = (chooseTheme: Theme) => {
    setTheme(chooseTheme);
  };

   // Store theme in global variable
   useEffect(() => {
    global.theme = theme;
    console.log(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setCustomTheme }}>
        {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
