import React from 'react';

export default function StickerPalette({ activeSticker, onSelectSticker }) {
  const stickers = [
    { id: 'star', icon: 'star' },
    { id: 'favorite', icon: 'favorite' },
    { id: 'change_history', icon: 'change_history' }, // Triangle
    { id: 'circle', icon: 'circle' },
    { id: 'sentiment_satisfied', icon: 'sentiment_satisfied' }, // Smiley
  ];

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border-2 border-surface-dim z-30 mb-[100px]">
      {stickers.map(sticker => {
        const isActive = activeSticker === sticker.id;
        return (
          <button
            key={sticker.id}
            onClick={() => onSelectSticker(sticker.id)}
            className={`w-12 h-12 flex items-center justify-center rounded-full transition-transform shadow-sm ${
              isActive 
                ? 'bg-primary text-on-primary scale-125 border-2 border-white ring-2 ring-primary' 
                : 'bg-surface-container-high text-on-surface hover:scale-110'
            }`}
          >
            <span className="material-symbols-outlined text-[28px]">{sticker.icon}</span>
          </button>
        );
      })}
    </div>
  );
}
