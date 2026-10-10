import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface HeroSectionProps {
  onStartStyling: () => void;
  onExploreHowItWorks: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartStyling,
  onExploreHowItWorks,
}) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#9E2A2B]">
                <span>Cổ Nhân Stylist</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#78716C]">AI Fashion Co-pilot</span>
              </div>
              
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1917] leading-[1.08] text-balance">
                Việt phục, <br />
                <span className="italic font-light text-[#9E2A2B]">theo cách của bạn.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#57534E] max-w-xl font-normal leading-relaxed pt-2">
                Trợ lý AI thời trang đầu tiên giúp người trẻ phối áo ngũ thân, áo tấc, giao lĩnh cùng những món đồ hiện đại có sẵn trong tủ quần áo hàng ngày.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onStartStyling}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#9E2A2B] hover:bg-[#832223] active:bg-[#6E1C1D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9E2A2B]"
              >
                <span>Bắt đầu phối đồ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onExploreHowItWorks}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-medium uppercase tracking-wider text-[#1C1917] border border-[#D6CEBE] bg-[#FAF8F5] hover:bg-[#F3EFEA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1917]"
              >
                <Compass className="w-4 h-4 text-[#78716C]" />
                <span>Khám phá cách hoạt động</span>
              </button>
            </div>

            {/* Quiet Editorial Quote */}
            <div className="pt-6 border-t border-[#E7E2DA] flex items-baseline gap-6 text-xs text-[#78716C]">
              <div>
                <span className="font-editorial text-sm font-semibold text-[#1C1917] block">Đậm bản sắc</span>
                <span>Tôn trọng tuyệt đối quy chuẩn y phục gốc</span>
              </div>
              <span className="text-[#D6CEBE]">/</span>
              <div>
                <span className="font-editorial text-sm font-semibold text-[#1C1917] block">Tiện dụng Gen Z</span>
                <span>Phối trực tiếp cùng sneaker, jeans & blazer</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-fashion Editorial Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame with SSENSE editorial cut */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F3EFEA] border border-[#E7E2DA] shadow-sm">
                <img
                  src="/src/assets/images/hero_vietnamese_fashion_1791601214216.jpg"
                  alt="Bộ trang phục kết hợp phong cách Việt đương đại mang tính biểu tượng"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating quiet editorial tag */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex justify-between items-end">
                  <div>
                    <span className="font-mono text-[10px] tracking-wider text-white/70 block uppercase">LOOKBOOK PREVIEW</span>
                    <span className="font-editorial text-base font-medium">Urban Vietnamese Silhouette</span>
                  </div>
                  <span className="text-[11px] font-mono text-white/80">Issue 01</span>
                </div>
              </div>

              {/* Editorial Offset Accent Plate */}
              <div className="hidden sm:block absolute -bottom-6 -left-8 bg-[#FAF8F5] border border-[#E7E2DA] p-4 shadow-sm max-w-[210px]">
                <div className="font-mono text-[10px] uppercase text-[#9E2A2B] font-semibold tracking-wider">
                  Tôn Trọng Di Sản
                </div>
                <div className="font-editorial text-sm font-semibold text-[#1C1917] mt-1">
                  Không biến cải tùy tiện kết cấu cổ & vạt áo
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
