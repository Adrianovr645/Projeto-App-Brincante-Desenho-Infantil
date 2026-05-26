import React from 'react';

export default function TopBar({ onSave }) {
  return (
    <header className="bg-surface-container-lowest w-full top-0 rounded-b-[2rem] shadow-md z-50 flex justify-between items-center px-6 py-4 border-b-4 border-surface-dim">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: '32px' }}>palette</span>
        <h1 className="text-[28px] leading-[36px] font-bold text-primary">Meu Desenho</h1>
      </div>
      <button 
        onClick={onSave}
        className="bg-primary text-on-primary px-6 py-2 rounded-full text-[18px] leading-[24px] font-bold chunky-button hover:scale-95 transition-transform active:scale-90 duration-150"
      >
        Salvar
      </button>
    </header>
  );
}
