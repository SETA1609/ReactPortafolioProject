import React, { useState, useContext } from 'react';

type ThemeUpdateFunction = () => void;
const ThemeContext = React.createContext<boolean>(true);
const ThemeUpdateContext = React.createContext<ThemeUpdateFunction | undefined>(undefined);
interface ThemeProviderProps {
    children: React.ReactNode;
}
export function ThemeProvider({ children }: ThemeProviderProps) {
    const [isDarkTheme, setDarkTheme] = useState<boolean>(true);
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeContext.Provider value={isDarkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>

        </ThemeContext.Provider>
    )
}

