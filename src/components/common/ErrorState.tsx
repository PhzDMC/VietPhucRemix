import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Có lỗi xảy ra trong quá trình xử lý',
  message = 'Không thể đồng bộ các tham số thẩm mỹ. Vui lòng thử lại.',
  onRetry,
}) => {
  return (
    <div className="py-20 px-4 text-center max-w-md mx-auto space-y-4">
      <div className="w-12 h-12 mx-auto bg-[#F7EBEB] border border-[#F4C7C7] flex items-center justify-center text-[#9E2A2B]">
        <AlertCircle className="w-5 h-5" />
      </div>
      <h3 className="font-editorial text-2xl font-bold text-[#1C1917]">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
        {message}
      </p>
      {onRetry && (
        <div className="pt-2">
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#FAF8F5] border border-[#D6CEBE] hover:bg-[#F3EFEA] transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Thử lại</span>
          </button>
        </div>
      )}
    </div>
  );
};
