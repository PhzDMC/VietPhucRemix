import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PreferencePanelProps {
  traditionBalance: number;
  onTraditionChange: (val: number) => void;
  preferredTone: string;
  onToneChange: (val: string) => void;
  includeAccessories: boolean;
  onAccessoriesToggle: (val: boolean) => void;
  notes: string;
  onNotesChange: (val: string) => void;
  onSubmit: () => void;
}

export const PreferencePanel: React.FC<PreferencePanelProps> = ({
  traditionBalance,
  onTraditionChange,
  preferredTone,
  onToneChange,
  includeAccessories,
  onAccessoriesToggle,
  notes,
  onNotesChange,
  onSubmit,
}) => {
  const tones = [
    { id: 'indigo_earth', label: 'Chàm & Tone đất', desc: 'Trầm ấm, dung dị' },
    { id: 'emerald_jade', label: 'Xanh ngọc & Kem', desc: 'Thanh lịch, quý phái' },
    { id: 'monochrome', label: 'Đen trắng & Son gạch', desc: 'Cá tính đương đại' },
    { id: 'ai_choice', label: 'Tự động hòa sắc', desc: 'AI chọn theo thời tiết' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
          BƯỚC 5 / 5
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mt-1">
          Tinh chỉnh sắc thái mong muốn
        </h2>
        <p className="text-sm text-[#57534E] mt-1">
          Cân bằng giữa tỷ lệ cổ phong và hơi thở hiện đại để nhận được gợi ý chuẩn gu nhất.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border border-[#E7E2DA] p-6 sm:p-8 space-y-8">
        
        {/* Tradition Balance Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold uppercase tracking-wider text-[#1C1917]">
              Mức độ: Hiện đại ↔ Cổ phong nguyên bản
            </span>
            <span className="font-mono text-[#9E2A2B] font-semibold">
              {traditionBalance <= 2
                ? 'Nghiêng về Hiện đại'
                : traditionBalance === 3
                ? 'Cân bằng 50 / 50'
                : 'Nghiêng về Cổ phong'}
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={traditionBalance}
            onChange={(e) => onTraditionChange(Number(e.target.value))}
            className="w-full h-2 bg-[#E7E2DA] rounded-lg appearance-none cursor-pointer accent-[#9E2A2B]"
          />

          <div className="flex justify-between text-[11px] text-[#78716C]">
            <span>1. Rất đương đại (Layer nhẹ)</span>
            <span>3. Hài hòa song hành</span>
            <span>5. Thuần nguyên bản</span>
          </div>
        </div>

        {/* Tone Selection */}
        <div className="space-y-3 pt-6 border-t border-[#E7E2DA]">
          <span className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
            Tone màu chủ đạo mong muốn:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {tones.map((t) => {
              const isSelected = preferredTone === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => onToneChange(t.id)}
                  className={`p-3 text-left border transition-all ${
                    isSelected
                      ? 'border-[#9E2A2B] bg-white ring-1 ring-[#9E2A2B]'
                      : 'border-[#E7E2DA] bg-[#F7F4EE] hover:bg-white'
                  }`}
                >
                  <span className="text-xs font-semibold text-[#1C1917] block">
                    {t.label}
                  </span>
                  <span className="text-[11px] text-[#78716C] block mt-0.5">
                    {t.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Accessories Toggle */}
        <div className="flex items-center justify-between pt-6 border-t border-[#E7E2DA]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1917] block">
              Gợi ý phụ kiện đi kèm
            </span>
            <span className="text-xs text-[#78716C]">
              Quạt nan tre, vòng tay bạc, túi đeo chéo thủ công hoặc nhẫn đá.
            </span>
          </div>
          <button
            type="button"
            onClick={() => onAccessoriesToggle(!includeAccessories)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              includeAccessories ? 'bg-[#9E2A2B]' : 'bg-[#D6CEBE]'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                includeAccessories ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Additional Custom Request */}
        <div className="space-y-2 pt-6 border-t border-[#E7E2DA]">
          <label htmlFor="custom-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
            Ghi chú thêm cho AI Stylist (Tùy chọn):
          </label>
          <input
            id="custom-notes"
            type="text"
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
            placeholder="Ví dụ: Mình cao 1m68, muốn set đồ che khuyết điểm vai và dễ chụp ảnh ngoài trời..."
            className="w-full bg-white border border-[#E7E2DA] focus:border-[#9E2A2B] p-3 text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none"
          />
        </div>

      </div>

      {/* Primary CTA Submit */}
      <div className="pt-2">
        <button
          type="button"
          onClick={onSubmit}
          className="w-full py-4 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#9E2A2B] hover:bg-[#832223] active:bg-[#6E1C1D] transition-colors flex items-center justify-center gap-3 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E2A2B]"
        >
          <Sparkles className="w-4 h-4" />
          <span>Tạo bản phối ngay</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
