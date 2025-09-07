import React, { useState, useContext, useEffect } from 'react';

type ThemeUpdateFunction = () => void;
const ThemeContext = React.createContext<boolean>(true);
const ThemeUpdateContext = React.createContext<ThemeUpdateFunction | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(true);
  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkTheme);
    document.body.classList.toggle('light', !isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): boolean {
  return useContext(ThemeContext);
}

export function useThemeUpdate(): ThemeUpdateFunction {
  const context = useContext(ThemeUpdateContext);
  if (!context) {
    throw new Error('useThemeUpdate must be used within a ThemeProvider');
  }
  return context;
}

