'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Lock, 
  Network, 
  Shield 
} from 'lucide-react';
import { preventionTips } from '@/lib/preventionData';
import PreventionTip from '@/components/PreventionTip';
import CyberBackground from '@/components/CyberBackground';
import ThreatVisualization from '@/components/ThreatVisualization';

export default function PreventionPage() {
  return (
    <div className="relative min-h-screen bg-[#0a192f] overflow-hidden pt-24 md:pt-32">
      {/* Cyber Background */}
      <CyberBackground />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="flex flex-col items-center space-y-4">
            <motion.div 
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
              className="bg-teal-500/20 p-6 rounded-full"
            >
              <Shield className="w-16 h-16 text-teal-300" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-teal-100 tracking-tight">
              Cyber Guardian Protocol
            </h1>
          </div>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-teal-100/80">
            Elevate your digital defense with cutting-edge cybersecurity strategies. 
            Transform potential vulnerabilities into impenetrable fortresses.
          </p>
        </motion.div>

        {/* Threat Visualization */}
        <ThreatVisualization />

        {/* Cyber Metrics */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center"
        >
          {[
            { icon: Zap, label: "Real-time Protection", value: "99.7%" },
            { icon: Lock, label: "Threat Mitigation", value: "24/7" },
            { icon: Network, label: "Global Coverage", value: "Global" }
          ].map(({ icon: Icon, label, value }, index) => (
            <motion.div 
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-teal-900/30 backdrop-blur-sm p-8 rounded-xl border border-teal-500/20 hover:scale-105 transition-transform"
            >
              <Icon className="mx-auto mb-4 w-12 h-12 text-teal-300" />
              <h3 className="text-3xl font-bold text-teal-100">{value}</h3>
              <p className="text-teal-200/80 mt-2">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Prevention Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {preventionTips.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PreventionTip tip={tip} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}