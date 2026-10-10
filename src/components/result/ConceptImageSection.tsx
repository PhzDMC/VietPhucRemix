import React from 'react';
import { OutfitLook } from '../../types';
import { Info, Sparkles } from 'lucide-react';

interface ConceptImageSectionProps {
  look: OutfitLook;
}

export const ConceptImageSection: React.FC<ConceptImageSectionProps> = ({ look }) => {
  return (
    <section className="py-12 border-t border-[#E7E2DA]">
      <div className="bg-[#FAF8F5] border border-[#E7E2DA] p-6 sm:p-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#E7E2DA] gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
                KHÔNG GIAN Ý NIỆM (CONCEPT)
              </span>
              <span className="text-[#A8A29E]" aria-hidden="true">·</span>
              <span className="text-xs text-[#78716C]">Phase 2 Preview</span>
            </div>
            <h3 className="font-editorial text-2xl font-bold tracking-tight text-[#1C1917] mt-1">
              Ảnh Concept Minh Họa Phong Cách
            </h3>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#78716C] font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>AI Style Simulation</span>
          </div>
        </div>

        {/* Visual Box with strict cultural disclosure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-5 aspect-[4/3] bg-[#EFEBE4] border border-[#E7E2DA] flex items-center justify-center p-6 text-center">
            <div className="space-y-2">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#E7E2DA] flex items-center justify-center text-[#78716C] font-editorial text-base">
                AI
              </div>
              <div className="text-xs font-semibold text-[#1C1917]">
                Visual Concept Board
              </div>
              <div className="text-[11px] text-[#78716C] max-w-xs mx-auto">
                {look.conceptImageCaption}
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <div className="p-4 bg-[#F7F4EE] border border-[#E7E2DA] flex items-start gap-3 text-xs text-[#57534E]">
              <Info className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1917] block font-semibold mb-1">
                  Khuyến cáo quan trọng về tính chuẩn xác:
                </strong>
                <p className="leading-relaxed">
                  Ảnh AI chỉ mang tính minh họa cảm hứng phong cách thời trang, không phải nguồn chuẩn cấu trúc Việt phục. Nguồn chuẩn xác tuyệt đối của cấu trúc áo là <strong>Item Board & Hồ sơ nghiên cứu di sản</strong> bên trên.
                </p>
              </div>
            </div>

            <p className="text-xs text-[#78716C] leading-relaxed">
              Trong các bản cập nhật tới, người dùng có thể kích hoạt chế độ dựng hình ảnh người mặc thực tế dựa trên thông số chiều cao và màu da, song song với việc bảo toàn nguyên tắc kết cấu lịch sử.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
