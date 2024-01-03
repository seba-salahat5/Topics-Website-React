import React, { createContext, useContext, useEffect, useState } from 'react';
import { getFromLocalStorage, setInLocalStorage } from '../local_storage_functions.js';
import { THEME } from '../constants.js';

export const DarkModeContext = createContext(false);
export const useTheme = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(getFromLocalStorage(THEME ,));

    useEffect(() => {
        setInLocalStorage(THEME, darkMode);
        const body = document.body;
        body.className=darkMode?'dark-mode':'light-mode' ;
        
    }, [darkMode]);

    function toggleTheme() {
        setDarkMode((prev) => !prev);
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleTheme}}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default ThemeProvider;
