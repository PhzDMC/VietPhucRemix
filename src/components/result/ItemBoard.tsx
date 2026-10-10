import React from 'react';
import { OutfitLook } from '../../types';

interface ItemBoardProps {
  look: OutfitLook;
}

export const ItemBoard: React.FC<ItemBoardProps> = ({ look }) => {
  return (
    <div className="relative bg-[#FAF8F5] border border-[#E7E2DA] p-4 sm:p-6 shadow-sm overflow-hidden">
      
      {/* Top Editorial Meta Bar on Board */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E7E2DA] text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#9E2A2B] font-semibold">
            STYLING FLAT-LAY PLATE
          </span>
          <span className="text-[#A8A29E]" aria-hidden="true">/</span>
          <span className="font-mono text-[11px] text-[#78716C]">
            LOOK {look.lookNumber}
          </span>
        </div>
        
        {/* Color Palette Chips */}
        <div className="flex items-center gap-1.5" title="Bảng màu trang phục">
          <span className="text-[10px] font-mono text-[#78716C] mr-1 hidden sm:inline">Palette:</span>
          {look.palette.map((p) => (
            <span
              key={p.name}
              className="w-3.5 h-3.5 rounded-none border border-black/15 shadow-2xs inline-block"
              style={{ backgroundColor: p.hex }}
              title={`${p.name} (${p.hex})`}
            />
          ))}
        </div>
      </div>

      {/* Editorial Composition: Asymmetrical Visual Focus */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-[#EDE8E0] overflow-hidden border border-[#E7E2DA]">
        {/* Main Flat-lay Board Photo */}
        <img
          src={look.editorialBoardImage}
          alt={`Item board phối đồ cho ${look.title}`}
          className="w-full h-full object-cover object-center filter contrast-[1.02]"
          referrerPolicy="no-referrer"
        />

        {/* Subtle Scrim at Bottom for Editorial Legend */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 sm:p-5 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-white/70">
              TRỌNG TÂM DI SẢN
            </div>
            <div className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-white">
              {look.focalGarment}
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-white/90">
            <span className="text-[11px] font-mono bg-white/20 backdrop-blur-xs px-2.5 py-1 border border-white/20">
              {look.styleName}
            </span>
            <span className="text-[11px] font-mono bg-white/20 backdrop-blur-xs px-2.5 py-1 border border-white/20">
              {look.occasionName}
            </span>
          </div>
        </div>
      </div>

      {/* Discrete Item Pin Badges below visual board */}
      <div className="mt-4 pt-3 border-t border-[#E7E2DA] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        {look.items.map((item, idx) => {
          const isOwned = item.source === 'owned';
          return (
            <div key={item.id} className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-[#9E2A2B]">0{idx + 1}</span>
                <span className="text-[10px] font-mono uppercase text-[#78716C] truncate">
                  {item.category}
                </span>
              </div>
              <div className="font-medium text-[#1C1917] text-xs line-clamp-1">
                {item.name}
              </div>
              <div className="text-[10px] text-[#78716C]">
                {isOwned ? (
                  <span className="text-[#2D6A4F] font-medium">✓ Đồ sẵn có</span>
                ) : (
                  <span className="text-[#9E2A2B] font-medium">• Cần chuẩn bị</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
