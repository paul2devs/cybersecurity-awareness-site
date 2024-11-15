interface RadarScannerProps {
    color?: string;
    duration?: number;
    startOpacity?: number;
    endOpacity?: number;
    startScale?: number;
    endScale?: number;
  }
  
  export function RadarScanner({
    color = 'rgba(100, 255, 218, 0.1)',
    duration = 2,
    startOpacity = 0.5,
    endOpacity = 0,
    startScale = 0.5,
    endScale = 1
  }: RadarScannerProps) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="radar-scan" 
            style={{
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              animationDuration: `${duration}s`,
              '--start-scale': startScale,
              '--end-scale': endScale,
              '--start-opacity': startOpacity,
              '--end-opacity': endOpacity
            } as React.CSSProperties}
          />
        </div>
        <style jsx>{`
          .radar-scan {
            position: absolute;
            width: 100%;
            height: 100%;
            animation: radar linear infinite;
            animation-duration: inherit;
          }
          @keyframes radar {
            0% {
              transform: scale(var(--start-scale, 0.5));
              opacity: var(--start-opacity, 0.5);
            }
            100% {
              transform: scale(var(--end-scale, 1));
              opacity: var(--end-opacity, 0);
            }
          }
        `}</style>
      </div>
    );
  }