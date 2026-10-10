import React from 'react';
import { Check } from 'lucide-react';
import { OCCASION_OPTIONS } from '../../data/mockData';
import { OccasionId } from '../../types';

interface OccasionSelectorProps {
  selectedOccasion: OccasionId;
  onSelect: (id: OccasionId) => void;
}

export const OccasionSelector: React.FC<OccasionSelectorProps> = ({
  selectedOccasion,
  onSelect,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
          BƯỚC 1 / 5
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mt-1">
          Bạn đang chuẩn bị cho dịp nào?
        </h2>
        <p className="text-sm text-[#57534E] mt-1">
          Bối cảnh sẽ quyết định độ linh hoạt, chất liệu vải và độ trang trọng của tà áo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {OCCASION_OPTIONS.map((occ, idx) => {
          const isSelected = selectedOccasion === occ.id;
          return (
            <button
              key={occ.id}
              onClick={() => onSelect(occ.id)}
              className={`text-left p-6 border transition-all flex flex-col justify-between group relative ${
                isSelected
                  ? 'border-[#9E2A2B] bg-[#FAF8F5] shadow-sm ring-1 ring-[#9E2A2B]'
                  : 'border-[#E7E2DA] bg-[#FAF8F5]/80 hover:border-[#D6CEBE] hover:bg-[#FAF8F5]'
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 w-5 h-5 bg-[#9E2A2B] text-white flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              )}

              <div>
                {/* Visual Minimal Plate */}
                <div className="aspect-[16/9] bg-[#EDE8E0] mb-4 overflow-hidden border border-[#E7E2DA] flex items-center justify-center p-4">
                  <div className="text-center">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block">
                      SCENARIO 0{idx + 1}
                    </span>
                    <span className="font-editorial text-base font-semibold text-[#1C1917] line-clamp-1">
                      {occ.recommendedVibe}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-[#9E2A2B] font-semibold">
                  {occ.recommendedVibe}
                </div>
                
                <h3 className="font-editorial text-xl font-bold text-[#1C1917] mt-1">
                  {occ.title}
                </h3>
                
                <div className="text-xs font-medium text-[#78716C] mt-0.5">
                  {occ.subtitle}
                </div>

                <p className="text-xs text-[#57534E] mt-3 leading-relaxed">
                  {occ.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E7E2DA] flex items-center justify-between text-xs text-[#78716C]">
                <span>Mức độ trang trọng</span>
                <span className="font-mono text-[#1C1917] font-medium">
                  {occ.id === 'streetwear' ? '30%' : occ.id === 'graduation' ? '70%' : '90%'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
