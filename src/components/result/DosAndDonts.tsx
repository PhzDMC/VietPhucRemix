import React from 'react';
import { Check, X } from 'lucide-react';

interface DosAndDontsProps {
  dos: string[];
  donts: string[];
}

export const DosAndDonts: React.FC<DosAndDontsProps> = ({ dos, donts }) => {
  return (
    <section className="py-12 border-t border-[#E7E2DA]">
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
          QUY TẮC MẶC ĐỒ
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mt-1">
          Dos & Don'ts: Giữ Chuẩn Di Sản
        </h3>
        <p className="text-xs sm:text-sm text-[#57534E] mt-1">
          Những lưu ý cốt lõi để phối đồ hiện đại mà vẫn giữ sự tôn kính chuẩn mực y phục dân tộc.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* DO Column */}
        <div className="bg-[#FAF8F5] border border-[#C2E0D1] p-6 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#C2E0D1] text-[#2D6A4F]">
            <div className="w-5 h-5 bg-[#E8F3EE] flex items-center justify-center">
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <h4 className="font-editorial text-lg font-bold tracking-tight">
              NÊN (DOS)
            </h4>
          </div>

          <ul className="space-y-3 text-xs text-[#2F3E37]">
            {dos.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#2D6A4F] font-bold mt-0.5">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DON'T Column */}
        <div className="bg-[#FAF8F5] border border-[#F4C7C7] p-6 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#F4C7C7] text-[#9E2A2B]">
            <div className="w-5 h-5 bg-[#F7EBEB] flex items-center justify-center">
              <X className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <h4 className="font-editorial text-lg font-bold tracking-tight">
              TRÁNH (DON'TS)
            </h4>
          </div>

          <ul className="space-y-3 text-xs text-[#4F2D2D]">
            {donts.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#9E2A2B] font-bold mt-0.5">✕</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
