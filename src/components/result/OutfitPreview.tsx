import React, { useState } from 'react';
import { OutfitLook } from '../../types';
import { ItemBoard } from './ItemBoard';
import { Layers, Image as ImageIcon } from 'lucide-react';

interface OutfitPreviewProps {
  look: OutfitLook;
}

export type PreviewMode = 'item_board' | 'generated_mockup' | 'aligned_mockup';

export const OutfitPreview: React.FC<OutfitPreviewProps> = ({ look }) => {
  const [previewMode, setPreviewMode] = useState<PreviewMode>('item_board');

  return (
    <div className="space-y-3">
      {/* View Mode Segmented Controls (Prepared for future phases, active mode item_board) */}
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold uppercase tracking-wider text-[#1C1917]">
          Chế độ hiển thị:
        </span>
        
        <div className="flex items-center gap-1 p-0.5 bg-[#F3EFEA] border border-[#E7E2DA]">
          <button
            type="button"
            onClick={() => setPreviewMode('item_board')}
            className={`px-3 py-1 text-[11px] font-medium transition-colors flex items-center gap-1.5 ${
              previewMode === 'item_board'
                ? 'bg-white text-[#1C1917] shadow-2xs font-semibold'
                : 'text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Editorial Board (Chuẩn)</span>
          </button>

          <button
            type="button"
            onClick={() => setPreviewMode('generated_mockup')}
            className={`px-3 py-1 text-[11px] font-medium transition-colors flex items-center gap-1.5 ${
              previewMode === 'generated_mockup'
                ? 'bg-white text-[#1C1917] shadow-2xs font-semibold'
                : 'text-[#A8A29E] hover:text-[#78716C]'
            }`}
            title="Sẽ mở trong Phase tiếp theo khi kết nối model"
          >
            <ImageIcon className="w-3 h-3" />
            <span>Concept Visualization</span>
          </button>
        </div>
      </div>

      {/* Main Board Container */}
      {previewMode === 'item_board' ? (
        <ItemBoard look={look} />
      ) : (
        <div className="bg-[#FAF8F5] border border-[#E7E2DA] p-12 text-center space-y-4">
          <div className="w-12 h-12 mx-auto bg-[#F3EFEA] border border-[#E7E2DA] flex items-center justify-center text-[#78716C]">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-editorial text-lg font-bold text-[#1C1917]">
              Mô phỏng phối cảnh AI (Phase 2 Preview)
            </h4>
            <p className="text-xs text-[#57534E] max-w-md mx-auto mt-1">
              Chế độ render ảnh tổng thể người mặc đang trong lộ trình phát triển. Hiện tại, bản phối chuẩn kết cấu được hiển thị trên Item Board.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPreviewMode('item_board')}
            className="text-xs font-semibold uppercase tracking-wider text-[#9E2A2B] hover:underline"
          >
            ← Quay lại Editorial Board
          </button>
        </div>
      )}
    </div>
  );
};
