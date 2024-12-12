import React, { createContext, useState, useContext } from 'react';

// Create a context with a default value
const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

// Create a provider component
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
