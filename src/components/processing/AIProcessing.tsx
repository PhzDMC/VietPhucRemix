import React, { useState, useEffect } from 'react';
import { Sparkles, Check } from 'lucide-react';

interface AIProcessingProps {
  onComplete: () => void;
}

export const AIProcessing: React.FC<AIProcessingProps> = ({ onComplete }) => {
  const steps = [
    'Đang hiểu phong cách của bạn...',
    'Đang chọn Việt phục phù hợp...',
    'Đang phối cùng những món bạn có...',
    'Đang kiểm tra yếu tố văn hóa...',
    'Đang hoàn thiện 3 bản phối...',
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const stepDuration = 550; // total ~2.75s
    const timer = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 450);
          return prev;
        }
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, [onComplete, steps.length]);

  const progressPercent = Math.min(100, Math.round(((currentStepIndex + 1) / steps.length) * 100));

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-[#FAF8F5] border border-[#E7E2DA] p-8 sm:p-10 shadow-sm space-y-8">
        
        {/* Editorial Top Lockup */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto bg-[#F3EFEA] border border-[#E7E2DA] flex items-center justify-center text-[#9E2A2B]">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold block pt-2">
            AI FASHION CO-PILOT
          </span>
          <h2 className="font-editorial text-2xl font-bold tracking-tight text-[#1C1917]">
            Đang khởi tạo bản phối di sản
          </h2>
          <p className="text-xs text-[#78716C]">
            Kiểm tra đối chiếu quy chuẩn trang phục & tối ưu tủ đồ hiện đại
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="h-1.5 w-full bg-[#E7E2DA] overflow-hidden">
            <div
              className="h-full bg-[#9E2A2B] transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono text-[#78716C]">
            <span>Xử lý dữ liệu thẩm mỹ</span>
            <span className="text-[#1C1917] font-semibold">{progressPercent}%</span>
          </div>
        </div>

        {/* Sequential Step List */}
        <div className="space-y-3 pt-2">
          {steps.map((text, idx) => {
            const isDone = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;
            const isPending = idx > currentStepIndex;

            return (
              <div
                key={text}
                className={`flex items-center gap-3 text-xs transition-opacity duration-300 ${
                  isCurrent
                    ? 'text-[#1C1917] font-medium'
                    : isDone
                    ? 'text-[#78716C]'
                    : 'text-[#C5BEB3] opacity-40'
                }`}
              >
                <div
                  className={`w-4 h-4 flex items-center justify-center border text-[9px] font-mono ${
                    isDone
                      ? 'bg-[#9E2A2B] border-[#9E2A2B] text-white'
                      : isCurrent
                      ? 'border-[#9E2A2B] text-[#9E2A2B] animate-pulse'
                      : 'border-[#D6CEBE]'
                  }`}
                >
                  {isDone ? <Check className="w-2.5 h-2.5 stroke-[2.5]" /> : idx + 1}
                </div>
                <span>{text}</span>
              </div>
            );
          })}
        </div>

        {/* Quiet Cultural Assurance Footnote */}
        <div className="pt-4 border-t border-[#E7E2DA] text-center text-[11px] text-[#A8A29E] italic font-serif">
          "Giữ gìn hồn cốt xưa trong nhịp sống nay."
        </div>

      </div>
    </div>
  );
};
