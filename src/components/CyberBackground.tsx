'use client';

import { motion } from 'framer-motion';

export default function CyberBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,25,47,0.9),rgba(10,25,47,0.7))] opacity-90"></div>
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,212,0.05)_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,212,0.05)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Animated Particles */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-teal-300/30 rounded-full"
            style={{
              width: `${Math.random() * 5}px`,
              height: `${Math.random() * 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}