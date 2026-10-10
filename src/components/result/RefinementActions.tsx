import React, { useState } from 'react';
import { Sparkles, Check, RefreshCw } from 'lucide-react';

interface RefinementActionsProps {
  onRefineAction: (actionKey: string, actionLabel: string) => void;
  onRegenerateFresh: () => void;
}

export const RefinementActions: React.FC<RefinementActionsProps> = ({
  onRefineAction,
  onRegenerateFresh,
}) => {
  const [activeFeedback, setActiveFeedback] = useState<string | null>(null);

  const actions = [
    { key: 'more_traditional', label: 'Cổ phong hơn' },
    { key: 'more_modern', label: 'Hiện đại hơn' },
    { key: 'change_color', label: 'Đổi tone màu' },
    { key: 'change_shoes', label: 'Đổi giày (Loafer ↔ Sneaker)' },
    { key: 'change_accessories', label: 'Tinh giản phụ kiện' },
    { key: 'more_minimal', label: 'Tối giản thanh lịch' },
    { key: 'more_edgy', label: 'Cá tính & Layering' },
  ];

  const handleActionClick = (key: string, label: string) => {
    setActiveFeedback(`Đã áp dụng: "${label}" cho bản phối hiện tại!`);
    onRefineAction(key, label);
    setTimeout(() => {
      setActiveFeedback(null);
    }, 3000);
  };

  return (
    <section id="refine-section" className="py-12 border-t border-[#E7E2DA]">
      <div className="bg-[#FAF8F5] border border-[#E7E2DA] p-6 sm:p-8 space-y-6">
        
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
            TINH CHỈNH CO-PILOT
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mt-1">
            Muốn tinh chỉnh set đồ này?
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] mt-1">
            Chọn một trong các hướng điều chỉnh nhanh bên dưới để AI tự động tối ưu hóa bản phối.
          </p>
        </div>

        {/* Action Buttons Grid */}
        <div className="flex flex-wrap gap-2.5">
          {actions.map((act) => (
            <button
              key={act.key}
              type="button"
              onClick={() => handleActionClick(act.key, act.label)}
              className="px-4 py-2 text-xs font-medium bg-white hover:bg-[#F3EFEA] text-[#1C1917] border border-[#D6CEBE] hover:border-[#1C1917] transition-colors active:scale-[0.98]"
            >
              + {act.label}
            </button>
          ))}
          
          <button
            type="button"
            onClick={onRegenerateFresh}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#9E2A2B] bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#9E2A2B] transition-colors flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Tạo bộ set hoàn toàn mới</span>
          </button>
        </div>

        {/* Active Feedback Banner */}
        {activeFeedback && (
          <div className="p-3 bg-[#E8F3EE] border border-[#C2E0D1] text-xs text-[#2D6A4F] flex items-center gap-2 font-medium">
            <Check className="w-4 h-4 stroke-[2.5]" />
            <span>{activeFeedback}</span>
          </div>
        )}

      </div>
    </section>
  );
};
