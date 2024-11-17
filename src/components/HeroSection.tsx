'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ShieldCheck, Video, Lock } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const DemoVideoModal = dynamic(() => import('@/components/DemoVideoModal'), {
  ssr: false
});
const CyberAssessmentModal = dynamic(() => import('@/components/CyberAssessmentModal'), {
  ssr: false
});

const HeroSection: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const handleGetProtected = () => {
    setIsAssessmentModalOpen(true);
  };

  const handleWatchDemo = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <>
      <div className="relative container mx-auto px-4 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 order-2 md:order-1"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-electric-blue leading-tight tracking-tight"
          >
            Cybersecurity Awareness & Protection Platform
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-light-gray font-medium"
          >
            Empower yourself with cutting-edge cybersecurity knowledge, 
            real-time threat detection, and proactive protection strategies.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.button
              onClick={handleGetProtected}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 bg-electric-blue text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all w-full sm:w-auto font-semibold"
            >
              <ShieldCheck />
              <span>Get Protected</span>
            </motion.button>

            <motion.button
              onClick={handleWatchDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 border border-steel-gray text-light-gray px-6 py-3 rounded-full hover:bg-steel-gray/10 transition-all w-full sm:w-auto font-semibold"
            >
              <Play />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-sm text-light-gray"
          >
            Trusted by Security Professionals Worldwide
          </motion.div>
        </motion.div>

        {/* Desktop Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block order-1 md:order-2"
        >
          <div className="relative group">
            <div className="cybersecurity-illustration">
              <Image
                src="/images/bghero2.jpg" 
                alt="Cybersecurity Illustration" 
                width={600}
                height={400}
                priority
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-electric-blue/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleWatchDemo}
                  className="bg-white text-electric-blue p-3 sm:p-4 rounded-full shadow-lg flex items-center space-x-2"
                >
                  <Video className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-xs sm:text-base">Preview Demo</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Alternative Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden order-1 md:order-2 flex items-center justify-center"
        >
          <div className="bg-electric-blue/10 rounded-2xl p-6 aspect-video w-full flex items-center justify-center">
            <div className="text-center space-y-4">
              <Lock 
                className="mx-auto text-electric-blue" 
                size={48} 
              />
              <div>
                <h2 className="text-lg font-semibold text-electric-blue mb-2">
                  Protect Your Digital World
                </h2>
                <p className="text-sm text-light-gray mb-4">
                  Comprehensive cybersecurity solutions at your fingertips
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Demo Video Modal */}
      <DemoVideoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Cyber Assessment Modal */}
      <CyberAssessmentModal 
        isOpen={isAssessmentModalOpen} 
        onClose={() => setIsAssessmentModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;