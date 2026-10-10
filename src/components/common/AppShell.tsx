import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface AppShellProps {
  currentView: 'landing' | 'studio' | 'result';
  onNavigate: (view: 'landing' | 'studio' | 'result') => void;
  onStartStyling: () => void;
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({
  currentView,
  onNavigate,
  onStartStyling,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] selection:bg-[#9E2A2B]/15 selection:text-[#9E2A2B]">
      <Header
        currentView={currentView}
        onNavigate={onNavigate}
        onStartStyling={onStartStyling}
      />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
