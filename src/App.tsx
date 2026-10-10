import React, { useState } from 'react';
import { AppShell } from './components/common/AppShell';
import { LandingPage } from './components/landing/LandingPage';
import { StylingStudio } from './components/studio/StylingStudio';
import { AIProcessing } from './components/processing/AIProcessing';
import { ResultPage } from './components/result/ResultPage';
import { MOCK_OUTFIT_LOOKS } from './data/mockData';
import { GarmentId, StylingStudioState, OutfitLook } from './types';

type ActiveView = 'landing' | 'studio' | 'processing' | 'result';

export default function App() {
  const [currentView, setCurrentView] = useState<ActiveView>('landing');
  const [initialGarmentId, setInitialGarmentId] = useState<GarmentId>('ngu_than');
  const [outfitLooks, setOutfitLooks] = useState<OutfitLook[]>(MOCK_OUTFIT_LOOKS);

  const handleStartStyling = (presetGarment?: GarmentId) => {
    if (presetGarment) {
      setInitialGarmentId(presetGarment);
    }
    setCurrentView('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGenerateLooks = (_studioState: StylingStudioState) => {
    // Switch to AI processing sequence
    setCurrentView('processing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProcessingComplete = () => {
    // After 2.5s sequence completes, move to Result Page
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToStudio = () => {
    setCurrentView('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRegenerateAll = () => {
    setCurrentView('processing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppShell
      currentView={currentView === 'processing' ? 'studio' : currentView}
      onNavigate={(view) => {
        setCurrentView(view);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      onStartStyling={() => handleStartStyling()}
    >
      {currentView === 'landing' && (
        <LandingPage
          onStartStyling={() => handleStartStyling()}
          onSelectGarment={(gId) => handleStartStyling(gId)}
        />
      )}

      {currentView === 'studio' && (
        <StylingStudio
          initialGarmentId={initialGarmentId}
          onGenerateLooks={handleGenerateLooks}
          onBackToLanding={() => {
            setCurrentView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {currentView === 'processing' && (
        <AIProcessing onComplete={handleProcessingComplete} />
      )}

      {currentView === 'result' && (
        <ResultPage
          looks={outfitLooks}
          onBackToStudio={handleBackToStudio}
          onRegenerateAll={handleRegenerateAll}
        />
      )}
    </AppShell>
  );
}
