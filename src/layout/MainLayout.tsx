// MainLayout.tsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navigation } from './components';
import './MainLayout.css';

interface MainLayoutProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`main-layout ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Outlet />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};
