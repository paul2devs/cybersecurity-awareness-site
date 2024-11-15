'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { PreventionTip as TipType } from '@/types'; 

interface PreventionTipProps {
  tip: TipType;
}

export default function PreventionTipComponent({ tip }: PreventionTipProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-teal-900/30 backdrop-blur-sm rounded-xl border border-teal-500/20 overflow-hidden" 
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Shield className="w-10 h-10 text-teal-300" />
          <div>
            <h3 className="text-xl font-semibold text-teal-100">{tip.title}</h3>
            <p className="text-teal-200/80">{tip.shortDescription}</p>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4"
            >
              <div>
                <h4 className="text-lg font-semibold text-teal-100 mb-2">Steps</h4>
                {tip.steps.map((step: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 text-teal-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-300" />
                    {step}
                  </div>
                ))}
              </div>

              {tip.applicableThreats && tip.applicableThreats.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-teal-100 mb-2">Applicable Threats</h4>
                  {tip.applicableThreats.map((threat: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-teal-200">
                      <CheckCircle2 className="w-4 h-4 text-teal-300" />
                      {threat}
                    </div>
                  ))}
                </div>
              )}

              {tip.additionalInfo && (
                <div>
                  <h4 className="text-lg font-semibold text-teal-100 mb-2">Additional Information</h4>
                  <p className="text-teal-200/80">{tip.additionalInfo}</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 py-2 bg-teal-500 text-black hover:bg-teal-400 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Learn More <ChevronDown className="w-4 h-4" />
            </>
          )}
        </motion.button >
      </div>
    </motion.div>
  );
}