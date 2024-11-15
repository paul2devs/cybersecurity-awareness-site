import { motion } from "framer-motion"

interface ProgressBarProps {
  progress: number
  className?: string
  barClassName?: string
}

export function ProgressBar({ progress, className = '', barClassName = '' }: ProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      <motion.div 
        className={`h-full ${barClassName}`}
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}
