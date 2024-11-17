'use client';

import { motion } from 'framer-motion';
import { 
  Lock, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Download,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { Tool } from '@/types';
import { useState } from 'react';

export default function HiddenTool({ tool }: { tool: Tool }) {
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative bg-gradient-to-br from-[#1a2b3c] to-[#2c3e50] 
      rounded-2xl overflow-hidden shadow-2xl border-2 border-[#34495e] 
      transform transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Glitch Effect Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
      </div>

      {/* Header with Image and Overlay */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={tool.image || '/placeholder-cyber.jpg'}
          alt={tool.name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full filter brightness-50"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-[#34495e]/70 p-3 rounded-full">
              {tool.icon ? (
                <span className="text-2xl text-cyan-400">{tool.icon}</span>
              ) : (
                <Cpu className="w-8 h-8 text-cyan-400" />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-cyan-300 drop-shadow-lg">
                {tool.name}
              </h2>
              <p className="text-gray-300 text-sm">{tool.category}</p>
            </div>
          </div>
          <div className="bg-[#34495e]/70 p-2 rounded-full">
            <ShieldCheck className="w-6 h-6 text-green-400" />
          </div>
        </motion.div>
      </div>

      {/* Tool Details */}
      <motion.div 
        variants={itemVariants}
        className="p-6 space-y-6"
      >
        {/* Version and Size */}
        {(tool.version || tool.size) && (
          <div className="grid grid-cols-2 gap-4">
            {tool.version && (
              <div className="bg-[#2c3e50] p-4 rounded-lg">
                <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                <h4 className="text-sm text-gray-400">Version</h4>
                <p className="font-bold text-white">{tool.version}</p>
              </div>
            )}
            {tool.size && (
              <div className="bg-[#2c3e50] p-4 rounded-lg">
                <Download className="w-6 h-6 text-purple-400 mb-2" />
                <h4 className="text-sm text-gray-400">Size</h4>
                <p className="font-bold text-white">{tool.size}</p>
              </div>
            )}
          </div>
        )}

        {/* Key Features */}
        <motion.div 
          variants 
          ={itemVariants}
          className="bg-[#2c3e50] p-4 rounded-lg"
        >
          <h3 className="text-lg font-bold text-white flex items-center justify-between">
            Key Features
            <button 
              onClick={() => setIsFeaturesExpanded(!isFeaturesExpanded)}
              className="text-gray-400 focus:outline-none"
            >
              {isFeaturesExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </h3>
          {isFeaturesExpanded && (
            <ul className="mt-2 space-y-2">
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        variants={itemVariants}
        className="p-6 bg-[#1a2b3c] border-t border-[#34495e]"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Lock className="w-6 h-6 text-red-500" />
          <p className="text-gray-300">
            Access denied: This tool is not available publicly. Contact <strong>paul2dev</strong> on WhatsApp to access.
          </p>
        </div>
        <div className="flex space-x-4">
          <a 
            href={`https://wa.me/07068578749?text=Interested in ${tool.name}`}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white 
            py-3 rounded-lg flex items-center justify-center space-x-2 
            transition-all duration-300 transform hover:scale-[1.02]"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}