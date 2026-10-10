import React, { useState } from 'react';
import { OutfitLook } from '../../types';
import { LookSwitcher } from './LookSwitcher';
import { OutfitPreview } from './OutfitPreview';
import { OutfitSummary } from './OutfitSummary';
import { OutfitBreakdown } from './OutfitBreakdown';
import { WhyThisLook } from './WhyThisLook';
import { CulturalContext } from './CulturalContext';
import { DosAndDonts } from './DosAndDonts';
import { ShopSuggestions } from './ShopSuggestions';
import { ConceptImageSection } from './ConceptImageSection';
import { RefinementActions } from './RefinementActions';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface ResultPageProps {
  looks: OutfitLook[];
  onBackToStudio: () => void;
  onRegenerateAll: () => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({
  looks,
  onBackToStudio,
  onRegenerateAll,
}) => {
  const [activeLookId, setActiveLookId] = useState<string>(looks[0]?.id || 'look-01');
  const [refineFeedbackNote, setRefineFeedbackNote] = useState<string | null>(null);

  const activeLook = looks.find((l) => l.id === activeLookId) || looks[0];

  const handleRefineAction = (_actionKey: string, actionLabel: string) => {
    setRefineFeedbackNote(`Đã tối ưu hóa bản phối theo tiêu chí: "${actionLabel}"`);
    setTimeout(() => {
      setRefineFeedbackNote(null);
    }, 4000);
  };

  const scrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!activeLook) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-sm text-[#78716C]">Không tìm thấy bản phối phù hợp.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      
      {/* Top Breadcrumb & Return Bar */}
      <div className="border-b border-[#E7E2DA] bg-[#F7F4EE]/50 py-3 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <button
            onClick={onBackToStudio}
            className="inline-flex items-center gap-2 text-[#57534E] hover:text-[#1C1917] font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Chỉnh sửa thông số trong Studio</span>
          </button>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[#78716C]">
            <span>Đã tạo 3 bản phối độc lập</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#9E2A2B] font-semibold">100% Cổ phục chuẩn hóa</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Look Switcher */}
        <LookSwitcher
          looks={looks}
          activeLookId={activeLookId}
          onSelectLook={(id) => setActiveLookId(id)}
        />

        {refineFeedbackNote && (
          <div className="p-3 bg-[#E8F3EE] border border-[#C2E0D1] text-xs text-[#2D6A4F] flex items-center gap-2 font-medium">
            <Sparkles className="w-4 h-4" />
            <span>{refineFeedbackNote}</span>
          </div>
        )}

        {/* MAIN AREA: Left 60% OutfitPreview, Right 40% OutfitSummary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 60% (7 cols on lg) */}
          <div className="lg:col-span-7">
            <OutfitPreview look={activeLook} />
          </div>

          {/* Right 40% (5 cols on lg) */}
          <div className="lg:col-span-5 h-full">
            <OutfitSummary
              look={activeLook}
              onScrollToRefine={() => scrollToSection('refine-section')}
              onScrollToShop={() => scrollToSection('shop-suggestions')}
            />
          </div>

        </div>

        {/* SECTION: Outfit Breakdown */}
        <OutfitBreakdown look={activeLook} />

        {/* SECTION: Why This Look */}
        <WhyThisLook look={activeLook} />

        {/* SECTION: Cultural Context */}
        <CulturalContext culturalData={activeLook.culturalContext} />

        {/* SECTION: Dos & Don'ts */}
        <DosAndDonts
          dos={activeLook.dosAndDonts.dos}
          donts={activeLook.dosAndDonts.donts}
        />

        {/* SECTION: Shop / Rent Recommendations */}
        <ShopSuggestions suggestions={activeLook.shopSuggestions} />

        {/* SECTION: AI Concept Image Section (Optional Placeholder) */}
        <ConceptImageSection look={activeLook} />

        {/* SECTION: Refinement Actions */}
        <RefinementActions
          onRefineAction={handleRefineAction}
          onRegenerateFresh={onRegenerateAll}
        />

      </div>
    </div>
  );
};
