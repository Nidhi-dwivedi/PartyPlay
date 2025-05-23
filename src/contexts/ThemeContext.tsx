
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

type ThemeType = 'light' | 'dark' | 'aesthetic' | 'cyberpunk';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const storedTheme = localStorage.getItem('party-play-theme');
    // If the stored theme was 'retro', default to 'light' instead
    return (storedTheme === 'retro' ? 'light' : storedTheme as ThemeType) || 'light';
  });

  useEffect(() => {
    document.documentElement.classList.remove('theme-aesthetic', 'theme-retro', 'theme-cyberpunk', 'dark');
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme !== 'light') {
      document.documentElement.classList.add(`theme-${theme}`);
    }
    
    localStorage.setItem('party-play-theme', theme);
    toast(`Theme changed to ${theme}!`);
  }, [theme]);

  const toggleTheme = () => {
    const themes: ThemeType[] = ['light', 'dark', 'aesthetic', 'cyberpunk'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
