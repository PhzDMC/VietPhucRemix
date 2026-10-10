import React, { useState } from 'react';
import { Mic, Upload, Plus, X, Sparkles, Check, Image as ImageIcon } from 'lucide-react';
import { WardrobeUserItem } from '../../types';

interface WardrobeInputProps {
  wardrobeText: string;
  onTextChange: (val: string) => void;
  wardrobeItems: WardrobeUserItem[];
  onAddItem: (name: string, category: WardrobeUserItem['category']) => void;
  onRemoveItem: (id: string) => void;
}

export const WardrobeInput: React.FC<WardrobeInputProps> = ({
  wardrobeText,
  onTextChange,
  wardrobeItems,
  onAddItem,
  onRemoveItem,
}) => {
  const [customItemInput, setCustomItemInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [voiceToast, setVoiceToast] = useState('');
  const [uploadMockState, setUploadMockState] = useState<'idle' | 'uploaded'>('idle');

  const popularWardrobePieces = [
    { name: 'Sneaker trắng tối giản', cat: 'footwear' as const },
    { name: 'Quần tây âu xếp ly', cat: 'bottom' as const },
    { name: 'Penny Loafer da đen', cat: 'footwear' as const },
    { name: 'Áo sơ mi trắng cổ đức', cat: 'top' as const },
    { name: 'Bốt da cổ lửng', cat: 'footwear' as const },
    { name: 'Quần jeans raw denim', cat: 'bottom' as const },
    { name: 'Blazer dáng suông', cat: 'outerwear' as const },
    { name: 'Túi tote vải mộc', cat: 'accessory' as const },
  ];

  const handleVoiceToggle = () => {
    if (!isRecording) {
      setIsRecording(true);
      setVoiceToast('Đang nhận diện giọng nói: "Mình có quần tây xám và sneaker trắng"...');
      setTimeout(() => {
        setIsRecording(false);
        onTextChange(
          wardrobeText
            ? `${wardrobeText}, mình có thêm quần tây xám và đôi sneaker trắng`
            : 'Mình đang có sẵn một chiếc quần tây âu màu than chì và đôi sneaker da trắng minimalist.'
        );
        onAddItem('Quần tây âu màu than chì', 'bottom');
        onAddItem('Sneaker da trắng minimalist', 'footwear');
        setVoiceToast('Đã trích xuất xong từ giọng nói!');
        setTimeout(() => setVoiceToast(''), 3000);
      }, 2000);
    } else {
      setIsRecording(false);
      setVoiceToast('');
    }
  };

  const handleMockUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadMockState('uploaded');
      onAddItem('Quần âu xếp ly màu kem (từ ảnh)', 'bottom');
      onAddItem('Giày Loafer da (từ ảnh)', 'footwear');
    }
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (customItemInput.trim()) {
      onAddItem(customItemInput.trim(), 'bottom');
      setCustomItemInput('');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E2A2B] font-semibold">
          BƯỚC 4 / 5
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mt-1">
          Bạn đang có những món đồ nào trong tủ?
        </h2>
        <p className="text-sm text-[#57534E] mt-1">
          Nhập bằng văn bản, chọn nhanh hoặc tải ảnh. AI sẽ thiết kế bản phối tận dụng tối đa tủ đồ sẵn có của bạn.
        </p>
      </div>

      {/* Main Text Input & Voice Bar */}
      <div className="space-y-2">
        <label htmlFor="wardrobe-description" className="block text-xs font-semibold uppercase tracking-wider text-[#78716C]">
          Mô tả món đồ bạn muốn mang vào bản phối:
        </label>
        <div className="relative">
          <textarea
            id="wardrobe-description"
            rows={3}
            value={wardrobeText}
            onChange={(e) => onTextChange(e.target.value)}
            placeholder="Ví dụ: Mình có sẵn sneaker trắng minimalist, một chiếc quần tây âu xếp ly ống suông và túi đeo chéo da..."
            className="w-full bg-[#FAF8F5] border border-[#E7E2DA] focus:border-[#9E2A2B] focus:ring-1 focus:ring-[#9E2A2B] p-4 text-sm text-[#1C1917] placeholder:text-[#A8A29E] transition-colors resize-none focus:outline-none"
          />

          <div className="absolute right-3 bottom-3 flex items-center gap-2">
            <button
              type="button"
              onClick={handleVoiceToggle}
              title="Nhập bằng giọng nói (Voice Input Mock)"
              className={`p-2 transition-colors border ${
                isRecording
                  ? 'bg-[#9E2A2B] text-white border-[#9E2A2B] animate-pulse'
                  : 'bg-[#F3EFEA] text-[#78716C] hover:text-[#1C1917] border-[#E7E2DA]'
              }`}
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
        </div>

        {voiceToast && (
          <div className="text-xs text-[#9E2A2B] font-medium flex items-center gap-2 pt-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{voiceToast}</span>
          </div>
        )}
      </div>

      {/* Image Upload Dropzone & Quick Input Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Upload Dropzone */}
        <div className="bg-[#FAF8F5] border border-dashed border-[#D6CEBE] p-6 flex flex-col justify-between hover:border-[#9E2A2B] transition-colors relative">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
              <Upload className="w-3.5 h-3.5 text-[#9E2A2B]" />
              <span>Tải ảnh món đồ đang có (Tùy chọn)</span>
            </div>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Chụp hoặc tải ảnh tủ đồ (quần, giày, áo khoác). Hệ thống nhận diện màu sắc và kiểu dáng tương thích.
            </p>
          </div>

          <div className="my-4">
            <label className="cursor-pointer block">
              <input
                type="file"
                accept="image/*"
                onChange={handleMockUpload}
                className="sr-only"
              />
              <div className="py-4 px-3 bg-[#F3EFEA] hover:bg-[#EDE8E0] border border-[#E7E2DA] text-center transition-colors">
                <ImageIcon className="w-6 h-6 mx-auto text-[#78716C] mb-1.5" />
                <span className="text-xs font-medium text-[#1C1917] block">
                  {uploadMockState === 'uploaded' ? 'Đã tải lên 1 ảnh tủ đồ' : 'Chọn ảnh hoặc kéo thả vào đây'}
                </span>
                <span className="text-[11px] text-[#A8A29E] block mt-0.5">
                  PNG, JPG hoặc WebP (Tối đa 10MB)
                </span>
              </div>
            </label>
          </div>

          {uploadMockState === 'uploaded' && (
            <div className="text-[11px] text-[#2D6A4F] flex items-center gap-1.5 font-medium">
              <Check className="w-3.5 h-3.5" />
              <span>Đã tự động nhận diện 2 items từ ảnh!</span>
            </div>
          )}
        </div>

        {/* Quick Add Custom Item */}
        <div className="bg-[#FAF8F5] border border-[#E7E2DA] p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78716C] block mb-2">
              Thêm món cụ thể:
            </span>
            <form onSubmit={handleAddCustom} className="flex gap-2 mb-4">
              <input
                type="text"
                value={customItemInput}
                onChange={(e) => setCustomItemInput(e.target.value)}
                placeholder="Gõ tên món đồ (vd: Quần ống rộng)..."
                className="flex-1 bg-white border border-[#E7E2DA] focus:border-[#9E2A2B] px-3 py-2 text-xs text-[#1C1917] focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#1C1917] hover:bg-[#38332E] text-white text-xs font-medium flex items-center gap-1 shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Thêm</span>
              </button>
            </form>

            <span className="text-[11px] font-mono text-[#78716C] block mb-2">
              Gợi ý món phổ biến:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {popularWardrobePieces.map((p) => {
                const alreadyAdded = wardrobeItems.some((item) => item.name === p.name);
                return (
                  <button
                    key={p.name}
                    type="button"
                    disabled={alreadyAdded}
                    onClick={() => onAddItem(p.name, p.cat)}
                    className={`text-[11px] px-2.5 py-1 border transition-colors flex items-center gap-1 ${
                      alreadyAdded
                        ? 'bg-[#E7E2DA] text-[#A8A29E] border-[#E7E2DA] cursor-not-allowed'
                        : 'bg-white hover:bg-[#F3EFEA] text-[#57534E] hover:text-[#1C1917] border-[#D6CEBE]'
                    }`}
                  >
                    <span>+ {p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Selected Items List */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
            Danh sách đồ đã ghi nhận ({wardrobeItems.length}):
          </span>
          {wardrobeItems.length > 0 && (
            <span className="text-xs text-[#78716C]">
              AI sẽ ưu tiên dùng những món này
            </span>
          )}
        </div>

        {wardrobeItems.length === 0 ? (
          <div className="p-4 bg-[#F5F2EC] border border-[#E7E2DA] text-xs text-[#78716C] text-center">
            Chưa có món đồ nào được ghi nhận. Bạn có thể chọn nhanh từ các gợi ý phía trên.
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {wardrobeItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#D6CEBE] py-1.5 px-3 flex items-center gap-2 text-xs text-[#1C1917]"
              >
                <span className="font-medium">{item.name}</span>
                <button
                  type="button"
                  onClick={() => onRemoveItem(item.id)}
                  className="text-[#A8A29E] hover:text-[#9E2A2B] transition-colors"
                  aria-label={`Xóa ${item.name}`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
