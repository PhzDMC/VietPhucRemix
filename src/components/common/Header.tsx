import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentView: 'landing' | 'studio' | 'result';
  onNavigate: (view: 'landing' | 'studio' | 'result') => void;
  onStartStyling: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onStartStyling }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7E2DA]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => onNavigate('landing')}
          className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E2A2B] rounded-sm transition-opacity hover:opacity-85"
        >
          <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] block leading-none">
            CỔ NHÂN <span className="text-[#9E2A2B] font-light italic">Stylist</span>
          </span>
        </button>

        {/* Zone 2: Navigation Links (Single-line, concise) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]">
          <button
            onClick={() => onNavigate('landing')}
            className={`whitespace-nowrap transition-colors hover:text-[#1C1917] ${
              currentView === 'landing' ? 'text-[#1C1917] font-semibold underline underline-offset-8 decoration-[#9E2A2B] decoration-2' : ''
            }`}
          >
            Tổng quan
          </button>
          <button
            onClick={() => {
              onNavigate('landing');
              setTimeout(() => {
                const el = document.getElementById('how-it-works');
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="whitespace-nowrap transition-colors hover:text-[#1C1917]"
          >
            Cách hoạt động
          </button>
          <button
            onClick={() => {
              onNavigate('landing');
              setTimeout(() => {
                const el = document.getElementById('collection-preview');
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="whitespace-nowrap transition-colors hover:text-[#1C1917]"
          >
            Kho Việt phục
          </button>
          <button
            onClick={() => onNavigate('studio')}
            className={`whitespace-nowrap transition-colors hover:text-[#1C1917] ${
              currentView === 'studio' ? 'text-[#1C1917] font-semibold underline underline-offset-8 decoration-[#9E2A2B] decoration-2' : ''
            }`}
          >
            Styling Studio
          </button>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {currentView !== 'studio' ? (
            <button
              onClick={onStartStyling}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#9E2A2B] rounded-none hover:bg-[#832223] active:bg-[#6E1C1D] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9E2A2B] whitespace-nowrap"
            >
              <span>Bắt đầu phối đồ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="text-xs text-[#78716C] font-mono tracking-tight hidden sm:block">
              AI Co-pilot: Active
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
