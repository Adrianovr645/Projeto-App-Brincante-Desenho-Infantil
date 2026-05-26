import React from 'react';

export default function GalleryView({ isOpen, onClose, gallery, onLoadDrawing }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-surface-container flex flex-col">
      <header className="bg-surface-container-lowest w-full top-0 rounded-b-[2rem] shadow-md flex justify-between items-center px-6 py-4 border-b-4 border-surface-dim">
        <h1 className="text-[28px] font-bold text-primary">Sua Galeria</h1>
        <button 
          onClick={onClose}
          className="bg-surface-variant text-on-surface-variant w-12 h-12 rounded-full flex items-center justify-center active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[28px]">close</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-6 grid grid-cols-2 gap-4 auto-rows-max">
        {gallery.length === 0 ? (
          <div className="col-span-2 text-center text-on-surface-variant mt-10">
            <span className="material-symbols-outlined text-[64px] opacity-50">sentiment_dissatisfied</span>
            <p className="text-[20px] font-bold mt-4">Você ainda não tem desenhos salvos.</p>
          </div>
        ) : (
          gallery.map(drawing => (
            <div 
              key={drawing.id} 
              className="bg-white rounded-[24px] shadow-md border-2 border-surface-dim overflow-hidden aspect-[3/4] flex flex-col active:scale-95 transition-transform"
              onClick={() => onLoadDrawing(drawing)}
            >
              <div className="flex-1 bg-surface-container-highest p-2">
                <img src={drawing.image} alt="Desenho" className="w-full h-full object-contain rounded-[16px] bg-white border border-surface-dim" />
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
