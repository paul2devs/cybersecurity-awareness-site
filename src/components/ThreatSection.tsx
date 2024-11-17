'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bug, 
  Database, 
  ShieldAlert, 
  Code, 
  Network, 
  Layers, 
  X 
} from 'lucide-react';

// Type definition for Threat
interface ThreatType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement; 
  severity: 'Low' | 'Medium' | 'High';
  color: string;
  backgroundGradient?: string;
}

// Threat Data
const threatTypes: ThreatType[] = [
  {
    id: 1,
    title: "Malware Attacks",
    description: "Malicious software designed to damage, disrupt, or gain unauthorized access to computer systems, networks, and devices.",
    icon: <Bug />, 
    severity: 'High',
    color: 'text-red-500',
    backgroundGradient: 'from-red-900/30 to-red-950/50'
  },
  {
    id: 2,
    title: "Phishing Attempts",
    description: "Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity in digital communication.",
    icon: <Network />, 
    severity: 'Medium',
    color: 'text-yellow-500',
    backgroundGradient: 'from-yellow-900/30 to-yellow-950/50'
  },
  {
    id: 3,
    title: "Data Breaches",
    description: "Unauthorized access and extraction of sensitive, confidential, or protected data from a system.",
    icon: <Database />,
    severity: 'High',
    color: 'text-red-500',
    backgroundGradient: 'from-red-900/30 to-red-950/50'
  },
  {
    id: 4,
    title: "Social Engineering",
    description: "Psychological manipulation to trick users into making security mistakes or revealing sensitive information.",
    icon: <Layers />, 
    severity: 'Medium',
    color: 'text-yellow-500',
    backgroundGradient: 'from-yellow-900/30 to-yellow-950/50'
  },
  {
    id: 5,
    title: "Ransomware",
    description: "Malware that encrypts victim's files, demanding payment for decryption, causing significant operational disruption.",
    icon: <ShieldAlert />, 
    severity: 'High',
    color: 'text-red-500',
    backgroundGradient: 'from-red-900/30 to-red-950/50'
  },
  {
    id: 6,
    title: "Zero-Day Exploits",
    description: "Cybersecurity vulnerabilities unknown to those who should be interested in their mitigation, like software vendors.",
    icon: <Code />, 
    severity: 'High',
    color: 'text-red-500',
    backgroundGradient: 'from-red-900/30 to-red-950/50'
  }
];

// Severity Color Mapping
const severityColors = {
  High: 'bg-red-500/20 text-red-400',
  Medium: 'bg-yellow-500/20 text-yellow-400',
  Low: 'bg-green-500/20 text-green-400'
};

