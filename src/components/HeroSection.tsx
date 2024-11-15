'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ShieldCheck, Video } from 'lucide-react';
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
      <div className="relative container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl font-bold text-electric-blue leading-tight"
          >
            Cybersecurity Awareness & Protection Platform
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-light-gray"
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
              className="flex items-center justify-center space-x-2 bg-electric-blue text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all w-full sm:w-auto"
            >
              <ShieldCheck />
              <span>Get Protected</span>
            </motion.button>

            <motion.button
              onClick={handleWatchDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 border border-steel-gray text-light-gray px-6 py-3 rounded-full hover:bg-steel-gray/10 transition-all w-full sm:w-auto"
            >
              <Play />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4 text-sm text-gray-400"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((num) => (
                <Image 
                  key={num} 
                  src={`/images/avatar-${num}.png`} 
                  alt={`User  ${num}`}
                  className="w-10 h-10 rounded-full border-2 border-[#0A192F]"
                />
              ))}
              <div className="w-10 h-10 bg-steel-gray/50 rounded-full flex items-center justify-center">
                +10
              </div>
            </div>
            <span>Trusted by 10,000+ Users</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <div className="relative group">
            <div className="cybersecurity-illustration">
              <Image
                src="/images/bghero2.jpg" 
                alt ="Cybersecurity Illustration" 
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-electric-blue/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleWatchDemo}
                  className="bg-white text-electric-blue p-4 rounded-full shadow-lg flex items-center space-x-2"
                >
                  <Video />
                  <span>Preview Demo</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Demo Video Modal */}
      {isDemoModalOpen && (
        <DemoVideoModal 
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
        />
      )}

      {/* Cyber Assessment Modal */}
      {isAssessmentModalOpen && (
        <CyberAssessmentModal 
          isOpen={isAssessmentModalOpen} 
          onClose={() => setIsAssessmentModalOpen(false)} 
        />
      )}
    </>
  );
};

export default HeroSection;