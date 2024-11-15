'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const DemoVideoModal: React.FC<DemoVideoModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="demo-video-modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`
            bg-[#112240] 
            rounded-2xl 
            w-full 
            max-w-4xl 
            p-6 
            relative 
            shadow-2xl
            ${isMobile ? 'mx-4' : ''} `}
        >
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-white hover:text-electric-blue"
          >
            <X />
          </button>
          <h2 className="text-xl text-white">Demo Video</h2>
          <div className="mt-4">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/example" 
              title="Demo Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoVideoModal;