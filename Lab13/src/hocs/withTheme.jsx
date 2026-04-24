import React from 'react';
import { useTheme } from '../context/ThemeContext';

export function withTheme(WrappedComponent) {
  return function WithTheme(props) {
    const { theme, isDark, toggleTheme } = useTheme();
    return <WrappedComponent {...props} theme={theme} isDark={isDark} toggleTheme={toggleTheme} />;
  };
}