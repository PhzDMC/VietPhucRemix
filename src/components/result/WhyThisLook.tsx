import React from 'react';
import { OutfitLook } from '../../types';

interface WhyThisLookProps {
  look: OutfitLook;
}

export const WhyThisLook: React.FC<WhyThisLookProps> = ({ look }) => {
  return (
    <section className="py-12 border-t border-[#E7E2DA] bg-[#F7F4EE]/60 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
            LÝ DO LỰA CHỌN
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mt-1">
            Vì sao set này hợp với bạn?
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] mt-1">
            Phân tích logic styling từ góc nhìn bối cảnh, gu thẩm mỹ và tính khả thi tủ đồ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Reason 1: Occasion */}
          <div className="bg-[#FAF8F5] border border-[#E7E2DA] p-6 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#9E2A2B] font-semibold">
              01. BỐI CẢNH SỰ KIỆN
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#1C1917]">
              Chuẩn bối cảnh: {look.occasionName}
            </h4>
            <p className="text-xs text-[#57534E] leading-relaxed">
              {look.whyThisLook.occasionFit}
            </p>
          </div>

          {/* Reason 2: Style */}
          <div className="bg-[#FAF8F5] border border-[#E7E2DA] p-6 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#9E2A2B] font-semibold">
              02. ĐÚNG GU THẨM MỸ
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#1C1917]">
              Tinh thần: {look.styleName}
            </h4>
            <p className="text-xs text-[#57534E] leading-relaxed">
              {look.whyThisLook.styleFit}
            </p>
          </div>

          {/* Reason 3: Wardrobe */}
          <div className="bg-[#FAF8F5] border border-[#E7E2DA] p-6 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#9E2A2B] font-semibold">
              03. KHẢ THI TỦ ĐỒ
            </div>
            <h4 className="font-editorial text-lg font-bold text-[#1C1917]">
              Tối ưu món đồ có sẵn
            </h4>
            <p className="text-xs text-[#57534E] leading-relaxed">
              {look.whyThisLook.wardrobeFit}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
