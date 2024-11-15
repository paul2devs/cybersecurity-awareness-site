'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface HolographicOverlayProps {
  intensity?: number;
  color?: string;
}

const HolographicOverlay: React.FC<HolographicOverlayProps> = ({
  intensity = 0.2,
  color = '#00FF9F'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    
    const generateHolographicEffect = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 2, 
        0, 
        canvas.width / 2, 
        canvas.height / 2, 
        Math.max(canvas.width, canvas.height)
      );
      
      gradient.addColorStop(0, `${color}${Math.floor(intensity * 255).toString(16)}`);
      gradient.addColorStop(1, 'transparent');

      
      ctx.globalAlpha = intensity;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      
      ctx.beginPath();
      ctx.strokeStyle = `${color}${Math.floor(intensity * 100).toString(16)}`;
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += 50) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }

      for (let y = 0; y < canvas.height; y += 50) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }

      ctx.stroke();
    };

    
    resizeCanvas();
    generateHolographicEffect();

    
    window.addEventListener('resize', resizeCanvas);

    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, color]);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        mixBlendMode: 'screen',
        filter: 'brightness(1.2) contrast(1.4)'
      }}
    />
  );
};

export default HolographicOverlay;