import React, { useState } from 'react';
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

interface ThreatType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement; 
  severity: 'Low' | 'Medium' | 'High';
  color: string;
  backgroundGradient?: string;
}

const ThreatsSection: React.FC = () => {
  const [selectedThreat, setSelectedThreat] = useState<ThreatType | null>(null);

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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-electric-blue mb-4"
        >
          Emerging Cyber Threats Landscape
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-light-gray max-w-2xl mx-auto"
        >
          Stay Protected: Get the Latest Cybersecurity Threats and Tips to Safeguard Your Digital World.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {threatTypes.map((threat) => (
          <motion.div
            key={threat.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedThreat(threat)}
            className={`
              bg-steel-gray/30 rounded-xl p-6 cursor-pointer 
              transition-all duration-300 hover:bg-steel-gray/50
              ${selectedThreat?.id === threat.id ? 'border-2 border-electric-blue' : ''}
            `}
          >
            <div className={`mb-4 ${threat.color}`}>
              {threat.icon}
            </div>
            <h3 
              className={`
                text-xl font-semibold mb-2 
                ${threat.color} 
                preserve-color
              `}
            >
              {threat.title}
            </h3>
            <div className="flex justify-between items-center">
              <span 
                className={`
                  px-3 py-1 rounded-full text-sm 
                  ${threat.severity === 'High' ? 'bg-red-500/20 text-red-400' : 
                    threat.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                    'bg-green-500/20 text-green-400'}
                `}
              >
                {threat.severity} Risk
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedThreat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center 
              bg-black/60 backdrop-blur-md p-4"
            onClick={() => setSelectedThreat(null)}
          >
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                y: 50 
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0 
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8,
                y: 50 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
              className={`
                relative w-full max-w-2xl 
                bg-gradient-to-br ${selectedThreat.backgroundGradient || 'from-steel-gray/30 to-steel-gray/50'}
                rounded-2xl 
                shadow-2xl 
                border border-white/10
                overflow-hidden
              `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedThreat(null)}
                className="
                  absolute top-4 right-4 
                  bg-white/10 hover:bg-white/20 
                  rounded-full p-2 
                  transition-all duration-300
                  z-10
                "
              >
                <X className="text-white" size={24} />
              </button>

              {/* Modal Content */}
              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex items-center mb-6 space-x-4">
                  <div className={`${selectedThreat. color}`}>
                    {selectedThreat.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className={`
                        text-2xl font-bold 
                        ${selectedThreat.color} 
                        preserve-color
                      `}>
                      {selectedThreat.title}
                    </h3>
                    <span 
                      className={`
                        inline-block mt-1 px-3 py-1 rounded-full text-sm 
                        ${selectedThreat.severity === 'High' ? 'bg-red-500/20 text-red-400' : 
                          selectedThreat.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                          'bg-green-500/20 text-green-400'}
                      `}
                    >
                      {selectedThreat.severity} Risk
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed">
                  {selectedThreat.description}
                </p>

                {/* Optional: Additional Details or Action Button */}
                <div className="mt-6 flex justify-end">
                  <button 
                    className="
                      px-4 py-2 
                      bg-electric-blue/20 
                      text-electric-blue 
                      hover:bg-electric-blue/30 
                      rounded-lg 
                      transition-all 
                      duration-300
                    "
                    onClick={() => setSelectedThreat(null)}
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