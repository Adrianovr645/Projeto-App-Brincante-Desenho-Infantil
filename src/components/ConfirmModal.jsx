import React from 'react';

export default function ConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-[2rem] p-8 w-full max-w-sm flex flex-col items-center gap-6 shadow-2xl border-4 border-surface-dim">
        <h2 className="text-[24px] font-bold text-center leading-tight">
          Tem certeza que deseja limpar todo o seu desenho?
        </h2>
        
        <div className="flex w-full gap-4 mt-2">
          <button 
            onClick={onClose}
            className="flex-1 flex justify-center items-center gap-2 bg-error-container text-on-error-container py-4 rounded-full font-bold text-[20px] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[28px]">close</span>
            Não
          </button>
          
          <button 
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="flex-1 flex justify-center items-center gap-2 bg-tertiary-container text-on-tertiary-container py-4 rounded-full font-bold text-[20px] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[28px]">check</span>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
