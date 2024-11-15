'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';


type VantaNetOptions = {
  el: HTMLElement;
  THREE?: typeof THREE;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  color?: number;
  backgroundColor?: number;
  points?: number;
  maxDistance?: number;
  spacing?: number;
};

type VantaNetEffect = {
  destroy(): void;
};

interface ParticleBackgroundProps {
  color?: number;
  backgroundColor?: number;
  points?: number;
  maxDistance?: number;
  spacing?: number;
  mouseInteractive?: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  color = 0x00FFD4,
  backgroundColor = 0x000C1D,
  points = 12,
  maxDistance = 22,
  spacing = 16,
  mouseInteractive = true
}) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let vantaEffect: VantaNetEffect | null = null;

    const initVanta = async () => {
      try {
        
        const [importedThree] = await Promise.all([
          import('three'),
          import('vanta/dist/vanta.net.min')
        ]);

        if (vantaRef.current) {
          
          const VANTA = (window as { VANTA?: { NET: (options: VantaNetOptions) => VantaNetEffect } }).VANTA;

          if (VANTA?.NET) {
            vantaEffect = VANTA.NET({
              el: vantaRef.current,
              THREE: importedThree,
              mouseControls: mouseInteractive,
              touchControls: mouseInteractive,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color,
              backgroundColor,
              points,
              maxDistance,
              spacing
            });

            setIsLoaded(true);
          }
        }
      } catch (error) {
        console.error('Failed to load Vanta background:', error);
        setIsLoaded(false);
      }
    };

    initVanta();

    
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [color, backgroundColor, points, maxDistance, spacing, mouseInteractive]);

  return (
    <div 
      ref={vantaRef} 
      className={`
        absolute inset-0 z-0 transition-opacity duration-500
        ${isLoaded ? 'opacity-100' : 'opacity-0'}
      `}
    />
  );
};

export default ParticleBackground;

declare global {
  interface Window {
    VANTA?: {
      NET: (options: VantaNetOptions) => VantaNetEffect;
    };
  }
}