import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const { props } = usePage();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isRTL, setIsRTL] = useState(props.isRTL || false);
  const [isFluid, setIsFluid] = useState(props.isFluid || true);
  const [navigationColor, setNavigationColor] = useState('inverted');

  useEffect(() => {
    // Apply theme to document
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    
    // Apply RTL settings
    const html = document.documentElement;
    if (isRTL) {
      html.setAttribute('dir', 'rtl');
      document.getElementById('stylesheetLTR')?.setAttribute('disabled', '');
      document.getElementById('stylesheetRTL')?.removeAttribute('disabled');
    } else {
      html.removeAttribute('dir');
      document.getElementById('stylesheetRTL')?.setAttribute('disabled', '');
      document.getElementById('stylesheetLTR')?.removeAttribute('disabled');
    }
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (localStorage.getItem('theme') === 'auto') {
        setTheme('auto');
      }
    };
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, [theme, isRTL]);

  const value = {
    theme,
    setTheme,
    isRTL,
    setIsRTL,
    isFluid,
    setIsFluid,
    navigationColor,
    setNavigationColor
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);