const ThreatsSection: React.FC = () => {
  const [selectedThreat, setSelectedThreat] = useState<ThreatType | null>(null);
  const [modalPosition, setModalPosition] = useState<{ top: number; left: number; width: number }>({
    top: 0,
    left: 0,
    width: 0
  });
  const gridRef = useRef<HTMLDivElement>(null);
  const threatRefs = useRef<{ [key: number]: HTMLDivElement }>({});

  // Position Modal Logic
  const positionModal = (triggerElement: HTMLDivElement) => {
    if (!gridRef.current) return;

    const triggerRect = triggerElement.getBoundingClientRect();
    const gridRect = gridRef.current.getBoundingClientRect();

    setModalPosition({
      top: triggerRect.bottom + window.scrollY + 10,
      left: triggerRect.left,
      width: triggerRect.width
    });
  };

  // Responsive Modal Positioning
  useEffect(() => {
    const handleResize = () => {
      if (selectedThreat && threatRefs.current[selectedThreat.id]) {
        positionModal(threatRefs.current[selectedThreat.id]);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedThreat]);

  // Event Handlers
  const handleThreatClick = (threat: ThreatType, element: HTMLDivElement) => {
    // If the same threat is clicked, close the modal
    if (selectedThreat?.id === threat.id) {
      setSelectedThreat(null);
      return;
    }

    setSelectedThreat(threat);
    positionModal(element);
  };

  const closeModal = () => {
    setSelectedThreat(null);
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-electric-blue mb-3 sm:mb-4"
        >
          Emerging Cyber Threats Landscape
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-base sm:text-lg md:text-xl text-light-gray max-w-2xl mx-auto px-4"
        >
          Stay Protected: Get the Latest Cybersecurity Threats and Tips to Safeguard Your Digital World.
        </motion.p>
      </div>

      {/* Threats Grid */}
      <div 
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 relative"
      >
        {threatTypes.map((threat) => (
          <motion.div
            key={threat.id}
            ref={(el) => {
              if (el) threatRefs.current[threat.id] = el;
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleThreatClick(threat, e.currentTarget)}
            className={`
              bg-steel-gray/30 rounded-xl p-4 sm:p-6 cursor-pointer 
              transition-all duration-300 hover:bg-steel-gray/50
              ${selectedThreat?.id === threat.id ? 'border-2 border-electric-blue' : ''}
              relative
            `}
          >
            {/* Threat Card Content */}
            <div className={`mb-3 sm:mb-4 ${threat.color}`}>
              {React.cloneElement(threat.icon, { 
                className: 'w-6 h-6 sm:w-8 sm:h-8' 
              })}
            </div>
            <h3 
              className={`
                text-base sm:text-xl font-semibold mb-2 
                ${threat.color} 
                preserve-color
              `}
            >
              { threat.title}
            </h3>
            <div className="flex justify-between items-center">
              <span 
                className={`
                  px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm
                  ${severityColors[threat.severity]}
                `}
              >
                {threat.severity} Risk
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Selected Threat */}
      <AnimatePresence>
        {selectedThreat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center 
              bg-black/60 backdrop-blur-md p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: modalPosition.top,
                left: modalPosition.left,
                width: modalPosition.width,
                maxWidth: '28rem'
              }}
              initial={{ 
                opacity: 0, 
                scale: 0.8 
              }}
              animate={{ 
                opacity: 1, 
                scale: 1 
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
              className={`
                relative
                bg-gradient-to-br ${selectedThreat.backgroundGradient || 'from-steel-gray/30 to-steel-gray/50'}
                rounded-2xl 
                shadow-2xl 
                border border-white/10
                overflow-hidden
                mt-4
              `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="
                  absolute top-3 right-3 sm:top-4 sm:right-4
                  bg-white/10 hover:bg-white/20 
                  rounded-full p-1 sm:p-2 
                  transition-all duration-300
                  z-10
                "
              >
                <X className="text-white" size={20} />
              </button>

              {/* Modal Content */}
              <div className="relative z-10 p-4 sm:p-8">
                {/* Header */}
                <div className="flex items-center mb-4 sm:mb-6 space-x-3 sm:space-x-4">
                  <div className={`${selectedThreat.color}`}>
                    {React.cloneElement(selectedThreat.icon, { 
                      className: 'w-6 h-6'  
                    })}
                  </div>
                  <div className="flex-grow">
                    <h3 className={`
                        text-xl sm:text-2xl font-bold 
                        ${selectedThreat.color} 
                        preserve-color
                      `}>
                      {selectedThreat.title}
                    </h3>
                    <span 
                      className={`
                        inline-block mt-1 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm
                        ${severityColors[selectedThreat.severity]}
                      `}
                    >
                      {selectedThreat.severity} Risk
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  {selectedThreat.description}
                </p>

                {/* Action Button */}
                <div className="mt-4 sm:mt-6 flex justify-end">
                  <button 
                    className="
                      px-3 py-2 sm:px-4 sm:py-2
                      bg-electric-blue/20 
                      text-electric-blue 
                      hover:bg-electric-blue/30 
                      rounded-lg 
                      text-sm sm:text-base
                      transition-all 
                      duration-300
                    "
                    onClick={closeModal}
                  >
                    Understood
                  </button>
                </div>
              </div>

              {/* Subtle Background Effect */}
              <div 
                className="
                  absolute 
                  -top-1/2 
                  -right-1/2 
                  w-full 
                  h-full 
                  bg-gradient-to-br 
                  from-electric-blue/10 
                  to-transparent 
                  rounded-full 
                  opacity-20 
                  transform 
                  rotate-45
                "
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThreatsSection;