import React from 'react';
import { OutfitLook } from '../../types';

interface LookSwitcherProps {
  looks: OutfitLook[];
  activeLookId: string;
  onSelectLook: (id: string) => void;
}

export const LookSwitcher: React.FC<LookSwitcherProps> = ({
  looks,
  activeLookId,
  onSelectLook,
}) => {
  return (
    <div className="flex items-center gap-2 border-b border-[#E7E2DA] pb-4 mb-6 overflow-x-auto scrollbar-none">
      <span className="text-[11px] font-mono uppercase text-[#78716C] mr-2 shrink-0">
        Bản phối gợi ý:
      </span>
      {looks.map((look) => {
        const isActive = look.id === activeLookId;
        return (
          <button
            key={look.id}
            onClick={() => onSelectLook(look.id)}
            className={`px-4 py-2 text-xs transition-all whitespace-nowrap border flex items-center gap-2 ${
              isActive
                ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-sm font-semibold'
                : 'bg-[#FAF8F5] text-[#57534E] border-[#E7E2DA] hover:border-[#D6CEBE] hover:text-[#1C1917]'
            }`}
          >
            <span className={`font-mono text-[10px] ${isActive ? 'text-[#D4A373]' : 'text-[#78716C]'}`}>
              LOOK {look.lookNumber}
            </span>
            <span aria-hidden="true">·</span>
            <span>{look.title}</span>
          </button>
        );
      })}
    </div>
  );
};
