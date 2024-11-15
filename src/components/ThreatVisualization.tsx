'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Cpu, 
  Network, 
  Lock 
} from 'lucide-react';

export default function ThreatVisualization() {
  return (
    <div className="relative mb-16 py-12">
      <div className="absolute inset-0 bg-teal-900/20 blur-2xl rounded-xl"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-100 mb-8">
          Threat Landscape Visualization
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { 
              icon: ShieldCheck, 
              title: "Defense Layers", 
              description: "Multi-tier security architecture" 
            },
            { 
              icon: Cpu, 
              title: "Threat Detection", 
              description: "AI-powered monitoring" 
            },
            { 
              icon: Network, 
              title: "Network Scanning", 
              description: "Continuous vulnerability assessment" 
            },
            { 
              icon: Lock, 
              title: "Access Control", 
              description: "Role-based security measures" 
            }
          ].map(({ icon: Icon, title, description }, index) => (
            <motion.div 
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-teal-800/30 backdrop-blur-sm p-6 rounded-xl border border-teal-500/20 hover:scale-105 transition-transform"
            >
              <Icon className="mx-auto mb-4 w-12 h-12 text-teal-300" />
              <h3 className="text-xl font-bold text-teal-100">{title}</h3>
              <p className="text-teal-200/80">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}