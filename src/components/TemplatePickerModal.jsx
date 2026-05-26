import React from 'react';

export default function TemplatePickerModal({ isOpen, onClose, onSelectTemplate }) {
  if (!isOpen) return null;

  // Embedded SVG templates (data URIs)
  const templates = [
    {
      id: 'house',
      label: 'Casa',
      src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'
    },
    {
      id: 'car',
      label: 'Carro',
      src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H6.5a2 2 0 0 0-1.8 1.1L2 12v4h3m14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path></svg>'
    },
    {
      id: 'apple',
      label: 'Maçã',
      src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5"></path></svg>'
    },
    {
      id: 'cat',
      label: 'Gatinho',
      src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"></path><path d="M8 14v.5"></path><path d="M16 14v.5"></path><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path></svg>'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-[2rem] p-8 w-full max-w-2xl flex flex-col items-center gap-6 shadow-2xl border-4 border-surface-dim">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-[28px] font-bold text-center leading-tight">
            Escolha um desenho para aprender!
          </h2>
          <button 
            onClick={onClose}
            className="bg-surface-variant text-on-surface-variant w-12 h-12 rounded-full flex items-center justify-center active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[28px]">close</span>
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-6 w-full mt-4">
          {templates.map(template => (
            <button
              key={template.id}
              onClick={() => {
                onSelectTemplate(template.src);
                onClose();
              }}
              className="flex flex-col items-center justify-center p-6 bg-surface-container-lowest rounded-[1.5rem] border-4 border-surface-dim hover:border-primary hover:bg-surface-container-low active:scale-95 transition-all shadow-md"
            >
              <img src={template.src} alt={template.label} className="w-24 h-24 mb-4 object-contain opacity-80" />
              <span className="text-[20px] font-bold">{template.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
