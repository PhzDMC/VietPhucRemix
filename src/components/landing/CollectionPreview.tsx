import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GARMENT_OPTIONS } from '../../data/mockData';
import { GarmentId } from '../../types';

interface CollectionPreviewProps {
  onSelectGarmentToStyle: (garmentId: GarmentId) => void;
}

export const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  onSelectGarmentToStyle,
}) => {
  // Only the 4 specific heritage garments
  const garments = GARMENT_OPTIONS.filter((g) => g.id !== 'ai_recommend');

  return (
    <section id="collection-preview" className="py-24 border-t border-[#E7E2DA] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
            KHO TƯ LIỆU Y PHỤC
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917] mt-2">
            4 Dáng Việt Phục Tiêu Biểu Trong Hệ Thống
          </h2>
          <p className="text-sm text-[#57534E] mt-3">
            Những thiết kế di sản được số hóa và chuẩn hóa phom dáng để phối hợp cùng phong cách thường nhật.
          </p>
        </div>

        {/* 4 Garments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {garments.map((g, index) => {
            return (
              <div
                key={g.id}
                className="group bg-[#F5F2EC] border border-[#E7E2DA] hover:border-[#9E2A2B]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Visual Silhouette Area */}
                  <div className="relative aspect-[3/4] bg-[#EDE8E0] overflow-hidden border-b border-[#E7E2DA]">
                    {/* Artistic plate graphic depending on garment */}
                    <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                      <div className="space-y-3">
                        <div className="w-16 h-16 mx-auto rounded-full border border-[#D6CEBE] flex items-center justify-center text-[#9E2A2B] font-editorial text-2xl font-light">
                          0{index + 1}
                        </div>
                        <div className="text-[11px] font-mono tracking-wider uppercase text-[#78716C]">
                          {g.dynastyPeriod}
                        </div>
                        <div className="font-editorial text-xl font-bold text-[#1C1917]">
                          {g.name}
                        </div>
                        <div className="text-xs text-[#57534E] max-w-[200px] mx-auto italic font-serif">
                          "{g.silhouetteDesc}"
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider text-[#9E2A2B] bg-[#FAF8F5]/90 px-2 py-0.5 border border-[#E7E2DA]">
                      {g.tag}
                    </div>
                  </div>

                  {/* Info Content */}
                  <div className="p-5 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                      {g.formalName}
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {g.description}
                    </p>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectGarmentToStyle(g.id)}
                    className="w-full inline-flex items-center justify-between py-2.5 px-3 text-xs font-medium uppercase tracking-wider text-[#1C1917] bg-[#FAF8F5] border border-[#D6CEBE] group-hover:bg-[#9E2A2B] group-hover:text-white group-hover:border-[#9E2A2B] transition-colors"
                  >
                    <span>Phối cùng dáng này</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
