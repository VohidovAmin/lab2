import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

 useEffect(() => {
  if(theme == 'light'){
    document.body.classList.add('light')
    document.body.classList.remove('dark')
  }

    else {
    document.body.classList.add('dark')
    document.body.classList.remove('light')
    }
 }, [theme]);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
