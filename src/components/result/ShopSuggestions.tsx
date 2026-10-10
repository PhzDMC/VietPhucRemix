import React, { useState } from 'react';
import { ShopSuggestionItem } from '../../types';
import { ArrowUpRight, Check, MapPin, Tag } from 'lucide-react';

interface ShopSuggestionsProps {
  suggestions: ShopSuggestionItem[];
}

export const ShopSuggestions: React.FC<ShopSuggestionsProps> = ({ suggestions }) => {
  const [contactedShopId, setContactedShopId] = useState<string | null>(null);

  const handleContact = (id: string) => {
    setContactedShopId(id);
    setTimeout(() => {
      setContactedShopId(null);
    }, 2500);
  };

  return (
    <section id="shop-suggestions" className="py-12 border-t border-[#E7E2DA]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
            ĐỊA CHỈ THAM KHẢO
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mt-1">
            Nơi Bạn Có Thể Tìm Thấy Set Này
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] mt-1">
            Mạng lưới đối tác nghiên cứu & xưởng may cổ phục chuẩn mực cho thuê hoặc đặt may riêng.
          </p>
        </div>
        <div className="text-[11px] font-mono text-[#78716C]">
          * Danh sách xưởng đối tác mẫu phục vụ PoC
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {suggestions.map((shop) => {
          const isContacted = contactedShopId === shop.id;
          return (
            <div
              key={shop.id}
              className="bg-[#FAF8F5] border border-[#E7E2DA] p-6 flex flex-col justify-between hover:border-[#D6CEBE] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E7E2DA]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E2A2B] bg-[#F3EFEA] px-2 py-0.5 border border-[#E7E2DA]">
                    {shop.serviceType}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[#78716C]">
                    <MapPin className="w-3 h-3" />
                    <span>{shop.region}</span>
                  </span>
                </div>

                <h4 className="font-editorial text-xl font-bold text-[#1C1917]">
                  {shop.name}
                </h4>

                <div className="flex items-center gap-1.5 text-xs text-[#1C1917] font-mono mt-2 font-medium">
                  <Tag className="w-3.5 h-3.5 text-[#9E2A2B]" />
                  <span>{shop.priceRange}</span>
                </div>

                <p className="text-xs text-[#57534E] mt-3 leading-relaxed">
                  {shop.note}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7E2DA]">
                <button
                  type="button"
                  onClick={() => handleContact(shop.id)}
                  className={`w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    isContacted
                      ? 'bg-[#2D6A4F] text-white'
                      : 'bg-[#1C1917] hover:bg-[#38332E] text-white'
                  }`}
                >
                  {isContacted ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Đã lưu thông tin tiệm</span>
                    </>
                  ) : (
                    <>
                      <span>Xem lịch thuê / Đặt may</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
