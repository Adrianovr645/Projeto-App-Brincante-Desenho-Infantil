import React from 'react';

export default function ToolSidebar({ activeTool, onSelectTool, onSelectCopyMode }) {
  const tools = [
    { id: 'brush', icon: 'brush', label: 'Pincéis' },
    { id: 'eraser', icon: 'ink_eraser', label: 'Borracha' },
    { id: 'stickers', icon: 'auto_awesome', label: 'Adesivos' },
    { id: 'copy', icon: 'menu_book', label: 'Aprender' },
  ];

  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 p-2 z-40 bg-surface-container h-auto w-[80px] rounded-r-[3rem] shadow-xl border-y-2 border-r-2 border-surface-dim">
      <div className="flex flex-col items-center gap-4 py-6">
        {tools.map(tool => {
          const isActive = activeTool === tool.id && tool.id !== 'copy'; // Copy mode doesn't highlight as a main tool, it works as an action
          return (
            <button
              key={tool.id}
              onClick={() => {
                if (tool.id === 'copy') {
                  onSelectCopyMode();
                } else {
                  onSelectTool(tool.id);
                }
              }}
              className={`flex flex-col items-center justify-center gap-1 w-[64px] h-[72px] rounded-[2rem] transition-all duration-200 ${
                isActive 
                  ? 'bg-tertiary-container text-on-tertiary-container scale-110 shadow-md border-b-4 border-[#1a662d]' 
                  : 'text-on-surface-variant hover:bg-surface-bright active:scale-95'
              }`}
            >
              <span className="material-symbols-outlined">{tool.icon}</span>
              <span className="text-[12px] font-bold">{tool.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
