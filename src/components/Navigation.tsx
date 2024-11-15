'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Cpu, Shield, Zap, Book, 
  Newspaper, Globe, Rocket, Target 
} from 'lucide-react';

const LINK_ICONS = {
  'Home': Globe,
  'Threats': Shield,
  'Prevention': Zap,
  'Tools': Cpu,
  'Resources': Book,
  'Courses': Rocket,
  'News': Newspaper
} as const;

const BACKGROUND_GRADIENTS = [
  'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
  'bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600',
  'bg-gradient-to-r from-orange-400 via-red-500 to-pink-500',
] as const;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const pathname = usePathname();

  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/threat', label: 'Threats' },
    { href: '/prevention', label: 'Prevention' },
    { href: '/tools', label: 'Tools' },
    { href: '/resources', label: 'Resources' },
    { href: '/courses', label: 'Courses' },
    { href: '/news', label: 'News' },
  ] as const;

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey) {
      const numKey = parseInt(e.key);
      if (numKey > 0 && numKey <= links.length) {
        window.location.href = links[numKey - 1].href;
      }
    }
  }, [links]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const cycleBackground = () => {
    setBackgroundIndex((prev) => (prev + 1) % BACKGROUND_GRADIENTS.length);
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        ${BACKGROUND_GRADIENTS[backgroundIndex]} 
        transition-all duration-500 ease-in-out
      `}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <Target className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-bold text-white">CyberShield</h1>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => {
            const Icon = LINK_ICONS[link.label as keyof typeof LINK_ICONS];
            return (
              <motion.div 
                key={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className={`
                    flex items-center space-x-2 
                    px-3 py-2 rounded-xl 
                    transition-all duration-300
                    ${pathname === link.href 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/70 hover:bg-white/10'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              </motion.div>
            )
          })}
          
          {/* Background Cycle Button */}
          <motion.button
            onClick={cycleBackground}
            whileHover={{ rotate: 360 }}
            className="text-white/50 hover:text-white transition-all"
          >
            <Zap className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {links.map((link, mapIndex) => {
                const Icon = LINK_ICONS[link.label as keyof typeof LINK_ICONS];
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: mapIndex * 0.1 } 
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: 50,
                      transition: { delay: (links.length - mapIndex) * 0.1 } 
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex items-center space-x-4 
                        text-2xl font-bold
                        ${pathname === link.href 
                          ? 'text-white' 
                          : 'text-white/50 hover:text-white'
                        }
                      `}
                    >
                      <Icon className="w-8 h-8" />
                      <span>{link.label}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}