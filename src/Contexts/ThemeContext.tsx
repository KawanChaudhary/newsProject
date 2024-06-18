import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { orangeTheme, darkGreenTheme, defaultTheme, Theme } from '../Constants/Theme/theme';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: (themeName:string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = (themeName:string) => {

    if(themeName == 'orange'){
      setTheme(orangeTheme);
    }
    else if(themeName == 'darkgreen'){
      setTheme(darkGreenTheme);
    }
    else{
      setTheme(defaultTheme);
    }
    
  };

   useEffect(() => {
    global.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
