import React from 'react';
import { StylingStudioState } from '../../types';
import { OCCASION_OPTIONS, GARMENT_OPTIONS, STYLE_OPTIONS } from '../../data/mockData';

interface StylingSummaryProps {
  state: StylingStudioState;
  onGoToStep: (step: number) => void;
}

export const StylingSummary: React.FC<StylingSummaryProps> = ({ state, onGoToStep }) => {
  const occasion = OCCASION_OPTIONS.find((o) => o.id === state.occasionId);
  const garment = GARMENT_OPTIONS.find((g) => g.id === state.garmentId);
  const style = STYLE_OPTIONS.find((s) => s.id === state.styleId);

  return (
    <aside className="bg-[#FAF8F5] border border-[#E7E2DA] p-6 space-y-6 sticky top-24">
      <div className="border-b border-[#E7E2DA] pb-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold block">
          PROFILE TỔNG QUAN
        </span>
        <h3 className="font-editorial text-lg font-bold text-[#1C1917] mt-0.5">
          Bản ghi thông số phối đồ
        </h3>
      </div>

      <div className="space-y-4 text-xs">
        {/* Occasion */}
        <div className="flex items-start justify-between gap-3 group">
          <div>
            <span className="text-[#78716C] block text-[11px]">Bối cảnh / Dịp:</span>
            <span className="font-semibold text-[#1C1917]">
              {occasion?.title || 'Chưa chọn'}
            </span>
          </div>
          <button
            onClick={() => onGoToStep(1)}
            className="text-[11px] text-[#9E2A2B] hover:underline shrink-0"
          >
            Đổi
          </button>
        </div>

        {/* Garment */}
        <div className="flex items-start justify-between gap-3 group pt-3 border-t border-[#E7E2DA]/60">
          <div>
            <span className="text-[#78716C] block text-[11px]">Việt phục chỉ định:</span>
            <span className="font-semibold text-[#1C1917]">
              {garment?.name || 'Để AI gợi ý'}
            </span>
          </div>
          <button
            onClick={() => onGoToStep(2)}
            className="text-[11px] text-[#9E2A2B] hover:underline shrink-0"
          >
            Đổi
          </button>
        </div>

        {/* Style */}
        <div className="flex items-start justify-between gap-3 group pt-3 border-t border-[#E7E2DA]/60">
          <div>
            <span className="text-[#78716C] block text-[11px]">Gu thẩm mỹ:</span>
            <span className="font-semibold text-[#1C1917]">
              {style?.name || 'Urban Casual'}
            </span>
          </div>
          <button
            onClick={() => onGoToStep(3)}
            className="text-[11px] text-[#9E2A2B] hover:underline shrink-0"
          >
            Đổi
          </button>
        </div>

        {/* Wardrobe Items */}
        <div className="pt-3 border-t border-[#E7E2DA]/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#78716C] text-[11px]">Món đồ có sẵn:</span>
            <button
              onClick={() => onGoToStep(4)}
              className="text-[11px] text-[#9E2A2B] hover:underline"
            >
              Cập nhật
            </button>
          </div>
          {state.wardrobeItems.length === 0 ? (
            <span className="text-[#A8A29E] italic">Chưa nhập món đồ nào</span>
          ) : (
            <div className="flex flex-wrap gap-1">
              {state.wardrobeItems.slice(0, 4).map((item) => (
                <span
                  key={item.id}
                  className="px-2 py-0.5 bg-[#F3EFEA] border border-[#E7E2DA] text-[10px] text-[#57534E]"
                >
                  {item.name}
                </span>
              ))}
              {state.wardrobeItems.length > 4 && (
                <span className="text-[10px] text-[#78716C] self-center">
                  +{state.wardrobeItems.length - 4} món
                </span>
              )}
            </div>
          )}
        </div>

        {/* Balance Level */}
        <div className="pt-3 border-t border-[#E7E2DA]/60 flex items-center justify-between">
          <span className="text-[#78716C] text-[11px]">Cân bằng cổ - kim:</span>
          <span className="font-mono font-medium text-[#1C1917]">
            {state.traditionBalance}/5
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-[#E7E2DA] text-[11px] text-[#78716C] bg-[#F7F4EE] p-3">
        💡 <strong>Gợi ý:</strong> Hệ thống sẽ sinh 3 bản phối để bạn dễ dàng so sánh tỷ lệ layer trang phục.
      </div>
    </aside>
  );
};
