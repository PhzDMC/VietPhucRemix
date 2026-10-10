import React from 'react';
import { CulturalData } from '../../types';
import { ShieldCheck, AlertCircle } from 'lucide-react';

interface CulturalContextProps {
  culturalData: CulturalData;
}

export const CulturalContext: React.FC<CulturalContextProps> = ({ culturalData }) => {
  const isVerified = culturalData.verifiedStatus === 'verified';

  return (
    <section className="py-12 border-t border-[#E7E2DA]">
      <div className="bg-[#FAF8F5] border border-[#E7E2DA] p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#E7E2DA] gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
                TƯ LIỆU VĂN HÓA DI SẢN
              </span>
              <span className="text-[#A8A29E]" aria-hidden="true">·</span>
              <span className="text-xs text-[#78716C] font-mono">
                {culturalData.era}
              </span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mt-1">
              {culturalData.garmentName}
            </h3>
          </div>

          <div>
            {isVerified ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8F3EE] border border-[#C2E0D1] text-[#2D6A4F] text-xs font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Dữ liệu lịch sử đã kiểm chứng</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] text-xs font-medium">
                <AlertCircle className="w-4 h-4" />
                <span>Dữ liệu văn hóa đang chờ kiểm chứng</span>
              </span>
            )}
          </div>
        </div>

        {/* Structured 4-Quadrant Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
          
          {/* Origin & Era */}
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block">
                XUẤT XỨ & LỊCH SỬ HÌNH THÀNH:
              </span>
              <p className="text-xs text-[#1C1917] mt-1 leading-relaxed font-normal">
                {culturalData.origin}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block">
                Ý NGHĨA TRANG PHỤC:
              </span>
              <p className="text-xs text-[#1C1917] mt-1 leading-relaxed font-normal">
                {culturalData.significance}
              </p>
            </div>
          </div>

          {/* Key Characteristics Checklist */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block mb-2">
              ĐẶC ĐIỂM NHẬN DIỆN KẾT CẤU GỐC:
            </span>
            <ul className="space-y-2 text-xs text-[#57534E]">
              {culturalData.keyFeatures.map((feat, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#9E2A2B] font-mono text-[11px] mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="mt-8 pt-4 border-t border-[#E7E2DA] flex items-center justify-between text-[11px] text-[#78716C]">
          <span>{culturalData.disclaimer}</span>
          <span className="font-mono text-[10px] text-[#A8A29E] hidden sm:inline">
            CỔ NHÂN STYLIST VERIFIED PROTOCOL
          </span>
        </div>

      </div>
    </section>
  );
};
