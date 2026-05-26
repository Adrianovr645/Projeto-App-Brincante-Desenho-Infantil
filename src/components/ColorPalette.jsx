import React from 'react';

export default function ColorPalette({ activeColor, onSelectColor }) {
  const colors = [
    { id: 'red', value: '#ef4444' },
    { id: 'yellow', value: '#eab308' },
    { id: 'blue', value: '#3b82f6' },
    { id: 'green', value: '#22c55e' },
  ];

  return (
    <div className="absolute bottom-28 right-4 flex flex-col gap-3 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border-2 border-surface-dim z-30">
      {colors.map(color => {
        const isActive = activeColor === color.value;
        return (
          <div
            key={color.id}
            onClick={() => onSelectColor(color.value)}
            className={`w-12 h-12 rounded-full cursor-pointer transition-transform shadow-sm ${
              isActive ? 'scale-125 border-4 border-white ring-4 ring-primary' : 'border-4 border-white hover:scale-110'
            }`}
            style={{ backgroundColor: color.value }}
          />
        );
      })}
    </div>
  );
}
