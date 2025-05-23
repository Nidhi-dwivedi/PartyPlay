import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Palette, Music, Music2, Home } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GameLayout = ({ children, title }) => {
  const { theme, toggleTheme } = useTheme();
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const storedSoundPreference = localStorage.getItem('party-play-sound');
    setSoundEnabled(storedSoundPreference !== 'disabled');
  }, []);

  const toggleSound = () => {
    const newValue = !soundEnabled;
    setSoundEnabled(newValue);
    localStorage.setItem('party-play-sound', newValue ? 'enabled' : 'disabled');
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'dark': return <Moon className="h-5 w-5" />;
      case 'aesthetic': return <Palette className="h-5 w-5 text-pink-500" />;
      case 'cyberpunk': return <Palette className="h-5 w-5 text-purple-500" />;
      default: return <Sun className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <header className="p-4 border-b shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">PartyPlay</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleSound} title={soundEnabled ? "Mute sound" : "Enable sound"}>
              {soundEnabled ? <Music className="h-5 w-5" /> : <Music2 className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} title="Change theme">
              {getThemeIcon()}
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/" title="Home">
                <Home className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-6 px-4">
        {title && (
          <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        )}
        {children}
      </main>

      <footer className="py-4 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          PartyPlay – The Ultimate Game Generator
        </div>
      </footer>
    </div>
  );
};

export default GameLayout;
