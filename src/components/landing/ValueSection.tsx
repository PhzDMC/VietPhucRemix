import React from 'react';

export const ValueSection: React.FC = () => {
  return (
    <section className="py-20 border-t border-[#E7E2DA] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
            TRIẾT LÝ PHỐI ĐỒ
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mt-2">
            Đưa di sản vào tủ đồ thường nhật, không tạo rào cản.
          </h2>
        </div>

        {/* 3 Asymmetrical Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Block 1 (5 cols) */}
          <div className="md:col-span-5 bg-[#F3EFEA] border border-[#E7E2DA] p-8 flex flex-col justify-between">
            <div>
              <div className="font-editorial text-4xl text-[#9E2A2B]/40 font-light mb-4">
                01
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#1C1917] tracking-tight">
                Phối theo gu của bạn
              </h3>
              <p className="text-sm text-[#57534E] mt-3 leading-relaxed">
                Không áp đặt một phong cách duy nhất. Bạn thích năng động cùng sneaker hay thanh nhã cùng loafer da, AI sẽ điều phối tỷ lệ để set đồ vừa tôn bạn, vừa hòa quyện tự nhiên.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#E7E2DA]/80 text-xs text-[#78716C] font-mono">
              3 Phong cách chủ đạo: Urban Casual / Neo-Classic / Artistic
            </div>
          </div>

          {/* Block 2 (7 cols) */}
          <div className="md:col-span-7 bg-[#FAF8F5] border border-[#E7E2DA] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-editorial text-4xl text-[#9E2A2B]/40 font-light mb-4">
                02
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight">
                Tận dụng món đồ bạn đã có sẵn
              </h3>
              <p className="text-sm sm:text-base text-[#57534E] mt-3 leading-relaxed">
                Bạn không cần mua sắm cả bộ đồ mới tốn kém. Tủ đồ của bạn vốn đã có quần âu, sneaker trắng, áo sơ mi hay blazer. Cổ Nhân Stylist biến chúng thành lớp nền hiện đại hoàn hảo cho tà áo ngũ thân hay giao lĩnh.
              </p>
            </div>
            
            {/* Visual breakdown ticker */}
            <div className="mt-8 pt-6 border-t border-[#E7E2DA] grid grid-cols-3 gap-4 text-xs">
              <div>
                <span className="font-semibold text-[#1C1917] block">Tiết kiệm chi phí</span>
                <span className="text-[#78716C]">Tối đa hóa tủ đồ sẵn có</span>
              </div>
              <div>
                <span className="font-semibold text-[#1C1917] block">Dễ ứng dụng</span>
                <span className="text-[#78716C]">Không cảm giác hóa trang</span>
              </div>
              <div>
                <span className="font-semibold text-[#1C1917] block">Tự tin diện phố</span>
                <span className="text-[#78716C]">Linh hoạt mọi không gian</span>
              </div>
            </div>
          </div>

          {/* Block 3: Full Width Span (12 cols) */}
          <div className="md:col-span-12 bg-[#F6F3EE] border border-[#E7E2DA] p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <div className="font-editorial text-4xl text-[#9E2A2B]/40 font-light mb-2">
                  03
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight">
                  Tôn trọng bản sắc & kết cấu nguyên bản
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                  Chúng tôi phân định rạch ròi giữa <strong className="text-[#1C1917] font-semibold">thời trang đương đại</strong> và <strong className="text-[#1C1917] font-semibold">kết cấu di sản</strong>. Áo ngũ thân phải đủ 5 thân và cài khuy đúng chiều; Giao lĩnh phải chuẩn vạt trái đè vạt phải. Mọi đề xuất đều tuân thủ Dos & Don’ts chuẩn xác, không tùy tiện biến dạng lịch sử.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-[#78716C]">
                  <span>✓ Cấu trúc 5 thân lập lĩnh chuẩn mực</span>
                  <span>✓ Quy tắc tả nhậm / hữu nhậm chuẩn hóa</span>
                  <span>✓ Không lai căng phản cảm</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
