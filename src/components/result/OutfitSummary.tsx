import React from 'react';
import { OutfitLook } from '../../types';
import { ShoppingBag, SlidersHorizontal, Check, ShieldCheck } from 'lucide-react';

interface OutfitSummaryProps {
  look: OutfitLook;
  onScrollToRefine: () => void;
  onScrollToShop: () => void;
}

export const OutfitSummary: React.FC<OutfitSummaryProps> = ({
  look,
  onScrollToRefine,
  onScrollToShop,
}) => {
  const ownedCount = look.items.filter((i) => i.source === 'owned').length;
  const toPrepareCount = look.items.filter((i) => i.source === 'to_prepare').length;

  return (
    <div className="bg-[#FAF8F5] border border-[#E7E2DA] p-6 sm:p-7 space-y-6 flex flex-col justify-between h-full">
      <div className="space-y-5">
        
        {/* Header Tags */}
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#9E2A2B] font-semibold">
            BẢN PHỐI CHỌN LỌC
          </span>
          <span className="flex items-center gap-1 text-[11px] text-[#2D6A4F] font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Kết cấu đã kiểm chứng</span>
          </span>
        </div>

        {/* Title & Style Tagline */}
        <div>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
            {look.title}
          </h2>
          <div className="flex items-center gap-2 text-xs text-[#78716C] mt-1 font-mono">
            <span>{look.styleName}</span>
            <span aria-hidden="true">/</span>
            <span>{look.occasionName}</span>
          </div>
        </div>

        {/* Editorial Summary */}
        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
          {look.summary}
        </p>

        {/* Wardrobe Utilization Metric */}
        <div className="p-3 bg-[#F3EFEA] border border-[#E7E2DA] flex items-center justify-between text-xs">
          <div>
            <span className="text-[#78716C] block text-[11px]">Tận dụng từ tủ đồ bạn:</span>
            <span className="font-semibold text-[#1C1917]">
              {ownedCount} / {look.items.length} món sẵn có
            </span>
          </div>
          <div className="text-right">
            <span className="text-[#78716C] block text-[11px]">Cần bổ sung:</span>
            <span className="font-semibold text-[#9E2A2B]">
              {toPrepareCount} món (Việt phục chính)
            </span>
          </div>
        </div>

        {/* Palette with Names */}
        <div className="space-y-2 pt-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] block">
            Hòa sắc trang phục:
          </span>
          <div className="grid grid-cols-2 gap-2">
            {look.palette.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 p-1.5 bg-[#F9F7F2] border border-[#E7E2DA]"
              >
                <span
                  className="w-4 h-4 shrink-0 border border-black/10"
                  style={{ backgroundColor: p.hex }}
                />
                <span className="text-[11px] text-[#57534E] truncate font-medium">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="pt-6 border-t border-[#E7E2DA] space-y-3">
        <button
          type="button"
          onClick={onScrollToShop}
          className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#9E2A2B] hover:bg-[#832223] transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Tìm nơi may / thuê set này</span>
        </button>

        <button
          type="button"
          onClick={onScrollToRefine}
          className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#FAF8F5] border border-[#D6CEBE] hover:bg-[#F3EFEA] transition-colors flex items-center justify-center gap-2"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#78716C]" />
          <span>Tinh chỉnh thêm bản phối</span>
        </button>
      </div>

    </div>
  );
};
