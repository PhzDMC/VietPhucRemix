import React from 'react';
import { OutfitLook } from '../../types';
import { Sparkles, Check, ShoppingBag } from 'lucide-react';

interface OutfitBreakdownProps {
  look: OutfitLook;
}

export const OutfitBreakdown: React.FC<OutfitBreakdownProps> = ({ look }) => {
  return (
    <section className="py-12 border-t border-[#E7E2DA]">
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
          CHI TIẾT SET ĐỒ
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mt-1">
          Bóc Tách Từng Món Trong Bản Phối
        </h3>
        <p className="text-xs sm:text-sm text-[#57534E] mt-1">
          Phân định rõ món đồ bạn đã sở hữu và món đồ cần chuẩn bị thêm để hoàn thiện diện mạo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {look.items.map((item, idx) => {
          const isOwned = item.source === 'owned';
          return (
            <div
              key={item.id}
              className={`p-5 border transition-all flex flex-col justify-between ${
                isOwned
                  ? 'bg-[#FAF8F5] border-[#E7E2DA]'
                  : 'bg-[#FDFBF8] border-[#D4A373]/60 ring-1 ring-[#D4A373]/30'
              }`}
            >
              <div>
                {/* Visual Category Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E7E2DA]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C]">
                    ITEM 0{idx + 1} · {item.category}
                  </span>
                  {isOwned ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#2D6A4F] bg-[#E8F3EE] px-2 py-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>Đồ có sẵn</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#9E2A2B] bg-[#F7EBEB] px-2 py-0.5">
                      <ShoppingBag className="w-3 h-3" />
                      <span>Cần chuẩn bị</span>
                    </span>
                  )}
                </div>

                {/* Item Placeholder Visual Plate */}
                <div className="aspect-[4/3] bg-[#EFEBE4] mb-3 border border-[#E7E2DA] flex items-center justify-center p-3 text-center">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A8A29E] block">
                      {item.materialOrBrand || 'Fashion Element'}
                    </span>
                    <span className="font-editorial text-sm font-semibold text-[#1C1917] line-clamp-2">
                      {item.name}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h4 className="font-editorial text-base font-bold text-[#1C1917] leading-snug">
                  {item.name}
                </h4>

                {/* Short Styling Note */}
                <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
                  {item.note}
                </p>
              </div>

              {/* Material or Source Tag */}
              <div className="mt-4 pt-3 border-t border-[#E7E2DA] text-[11px] font-mono text-[#78716C]">
                {item.materialOrBrand}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
