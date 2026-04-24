import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const lightTheme = {
    name: 'light',
    colors: {primary: '#0066cc', background: '#ffffff', surface: '#f8f9fa', text: '#212529', border: '#dee2e6'},
    spacing: { sm: '8px', md: '16px', lg: '24px'},
    borderRadius: { md: '8px'},
};

export const darkTheme =  {
    ...lightTheme,
    name: 'dark',
    colors: { primary: '#4d9fff', background: '#1a1a2e', surface: '#16213e', text: '#e9ecef', border: '#495057'},
};

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? darkTheme : lightTheme;
    const toggleTheme = () => setIsDark(prev => !prev);

    return <ThemeContext.Provider value={{ theme, isDark, toggleTheme}}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
};