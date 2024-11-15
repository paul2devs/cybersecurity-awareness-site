import { useState, useEffect } from 'react'

interface ConfettiProps {
  active: boolean;
  intensity?: number;
}

const Confetti: React.FC<ConfettiProps> = ({ active, intensity = 200 }) => {
  const [confettiPieces, setConfettiPieces] = useState<JSX.Element[]>([])

  useEffect(() => {
    if (!active) return

    const generateConfetti = () => {
      const pieces = Array.from({ length: intensity }).map((_, index) => {
        const size = Math.random() * 10 + 5
        const color = `hsl(${Math.random() * 360}, 70%, 60%)`
        const style: React.CSSProperties = {
          position: 'fixed',
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          borderRadius: '50%',
          top: `-${size}px`,
          left: `${Math.random() * window.innerWidth}px`,
          animation: `fall ${Math.random() * 3 + 2}s linear ${Math.random()}s infinite`,
          zIndex: 1000
        }

        return (
          <div 
            key={index} 
            style={style}
            className="confetti-piece"
          />
        )
      })

      setConfettiPieces(pieces)

      const styleSheet = document.createElement("style")
      styleSheet.type = "text/css"
      styleSheet.innerText = `
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `
      document.head.appendChild(styleSheet)

      return () => {
        document.head.removeChild(styleSheet)
      }
    }

    const cleanup = generateConfetti()
    return () => cleanup && cleanup()
  }, [active, intensity])

  return <>{confettiPieces}</>
}

export default Confetti