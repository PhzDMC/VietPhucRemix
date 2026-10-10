import React, { useState } from 'react';
import { StepNavigation } from './StepNavigation';
import { OccasionSelector } from './OccasionSelector';
import { GarmentSelector } from './GarmentSelector';
import { StyleSelector } from './StyleSelector';
import { WardrobeInput } from './WardrobeInput';
import { PreferencePanel } from './PreferencePanel';
import { StylingSummary } from './StylingSummary';
import { StylingStudioState, OccasionId, GarmentId, StyleId, WardrobeUserItem } from '../../types';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface StylingStudioProps {
  initialGarmentId?: GarmentId;
  onGenerateLooks: (studioState: StylingStudioState) => void;
  onBackToLanding: () => void;
}

export const StylingStudio: React.FC<StylingStudioProps> = ({
  initialGarmentId,
  onGenerateLooks,
  onBackToLanding,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const [studioState, setStudioState] = useState<StylingStudioState>({
    occasionId: 'streetwear',
    garmentId: initialGarmentId || 'ngu_than',
    styleId: 'urban_casual',
    wardrobeText: 'Mình có một đôi sneaker trắng da tối giản và chiếc quần tây xếp ly màu than chì.',
    wardrobeItems: [
      { id: 'w-1', name: 'Sneaker trắng tối giản', category: 'footwear' },
      { id: 'w-2', name: 'Quần tây âu xếp ly', category: 'bottom' },
    ],
    traditionBalance: 3,
    preferredColorTone: 'indigo_earth',
    includeAccessories: true,
    notes: '',
  });

  const handleOccasionSelect = (id: OccasionId) => {
    setStudioState((prev) => ({ ...prev, occasionId: id }));
  };

  const handleGarmentSelect = (id: GarmentId) => {
    setStudioState((prev) => ({ ...prev, garmentId: id }));
  };

  const handleStyleSelect = (id: StyleId) => {
    setStudioState((prev) => ({ ...prev, styleId: id }));
  };

  const handleWardrobeText = (val: string) => {
    setStudioState((prev) => ({ ...prev, wardrobeText: val }));
  };

  const handleAddWardrobeItem = (name: string, category: WardrobeUserItem['category']) => {
    const newItem: WardrobeUserItem = {
      id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
      name,
      category,
    };
    setStudioState((prev) => ({
      ...prev,
      wardrobeItems: [...prev.wardrobeItems, newItem],
    }));
  };

  const handleRemoveWardrobeItem = (id: string) => {
    setStudioState((prev) => ({
      ...prev,
      wardrobeItems: prev.wardrobeItems.filter((i) => i.id !== id),
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      onGenerateLooks(studioState);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      onBackToLanding();
    }
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Step Tabs Bar */}
      <StepNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepClick={(s) => setCurrentStep(s)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Studio Interactive Form (8 cols on desktop) */}
          <main className="lg:col-span-8 min-h-[500px] flex flex-col justify-between">
            <div>
              {currentStep === 1 && (
                <OccasionSelector
                  selectedOccasion={studioState.occasionId}
                  onSelect={handleOccasionSelect}
                />
              )}

              {currentStep === 2 && (
                <GarmentSelector
                  selectedGarment={studioState.garmentId}
                  onSelect={handleGarmentSelect}
                />
              )}

              {currentStep === 3 && (
                <StyleSelector
                  selectedStyle={studioState.styleId}
                  onSelect={handleStyleSelect}
                />
              )}

              {currentStep === 4 && (
                <WardrobeInput
                  wardrobeText={studioState.wardrobeText}
                  onTextChange={handleWardrobeText}
                  wardrobeItems={studioState.wardrobeItems}
                  onAddItem={handleAddWardrobeItem}
                  onRemoveItem={handleRemoveWardrobeItem}
                />
              )}

              {currentStep === 5 && (
                <PreferencePanel
                  traditionBalance={studioState.traditionBalance}
                  onTraditionChange={(val) =>
                    setStudioState((prev) => ({ ...prev, traditionBalance: val }))
                  }
                  preferredTone={studioState.preferredColorTone}
                  onToneChange={(val) =>
                    setStudioState((prev) => ({ ...prev, preferredColorTone: val }))
                  }
                  includeAccessories={studioState.includeAccessories}
                  onAccessoriesToggle={(val) =>
                    setStudioState((prev) => ({ ...prev, includeAccessories: val }))
                  }
                  notes={studioState.notes}
                  onNotesChange={(val) =>
                    setStudioState((prev) => ({ ...prev, notes: val }))
                  }
                  onSubmit={() => onGenerateLooks(studioState)}
                />
              )}
            </div>

            {/* Stepper Navigation Footer Buttons */}
            <div className="mt-12 pt-6 border-t border-[#E7E2DA] flex items-center justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#57534E] hover:text-[#1C1917] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{currentStep === 1 ? 'Quay lại trang chủ' : 'Bước trước'}</span>
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 py-3 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#38332E] transition-colors shadow-sm"
                >
                  <span>Tiếp tục</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : null}
            </div>
          </main>

          {/* Contextual Summary Panel on Desktop (4 cols) */}
          <div className="hidden lg:block lg:col-span-4">
            <StylingSummary
              state={studioState}
              onGoToStep={(step) => setCurrentStep(step)}
            />
          </div>

        </div>
      </div>
    </div>
  );
};
