import React from 'react';
import { HeroSection } from './HeroSection';
import { ValueSection } from './ValueSection';
import { HowItWorks } from './HowItWorks';
import { CollectionPreview } from './CollectionPreview';
import { ArrowRight } from 'lucide-react';
import { GarmentId } from '../../types';

interface LandingPageProps {
  onStartStyling: () => void;
  onSelectGarment: (garmentId: GarmentId) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartStyling,
  onSelectGarment,
}) => {
  return (
    <div className="min-h-screen">
      {/* 1. Hero */}
      <HeroSection
        onStartStyling={onStartStyling}
        onExploreHowItWorks={() => {
          const el = document.getElementById('how-it-works');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Value Proposition */}
      <ValueSection />

      {/* 3. How It Works */}
      <HowItWorks onStartStyling={onStartStyling} />

      {/* 4. Collection Preview */}
      <CollectionPreview onSelectGarmentToStyle={onSelectGarment} />

      {/* 5. Final CTA Section */}
      <section className="py-24 border-t border-[#E7E2DA] bg-[#1C1917] text-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4A373]">
            SẴN SÀNG LÀM MỚI TỦ ĐỒ?
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Bắt đầu tạo bản phối của riêng bạn ngay hôm nay.
          </h2>
          <p className="text-sm sm:text-base text-[#D6CEBE] max-w-xl mx-auto">
            Khám phá 2–3 gợi ý outfit phong cách kết hợp Việt phục chuẩn xác với những món đồ bạn đang sở hữu.
          </p>
          <div className="pt-4">
            <button
              onClick={onStartStyling}
              className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#FAF8F5] hover:bg-white hover:scale-[1.01] active:bg-[#E7E2DA] transition-all"
            >
              <span>Vào Styling Studio ngay</span>
              <ArrowRight className="w-4 h-4 text-[#9E2A2B]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
