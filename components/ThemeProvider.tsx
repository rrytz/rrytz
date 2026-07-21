'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import ThemeTransitionOverlay from './ThemeTransitionOverlay';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [triggerTransition, setTriggerTransition] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'forward' | 'reverse'>('forward');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    const initialTheme = savedTheme || 'dark';
    if (initialTheme === 'light') {
      document.documentElement.classList.add('light');
      setTimeout(() => {
        setTheme('light');
      }, 0);
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionDirection(theme === 'dark' ? 'forward' : 'reverse');
    setTriggerTransition(true);
  };

  const handleHalfway = useCallback(() => {
    setTheme((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', nextTheme);
      if (nextTheme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
      return nextTheme;
    });
  }, []);

  const handleComplete = useCallback(() => {
    setIsTransitioning(false);
    setTriggerTransition(false);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
      {triggerTransition && (
        <ThemeTransitionOverlay
          active={triggerTransition}
          direction={transitionDirection}
          onHalfway={handleHalfway}
          onComplete={handleComplete}
        />
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
