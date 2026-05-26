import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import ToolSidebar from './components/ToolSidebar';
import ColorPalette from './components/ColorPalette';
import BottomNavigation from './components/BottomNavigation';
import Canvas from './components/Canvas';
import ConfirmModal from './components/ConfirmModal';
import GalleryView from './components/GalleryView';
import TemplatePickerModal from './components/TemplatePickerModal';
import StickerPalette from './components/StickerPalette';
import useCanvas from './hooks/useCanvas';

export default function App() {
  const [activeTool, setActiveTool] = useState('brush');
  const [activeColor, setActiveColor] = useState('#3b82f6');
  const [activeSticker, setActiveSticker] = useState('star');
  
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isTemplatePickerOpen, setIsTemplatePickerOpen] = useState(false);
  
  const [gallery, setGallery] = useState([]);
  const [copyTemplate, setCopyTemplate] = useState(null);
  
  const canvasEngine = useCanvas(activeTool, activeColor, activeSticker);
  
  useEffect(() => {
    const savedGallery = JSON.parse(localStorage.getItem('brincante_gallery') || '[]');
    setGallery(savedGallery);
  }, []);
  
  const handleSave = () => {
    const dataUrl = canvasEngine.getCanvasImage();
    if (!dataUrl) return;
    
    const newDrawing = {
      id: Date.now(),
      image: dataUrl,
      date: new Date().toISOString()
    };
    const newGallery = [newDrawing, ...gallery];
    setGallery(newGallery);
    localStorage.setItem('brincante_gallery', JSON.stringify(newGallery));
    
    alert('Desenho salvo com sucesso na Galeria!');
  };
  
  const handleLoadDrawing = (drawing) => {
    alert('Apenas visualização ativada nesta versão.');
  };

  return (
    <div className="bg-background text-on-background h-screen w-full flex flex-col overflow-hidden relative">
      <TopBar onSave={handleSave} />
      
      <main className="flex flex-1 relative overflow-hidden">
        <ToolSidebar 
          activeTool={activeTool} 
          onSelectTool={setActiveTool} 
          onSelectCopyMode={() => setIsTemplatePickerOpen(true)}
        />
        
        <div className="flex-1 relative flex">
          {copyTemplate && (
            <div className="w-1/2 relative bg-surface-container-highest m-4 mb-[100px] ml-24 mr-0 rounded-l-[2rem] border-4 border-r-0 border-surface-dim flex items-center justify-center p-8 shadow-inner transition-all duration-300">
              <button 
                onClick={() => setCopyTemplate(null)}
                className="absolute top-4 left-4 bg-white text-on-surface w-12 h-12 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform border-2 border-surface-dim z-10"
              >
                <span className="material-symbols-outlined text-[28px]">close</span>
              </button>
              <img src={copyTemplate} alt="Template" className="max-w-full max-h-full opacity-40 object-contain pointer-events-none" />
            </div>
          )}
          
          <Canvas 
            activeTool={activeTool} 
            activeColor={activeColor} 
            canvasEngine={canvasEngine}
            isSplitMode={!!copyTemplate}
          />
          
          <ColorPalette activeColor={activeColor} onSelectColor={setActiveColor} />
          
          {activeTool === 'stickers' && (
             <StickerPalette activeSticker={activeSticker} onSelectSticker={setActiveSticker} />
          )}
        </div>
      </main>
      
      <BottomNavigation 
        onClear={() => setIsConfirmOpen(true)} 
        onUndo={canvasEngine.undo} 
        onGallery={() => setIsGalleryOpen(true)} 
      />

      <ConfirmModal 
        isOpen={isConfirmOpen} 
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={canvasEngine.clear}
      />
      
      <GalleryView 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)}
        gallery={gallery}
        onLoadDrawing={handleLoadDrawing}
      />
      
      <TemplatePickerModal 
        isOpen={isTemplatePickerOpen}
        onClose={() => setIsTemplatePickerOpen(false)}
        onSelectTemplate={setCopyTemplate}
      />
    </div>
  );
}
