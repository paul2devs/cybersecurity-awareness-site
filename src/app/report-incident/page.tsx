'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  AlertTriangle, 
  Lock, 
  Cpu, 
  Network, 
} from 'lucide-react';
import { IncidentForm } from '@/components/IncidentForm';
import { HolographicBackground } from '@/components/HolographicBackground';
import { RadarScanner } from '@/components/RadarScanner';

export default function ReportIncidentPage() {
  const [activeView, setActiveView] = useState<'form' | 'guide'>('form');

  const views = [
    { 
      icon: <Shield className="w-6 h-6" />, 
      label: 'Report Incident', 
      value: 'form' 
    },
    { 
      icon: <Network className="w-6 h-6" />, 
      label: 'Incident Guide', 
      value: 'guide' 
    }
  ];

  const handleViewChange = (value: 'form' | 'guide') => {
    setActiveView(value);
  };

  return (
    <div 
      className="
        relative min-h-screen 
        bg-[#0f1f3b] 
        text-white 
        overflow-hidden 
        pt-24 // Added top padding to prevent header overlap
      "
    >
      {/* Holographic Background */}
      <HolographicBackground />
      
      {/* Radar Scanner Overlay */}
      <RadarScanner />

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-6xl">
        {/* Futuristic Header */}
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-6">
            <AlertTriangle className="w-12 h-12 text-[#64ffda] mr-4 animate-pulse" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#8892b0]">
              Cyber Incident Response
            </h1>
          </div>
          <p className="max-w-2xl mx-auto text-xl text-[#8892b0]">
            Secure, Confidential, Immediate Threat Mitigation
          </p>
        </motion.header>

        {/* Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center space-x-4 mb-12"
        >
          {views.map((view) => (
            <motion.button
              key={view.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleViewChange(view.value as 'form' | 'guide')}
              className={`
                flex items-center px-6 py-3 rounded-full 
                transition-all duration-300 
                ${activeView === view.value 
                  ? 'bg-[#64ffda] text-[#0a192f] shadow-lg' 
                  : 'bg-[#112240] text-[#8892b0] hover:bg-[#233554]'}
              `}
            >
              {view.icon}
              <span className="ml-2">{view.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Dynamic Content Area */}
        <AnimatePresence mode="wait">
          {activeView === 'form' ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <IncidentForm />
            </motion.div>
          ) : (
            <motion.div
              key="guide"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-[#112240] rounded-2xl p-8 shadow-2xl"
            >
              <h2 className="text- 3xl font-bold mb-8 text-[#64ffda]">
                Incident Response Guide
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Cpu className="mr-3 text-[#64ffda]" />
                    Incident Types
                  </h3>
                  <ul className="space-y-3 text-[#8892b0]">
                    {[
                      'Unauthorized Access',
                      'Data Breach',
                      'Malware Infection',
                      'Phishing Attempt',
                      'Network Intrusion'
                    ].map((type) => (
                      <li 
                        key={type} 
                        className="flex items-center hover:text-[#64ffda] transition"
                      >
                        <Zap className="mr-2 w-4 h-4 text-[#64ffda]" />
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Lock className="mr-3 text-[#64ffda]" />
                    Severity Levels
                  </h3>
                  {[
                    { level: 'Critical', color: 'text-red-500' },
                    { level: 'High', color: 'text-orange-500' },
                    { level: 'Medium', color: 'text-yellow-500' },
                    { level: 'Low', color: 'text-green-500' }
                  ].map((severity) => (
                    <div 
                      key={severity.level} 
                      className={`
                        mb-3 p-3 rounded-lg 
                        bg-[#233554] 
                        ${severity.color} 
                        hover:scale-105 transition
                      `}
                    >
                      {severity.level} Severity
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}