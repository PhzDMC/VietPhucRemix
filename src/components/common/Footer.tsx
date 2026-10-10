import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3EFEA] border-t border-[#E7E2DA] mt-24 py-12 text-[#57534E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-[#E7E2DA]/60">
          <div>
            <div className="font-editorial text-2xl font-bold tracking-tight text-[#1C1917]">
              CỔ NHÂN <span className="text-[#9E2A2B] font-light italic">Stylist</span>
            </div>
            <p className="text-xs text-[#78716C] mt-1 max-w-md">
              AI Fashion Consultant & Co-pilot tôn vinh trang phục truyền thống Việt Nam trong dòng chảy thời trang đương đại.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-[#78716C]">
            <span>Triết lý: Bản sắc & Tinh giản</span>
            <span aria-hidden="true">·</span>
            <span>Nguồn tư liệu đã kiểm chứng</span>
            <span aria-hidden="true">·</span>
            <span>Gen Z Fashion Co-pilot</span>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#A8A29E]">
          <div>
            © {new Date().getFullYear()} Cổ Nhân Stylist. Thiết kế phục vụ nghiên cứu & trình diễn phong cách.
          </div>
          <div className="text-[11px] text-[#78716C]">
            Cam kết tôn trọng quy chuẩn văn hóa & kết cấu y phục truyền thống Việt Nam.
          </div>
        </div>
      </div>
    </footer>
  );
};
