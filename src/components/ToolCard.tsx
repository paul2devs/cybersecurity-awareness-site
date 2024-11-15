'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  ExternalLink, 
  Zap,
  Cpu,
  Terminal
} from 'lucide-react';
import { useState } from 'react';
import { Tool } from '@/types';

export default function ToolCard({ tool }: { tool: Tool }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: '0 0 25px rgba(50, 255, 226, 0.4)',
      transition: {
        duration: 0.2
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="relative bg-gradient-to-br from-[#1a2b3c] to-[#2c3e50] 
      rounded-2xl overflow-hidden shadow-2xl border-2 border-[#34495e] 
      transform transition-all duration-300"
    >
      {/* Glitch Effect Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
      </div>

      {/* Tool Header */}
      <div className="relative p-6 bg-[#2c3e50]/50 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <div className="bg-[#34495e]/70 p-3 rounded-full">
            {tool.icon ? (
              <span className="text-2xl text-cyan-400">{tool.icon}</span>
            ) : (
              <Cpu className="w-8 h-8 text-cyan-400" />
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-cyan-300 drop-shadow-lg">
              {tool.name}
            </h3>
            <p className="text-gray-400 text-sm">{tool.category}</p>
          </div>
        </div>
      </div>

      {/* Tool Description */}
      <div className="p-6 space-y-4">
        <p className="text-gray-300 leading-relaxed">
          {tool.description}
        </p>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-cyan-300">
            Key Features
          </h4>
          {tool.features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center space-x-3 bg-[#2c3e50] p-3 rounded-lg"
            >
              <Terminal className="w-5 h-5 text-green-400 flex-shrink-0" />
              <p className="text-gray-300">{feature}</p>
            </motion.div>
          ))}
        </div>

        {/* Tool Options */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-cyan-300">
            Quick Access
          </h4>
          <AnimatePresence>
            {tool.options.map((option, index) => (
              <motion.a
                key={index}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(50, 255, 226, 0.1)'
                }}
                className="flex items-center justify-between p-4 bg-[#2c3e50] 
                rounded-lg border border-[#34495e] transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-200">{option.name}</span>
                </div>
                <ExternalLink className="text-cyan-400" />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Cyberpunk Footer */}
      <div className="p-4 bg-[#1a2b3c] border-t border-[#34495e] flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-green-400" />
          <span className="text-gray-400 text-sm">Verified Tool</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white 
          px-4 py-2 rounded-lg transition-all duration-300"
        >
          {isExpanded ? 'Collapse' : 'More Details'}
        </motion.button>
      </div>

      {/* Expandable Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-[#2c3e50] p-6"
          >
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                  Additional Information
                </h4>
                <p className="text-gray-300">
                  {tool.updates || 'No additional information available.'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1a2b3c] p-4 rounded-lg">
                  <h5 className="text-gray-400 mb-2">Version</h5>
                  <p className="text-white font-bold">{tool.version}</p>
                </div>
                <div className="bg-[#1a2b3c] p-4 rounded-lg">
                  <h5 className="text-gray-400 mb-2">Last Updated</h5>
                  <p className="text-white">{tool.date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}