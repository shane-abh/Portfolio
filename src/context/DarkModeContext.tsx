import { createContext, useState, useContext, ReactNode } from 'react';

// Create a context with a default value
const DarkModeContext = createContext({
  isDarkMode: true, // default value
  toggleDarkMode: () => {}, // default toggle function
});

// Hook to access dark mode context
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

// Create a provider component with a typed children prop
interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
