import React, { useEffect } from 'react';

export default function Canvas({ activeTool, activeColor, canvasEngine, isSplitMode }) {
  const { canvasRef, startDrawing, draw, stopDrawing, handleCanvasClick, triggerResize } = canvasEngine;

  // When split mode changes, wait a tick for DOM to reflow, then trigger resize
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerResize();
    }, 50);
    return () => clearTimeout(timer);
  }, [isSplitMode, triggerResize]);

  return (
    <section className={`canvas-area bg-white mb-[100px] shadow-inner relative cursor-crosshair overflow-hidden border-4 border-surface-dim transition-all duration-300 ${
      isSplitMode ? 'w-1/2 m-4 ml-0 rounded-r-[2rem] border-l-0' : 'flex-1 m-4 ml-24 rounded-[2rem]'
    }`}>
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <span className="material-symbols-outlined -rotate-45" style={{ fontSize: isSplitMode ? '200px' : '400px' }}>edit</span>
      </div>
      <canvas 
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        onClick={handleCanvasClick}
        className="w-full h-full relative z-10 touch-none"
      />
    </section>
  );
}
