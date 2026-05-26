import React from 'react';

export default function BottomNavigation({ onClear, onUndo, onGallery }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-end h-[80px] px-6 pb-2 bg-secondary-container rounded-t-[2rem] border-t-4 border-on-secondary-container shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <button 
        onClick={onClear}
        className="flex flex-col items-center justify-center text-on-secondary-container p-2 hover:brightness-110 active:scale-95 transition-all w-24 h-full"
      >
        <span className="material-symbols-outlined text-[28px]">delete</span>
        <span className="text-[16px] font-bold">Limpar</span>
      </button>

      {/* Central FAB - Desfazer */}
      <button 
        onClick={onUndo}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center bg-on-secondary-container text-secondary-container rounded-[2.5rem] w-[120px] h-[90px] shadow-[0_8px_0_0_#443700] hover:translate-y-1 active:translate-y-4 active:shadow-[0_0px_0_0_#443700] transition-all border-2 border-[#554500]"
      >
        <span className="material-symbols-outlined text-[40px]">undo</span>
        <span className="text-[20px] font-bold">Desfazer</span>
      </button>

      <button 
        onClick={onGallery}
        className="flex flex-col items-center justify-center text-on-secondary-container p-2 hover:brightness-110 active:scale-95 transition-all w-24 h-full"
      >
        <span className="material-symbols-outlined text-[28px]">photo_library</span>
        <span className="text-[16px] font-bold">Galeria</span>
      </button>
    </nav>
  );
}
