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
  Mail} from 'lucide-react';
import { IncidentForm } from '@/components/IncidentForm';
import { HolographicBackground } from '@/components/HolographicBackground';
import { RadarScanner } from '@/components/RadarScanner';

const INCIDENT_TYPES = [
  {
    icon: <Mail className="w-6 h-6 text-cyan-400" />,
    title: 'Suspicious Emails',
    description: 'Phishing attempts or malicious email content'
  },
  {
    icon: <Lock className="w-6 h-6 text-red-400" />,
    title: 'Unauthorized Access',
    description: 'Unauthorized system or data access attempts'
  },
  {
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    title: 'Device Issues',
    description: 'Lost, stolen, or compromised devices'
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: 'Malware Detection',
    description: 'Virus or malware infections'
  },
  {
    icon: <Network className="w-6 h-6 text-green-400" />,
    title: 'System Anomalies',
    description: 'Suspicious system behavior or performance'
  }
];

const SEVERITY_LEVELS = [
  {
    level: 'Critical',
    color: 'bg-red-900/30 border-red-500',
    impact: 'Severe business impact, service outage, confirmed data breach',
    textColor: 'text-red-400'
  },
  {
    level: 'High',
    color: 'bg-orange-900/30 border-orange-500',
    impact: 'Significant impact on business operations, potential data exposure',
    textColor: 'text-orange-400'
  },
  {
    level: 'Medium',
    color: 'bg-yellow-900/30 border-yellow-500',
    impact: 'Limited impact, easily containable business disruption',
    textColor: 'text-yellow-400'
  },
  {
    level: 'Low',
    color: 'bg-green-900/30 border-green-500',
    impact: 'Minimal impact, no service disruption or data risk',
    textColor: 'text-green-400'
  }
];

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

  return (
    <div className="relative min-h-screen bg-[#0a192f] text-white overflow-hidden pt-24">
      <HolographicBackground />
      <RadarScanner />

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
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
          className="flex justify-center space-x-4 mb-12"
        >
          {views.map((view) => (
            <motion.button
              key={view.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveView(view.value as 'form' | 'guide')}
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
            >
              <IncidentForm />
            </motion.div>
          ) : (
            <motion.div
              key="guide"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-12"
            >
              {/* Incident Types Section */}
              <div className="bg-[#112240] rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-8 text-[#64ffda] flex items-center">
                  <Cpu className="mr-4" /> Incident Types to Report
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {INCIDENT_TYPES.map((incident) => (
                    <motion.div
                      key={incident.title}
                      whileHover={{ scale: 1.05 }}
                      className="
                        bg-[#0a192f] 
                        border border-[#233554] 
                        rounded-xl 
                        p-6 
                        flex 
                        flex-col 
                        items-start 
                        space-y-4
                        hover:border-[#64ffda]
                        transition-all
                      "
                    >
                      {incident.icon}
                      <div>
                        <h3 className="text-xl font-semibold text-[#64ffda] mb-2">
                          {incident.title}
                        </h3>
                        <p className="text-[#8892b0]">
                          {incident.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div> {/* Severity Levels Section */}
              <div className="bg-[#112240] rounded-2xl p-8 shadow-2xl mt-12">
                <h2 className="text-3xl font-bold mb-8 text-[#64ffda] flex items-center">
                  <Lock className="mr-4" /> Severity Levels
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {SEVERITY_LEVELS.map((severity) => (
                    <div 
                      key={severity.level} 
                      className={`
                        p-6 rounded-lg 
                        ${severity.color} 
                        border-l-4 border-opacity-50 
                        hover:scale-105 transition
                      `}
                    >
                      <h3 className={`text-xl font-semibold ${severity.textColor}`}>
                        {severity.level}
                      </h3>
                      <p className="text-[#8892b0]">
                        {severity.impact}
                      </p>
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