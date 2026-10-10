import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { GARMENT_OPTIONS } from '../../data/mockData';
import { GarmentId } from '../../types';

interface GarmentSelectorProps {
  selectedGarment: GarmentId;
  onSelect: (id: GarmentId) => void;
}

export const GarmentSelector: React.FC<GarmentSelectorProps> = ({
  selectedGarment,
  onSelect,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
          BƯỚC 2 / 5
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mt-1">
          Bạn muốn bắt đầu từ Việt phục nào?
        </h2>
        <p className="text-sm text-[#57534E] mt-1">
          Chọn dáng áo chủ đạo hoặc để AI tự chọn mẫu phù hợp nhất với món đồ bạn đang có.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {GARMENT_OPTIONS.map((g) => {
          const isSelected = selectedGarment === g.id;
          const isAI = g.id === 'ai_recommend';

          return (
            <button
              key={g.id}
              onClick={() => onSelect(g.id)}
              className={`text-left p-6 border transition-all flex flex-col justify-between group relative ${
                isSelected
                  ? 'border-[#9E2A2B] bg-[#FAF8F5] shadow-sm ring-1 ring-[#9E2A2B]'
                  : isAI
                  ? 'border-[#D4A373] bg-[#FDFBF7] hover:border-[#9E2A2B]'
                  : 'border-[#E7E2DA] bg-[#FAF8F5]/80 hover:border-[#D6CEBE]'
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 w-5 h-5 bg-[#9E2A2B] text-white flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              )}

              <div>
                {/* Visual Preview Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E2A2B] bg-[#F3EFEA] px-2 py-0.5 border border-[#E7E2DA]">
                    {g.tag}
                  </span>
                  {isAI && <Sparkles className="w-4 h-4 text-[#D4A373]" />}
                </div>

                {/* Silhouette preview mock plate */}
                <div className="aspect-[4/3] bg-[#EFEBE4] mb-4 border border-[#E7E2DA] flex items-center justify-center p-4">
                  <div className="text-center space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#78716C] block">
                      {g.dynastyPeriod}
                    </span>
                    <span className="font-editorial text-lg font-bold text-[#1C1917] block">
                      {g.name}
                    </span>
                    <span className="text-xs text-[#57534E] italic font-serif block">
                      "{g.silhouetteDesc}"
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                  {g.formalName}
                </div>

                <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
                  {g.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E7E2DA] text-[11px] text-[#78716C] font-mono">
                {isAI ? '→ Đề xuất tự động theo tủ đồ' : `→ Phom dáng gốc chuẩn xác`}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
