'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Target, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CyberAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const CyberAssessmentModal: React.FC<CyberAssessmentModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial screen size
    checkMobile();

    // Add event listener to check screen size on resize
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleStartAssessment = () => {
    onClose();
    router.push('/assessment');
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: '50%'
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      y: '50%'
    }
  };

  const assessmentFeatures = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-electric-blue" />,
      title: "Risk Evaluation",
      description: "Comprehensive analysis of your current security posture"
    },
    {
      icon: <Target className="w-6 h-6 text-electric-blue" />,
      title: "Personalized Insights",
      description: "Tailored recommendations for your specific needs"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-electric-blue" />,
      title: "Learning Resources",
      description: "Access to cutting-edge cybersecurity educational materials"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cyber-assessment-modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`
            bg-[#112240] 
            rounded-2xl 
            w-full 
            max-w-md 
            shadow-2xl 
            border-2 
            border-electric-blue/30
            relative
            ${isMobile ? 'mx-4' : ''}
          `}
        >
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="
              absolute 
              top-4 
              right-4 
              text-white 
              hover:text-electric-blue 
              z-10 
              transition-colors 
              duration-300
            "
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Cyber Assessment
              </h2>
              <p className="text-light-gray text-base md:text-lg">
                Unlock insights into your cybersecurity readiness with our comprehensive assessment.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {assessmentFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="
                    bg-steel-gray/20 
                    p-4 
                    rounded-lg 
                    flex 
                    flex-col 
                    items-center 
                    text-center 
                    space-y-2
                    hover:bg-steel-gray/30
                    transition-all
                    duration-300
                  "
                >
                  {feature.icon}
                  <h3 className="text-base font-semibold text-electric-blue">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-light-gray">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
           
            {/* Start Assessment Button */}
            <motion.button 
              onClick={handleStartAssessment} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-full 
                mt-6 
                bg-electric-blue 
                text-white 
                px-6 
                py-3 
                rounded-full 
                hover:bg-opacity-90 
                transition-all 
                flex 
                items-center 
                justify-center 
                space-x-2
                font-semibold
              "
            >
              <span>Start Free Assessment</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CyberAssessmentModal;