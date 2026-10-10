import React from 'react';
import { Check } from 'lucide-react';
import { STYLE_OPTIONS } from '../../data/mockData';
import { StyleId } from '../../types';

interface StyleSelectorProps {
  selectedStyle: StyleId;
  onSelect: (id: StyleId) => void;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({
  selectedStyle,
  onSelect,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
          BƯỚC 3 / 5
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mt-1">
          Gu thẩm mỹ của bạn hôm nay?
        </h2>
        <p className="text-sm text-[#57534E] mt-1">
          Định hình phong cách thời trang bạn muốn mang lại khi diện cùng trang phục truyền thống.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {STYLE_OPTIONS.map((style) => {
          const isSelected = selectedStyle === style.id;
          return (
            <button
              key={style.id}
              onClick={() => onSelect(style.id)}
              className={`text-left p-6 border transition-all flex flex-col justify-between group relative ${
                isSelected
                  ? 'border-[#9E2A2B] bg-[#FAF8F5] shadow-sm ring-1 ring-[#9E2A2B]'
                  : 'border-[#E7E2DA] bg-[#FAF8F5]/80 hover:border-[#D6CEBE]'
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 w-5 h-5 bg-[#9E2A2B] text-white flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              )}

              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#9E2A2B] font-semibold">
                  Aesthetic Mood
                </div>
                
                <h3 className="font-editorial text-2xl font-bold text-[#1C1917] mt-1">
                  {style.name}
                </h3>
                
                <div className="text-xs font-medium text-[#78716C] mt-0.5 italic font-serif">
                  "{style.tagline}"
                </div>

                <p className="text-xs text-[#57534E] mt-3 leading-relaxed">
                  {style.description}
                </p>

                {/* Palette Cues */}
                <div className="mt-5 pt-4 border-t border-[#E7E2DA]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block mb-2">
                    Tone màu chủ đạo:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {style.paletteCues.map((color) => (
                      <span
                        key={color}
                        className="text-[11px] px-2 py-0.5 bg-[#EFEBE4] text-[#57534E] border border-[#E7E2DA]"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E7E2DA] text-xs text-[#78716C] flex items-center justify-between">
                <span>Cảm giác tổng thể</span>
                <span className="font-semibold text-[#1C1917]">
                  {style.id === 'urban_casual' ? 'Thoải mái & Tự nhiên' : style.id === 'neo_classic' ? 'Sang trọng & Đĩnh đạc' : 'Độc bản & Cá tính'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
