import React from 'react';
import { Check } from 'lucide-react';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}

export const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  totalSteps,
  onStepClick,
}) => {
  const stepTitles = [
    '01. Bối cảnh',
    '02. Việt phục',
    '03. Gu thẩm mỹ',
    '04. Tủ đồ của bạn',
    '05. Tùy chọn',
  ];

  return (
    <div className="border-b border-[#E7E2DA] bg-[#F7F4EE]/50 py-3 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Styling Steps" className="flex items-center justify-between overflow-x-auto scrollbar-none gap-2">
          {stepTitles.map((title, idx) => {
            const stepNum = idx + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;

            return (
              <button
                key={title}
                onClick={() => onStepClick(stepNum)}
                className={`flex items-center gap-2 py-2 px-3 text-xs whitespace-nowrap transition-all border-b-2 -mb-[13px] ${
                  isCurrent
                    ? 'border-[#9E2A2B] text-[#1C1917] font-semibold'
                    : isCompleted
                    ? 'border-transparent text-[#78716C] hover:text-[#1C1917]'
                    : 'border-transparent text-[#A8A29E] hover:text-[#78716C]'
                }`}
              >
                <span
                  className={`w-5 h-5 flex items-center justify-center text-[10px] rounded-full font-mono ${
                    isCurrent
                      ? 'bg-[#9E2A2B] text-white'
                      : isCompleted
                      ? 'bg-[#E7E2DA] text-[#1C1917]'
                      : 'bg-[#EDE8E0] text-[#78716C]'
                  }`}
                >
                  {isCompleted ? <Check className="w-3 h-3 stroke-[2.5]" /> : stepNum}
                </span>
                <span>{title}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
