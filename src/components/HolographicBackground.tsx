interface HolographicBackgroundProps {
    fromColor?: string;
    toColor?: string;
    radialColor?: string;
    opacity?: number;
  }
  
  export function HolographicBackground({
    fromColor = '#0a192f',
    toColor = '#112240',
    radialColor = '#64ffda',
    opacity = 0.8
  }: HolographicBackgroundProps) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br" 
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${fromColor}, ${toColor})`,
            opacity: opacity
          }}
        />
  
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]" 
          style={{
            backgroundImage: `radial-gradient(ellipse at center, ${radialColor}/10, ${radialColor}/10 50%, transparent)`
          }}
        />
  
        {/* Optional grid effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent)]" />
        </div>
      </div>
    );
  }