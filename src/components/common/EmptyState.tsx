import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'Chưa có bản phối nào',
  description = 'Hãy nhập món đồ có trong tủ và chọn phong cách để AI tạo bản phối cho bạn.',
  actionText = 'Vào Styling Studio',
  onAction,
}) => {
  return (
    <div className="py-20 px-4 text-center max-w-md mx-auto space-y-4">
      <div className="w-12 h-12 mx-auto bg-[#F3EFEA] border border-[#E7E2DA] flex items-center justify-center text-[#78716C]">
        <Sparkles className="w-5 h-5 text-[#9E2A2B]" />
      </div>
      <h3 className="font-editorial text-2xl font-bold text-[#1C1917]">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
        {description}
      </p>
      {onAction && (
        <div className="pt-2">
          <button
            onClick={onAction}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#9E2A2B] hover:bg-[#832223] transition-colors"
          >
            <span>{actionText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
