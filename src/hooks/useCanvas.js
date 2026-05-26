import { useRef, useState, useEffect } from 'react';

export default function useCanvas(activeTool, activeColor, activeSticker) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState([]);
  
  // A wrapper to handle initialization and resizing without losing context
  const initOrResizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const parent = canvas.parentElement;
    // se o tamanho for exatamente o mesmo, abortar (para não limpar a tela)
    if (canvas.style.width === `${parent.clientWidth}px` && canvas.style.height === `${parent.clientHeight}px`) {
      return;
    }
    
    // Save image data if any
    let imgData = null;
    if (contextRef.current && history.length > 0) {
      imgData = canvas.toDataURL();
    }

    canvas.width = parent.clientWidth * 2;
    canvas.height = parent.clientHeight * 2;
    canvas.style.width = `${parent.clientWidth}px`;
    canvas.style.height = `${parent.clientHeight}px`;
    
    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.lineJoin = 'round';
    contextRef.current = context;
    
    updateContextStyles();

    if (imgData) {
      const img = new Image();
      img.src = imgData;
      img.onload = () => {
        context.drawImage(img, 0, 0, parent.clientWidth, parent.clientHeight);
      };
    } else if (history.length === 0) {
      saveHistoryState();
    }
  };

  const updateContextStyles = () => {
    if (!contextRef.current) return;
    const context = contextRef.current;
    
    if (activeTool === 'eraser') {
      context.globalCompositeOperation = 'destination-out';
      context.lineWidth = 40;
    } else {
      context.globalCompositeOperation = 'source-over';
      context.strokeStyle = activeColor;
      context.lineWidth = 15;
    }
  };

  useEffect(() => {
    initOrResizeCanvas();
    window.addEventListener('resize', initOrResizeCanvas);
    return () => window.removeEventListener('resize', initOrResizeCanvas);
  }, []);

  // Update context when tool or color changes
  useEffect(() => {
    updateContextStyles();
  }, [activeTool, activeColor]);

  const saveHistoryState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL();
    setHistory(prev => [...prev, dataUrl]);
  };

  const undo = () => {
    if (history.length <= 1) return;
    
    const newHistory = [...history];
    newHistory.pop();
    const previousState = newHistory[newHistory.length - 1];
    
    const canvas = canvasRef.current;
    const context = contextRef.current;
    
    const img = new Image();
    img.src = previousState;
    img.onload = () => {
      context.save();
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.restore();
      context.drawImage(img, 0, 0, canvas.width / 2, canvas.height / 2);
    };
    
    setHistory(newHistory);
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
    saveHistoryState();
  };

  const startDrawing = ({ nativeEvent }) => {
    if (activeTool === 'stickers') return;
    
    const { offsetX, offsetY } = getCoordinates(nativeEvent);
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing || activeTool === 'stickers') return;
    
    const { offsetX, offsetY } = getCoordinates(nativeEvent);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    contextRef.current.closePath();
    setIsDrawing(false);
    saveHistoryState();
  };

  const getCoordinates = (event) => {
    let clientX, clientY;
    if (event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      offsetX: clientX - rect.left,
      offsetY: clientY - rect.top
    };
  };

  const handleCanvasClick = (e) => {
    if (activeTool === 'stickers') {
      const { offsetX, offsetY } = getCoordinates(e.nativeEvent);
      const context = contextRef.current;
      
      context.save();
      context.globalCompositeOperation = 'source-over';
      context.translate(offsetX, offsetY);
      context.fillStyle = activeColor;
      
      context.beginPath();
      
      if (activeSticker === 'star') {
        for (let i = 0; i < 5; i++) {
          context.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * 30, -Math.sin((18 + i * 72) * Math.PI / 180) * 30);
          context.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * 15, -Math.sin((54 + i * 72) * Math.PI / 180) * 15);
        }
        context.closePath();
      } else if (activeSticker === 'circle') {
        context.arc(0, 0, 25, 0, Math.PI * 2);
      } else if (activeSticker === 'change_history') { // Triangle
        context.moveTo(0, -25);
        context.lineTo(25, 20);
        context.lineTo(-25, 20);
        context.closePath();
      } else if (activeSticker === 'favorite') { // Heart
        context.moveTo(0, 5);
        context.bezierCurveTo(0, -15, -25, -15, -25, 5);
        context.bezierCurveTo(-25, 25, 0, 30, 0, 40);
        context.bezierCurveTo(0, 30, 25, 25, 25, 5);
        context.bezierCurveTo(25, -15, 0, -15, 0, 5);
      } else if (activeSticker === 'sentiment_satisfied') { // Smiley
        context.arc(0, 0, 25, 0, Math.PI * 2);
        context.fill(); // fill background
        context.fillStyle = '#fff';
        // eyes
        context.beginPath();
        context.arc(-10, -8, 4, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.arc(10, -8, 4, 0, Math.PI * 2);
        context.fill();
        // smile
        context.beginPath();
        context.arc(0, 5, 12, 0, Math.PI, false);
        context.lineWidth = 4;
        context.strokeStyle = '#fff';
        context.stroke();
      }
      
      if (activeSticker !== 'sentiment_satisfied') {
        context.fill();
      }
      
      context.restore();
      saveHistoryState();
    }
  };

  return {
    canvasRef,
    startDrawing,
    draw,
    stopDrawing,
    handleCanvasClick,
    undo,
    clear,
    getCanvasImage: () => canvasRef.current?.toDataURL(),
    triggerResize: initOrResizeCanvas // export this to manually trigger on layout change
  };
}
