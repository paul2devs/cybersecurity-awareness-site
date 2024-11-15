'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  AlertOctagon, 
  ExternalLink 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Threat } from '@/types';

interface ThreatCardProps {
  threat: Threat;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ThreatCard({ threat, isExpanded, onToggle }: ThreatCardProps) {
  return (
    <motion.div 
      className="bg-gradient-to-r from-[#1A1D2B] to-[#112240] border border-[#233554] rounded-xl overflow-hidden shadow-2xl transition-transform transform hover:scale-105"
      whileHover={{ 
        boxShadow: '0 0 20px rgba(0, 255, 212, 0.5)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-56 overflow-hidden">
        <Image 
          src={threat.image}
          alt={threat.name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="bg-[#00FFD4]/10 p-3 rounded-full mr-4">
            {threat.icon ? (
              <span className="text-2xl text-[#00FFD4]">{threat.icon}</span>
            ) : (
              <AlertOctagon className="w-8 h-8 text-[#00FFD4]" />
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#00FFD4]">{threat.name}</h3>
            <p className="text-[#A0AEC0]">{threat.category} Threat</p>
          </div>
        </div>

        <p className="text-gray-300 mb-4 flex-grow">{threat.shortDescription}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 bg-[#0A192F] rounded-lg p-4 mb-4"
            >
              <div className="space-y-2">
                <h4 className="font-semibold text-[#00FFD4]">Details</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {threat.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-[#00FFD4]">Impacts</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {threat.impacts.map((impact, index) => (
                    <li key={index}>{impact}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto flex items-center justify-between">
          <button
            onClick={onToggle}
            className="flex items-center text-[#00FFD4] hover:text-[#00FFD4]/80 focus:outline-none"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="ml-2" />
              </>
            ) : (
              <>
                <span>Show More</span>
                <ChevronDown className="ml-2" />
              </>
            )}
          </button>

          {threat.preventionId && (
            <Link 
              href={`/prevention/${threat.preventionId}`} 
              className="flex items-center text-blue-400 hover:text-blue-300"
            >
              <span>See Prevention</span>
              <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}