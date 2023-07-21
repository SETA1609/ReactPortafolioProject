import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext<boolean>(true);
export function ThemeProvider({ children }) {
    const [isDarkTheme, setDarkTheme] = useState<boolean>(true);
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeContext.Provider value={isDarkTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

