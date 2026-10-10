import React from 'react';
import { Sparkles, SlidersHorizontal, Layers, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onStartStyling: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartStyling }) => {
  const steps = [
    {
      step: '01',
      title: 'Chọn bối cảnh & dịp diện',
      description: 'Dạo phố cuối tuần, chụp kỷ yếu tốt nghiệp hay lễ hội truyền thống. AI định hình mức độ trang trọng tương ứng.',
      icon: Layers,
    },
    {
      step: '02',
      title: 'Cho AI biết tủ đồ & gu cá nhân',
      description: 'Nhập các món đồ bạn đang có (quần tây, sneaker, loafer) hoặc tải ảnh lên. Chọn phong cách bạn muốn hướng tới.',
      icon: Sparkles,
    },
    {
      step: '03',
      title: 'Nhận 2–3 bản phối hoàn chỉnh',
      description: 'Xem moodboard thời trang trực quan, bảng màu (palette), danh mục đồ có sẵn vs đồ cần chuẩn bị, cùng văn hóa chuẩn xác.',
      icon: CheckCircle2,
    },
    {
      step: '04',
      title: 'Tinh chỉnh & Khám phá nơi may/thuê',
      description: 'Dễ dàng đổi sắc thái (truyền thống hơn, hiện đại hơn, đổi giày) và xem ngay các địa chỉ uy tín để chuẩn bị trang phục.',
      icon: SlidersHorizontal,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 border-t border-[#E7E2DA] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
              QUY TRÌNH PHỐI ĐỒ
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mt-2">
              4 bước để sở hữu bản phối di sản mang hơi thở hiện đại.
            </h2>
          </div>
          <button
            onClick={onStartStyling}
            className="text-xs font-semibold uppercase tracking-wider text-[#9E2A2B] hover:text-[#832223] underline underline-offset-4 decoration-1 whitespace-nowrap self-start md:self-auto"
          >
            Trải nghiệm ngay trong Studio →
          </button>
        </div>

        {/* Step Grid with connected rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#FAF8F5] border border-[#E7E2DA] p-6 flex flex-col justify-between hover:border-[#D6CEBE] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-editorial text-2xl font-light text-[#9E2A2B]">
                      {item.step}
                    </span>
                    <Icon className="w-4 h-4 text-[#78716C]" />
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#1C1917] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
