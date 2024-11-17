'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  Menu, X, Cpu, Shield, Zap, 
  Newspaper, Globe, Rocket, Target, FileText 
} from 'lucide-react';

const LINK_ICONS = {
  'Home': Globe,
  'Threats': Shield,
  'Prevention': Zap,
  'Tools': Cpu,
  'Resources': FileText, 
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  const links = useMemo(() => [
    { href: '/', label: 'Home' },
    { href: '/threat', label: 'Threats' },
    { href: '/prevention', label: 'Prevention' },
    { href: '/tools', label: 'Tools' },
    { href: '/resources', label: 'Resources' },
    { href: '/courses', label: 'Courses' },
    { href: '/news', label: 'News' },
  ], []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const SCROLL_THRESHOLD = 50;
    const difference = latest - lastScrollY.current;
    
    if (latest > SCROLL_THRESHOLD) {
      setIsScrolled(true);
      
      if (difference > 10) {
        setIsHidden(true);
      } else if (difference < -10) {
        setIsHidden(false);
      }
    } else {
      setIsScrolled(false);
      setIsHidden(false);
    }

    lastScrollY.current = latest;
  });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey) {
      const numKey = parseInt(e.key);
      if (numKey > 0 && numKey <= links.length) {
        window.location.href = links[numKey - 1].href;
      }
    }
  }, [links]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current && 
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const cycleBackground = () => {
    setBackgroundIndex((prev) => (prev + 1) % BACKGROUND_GRADIENTS.length);
  };

  return (
    <>
      {/* Spacer to prevent content from being hidden behind fixed nav */}
      <div className="h-[80px] md:h-[90px]"></div>
      
      <motion.nav 
        ref={navRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ 
          opacity: 1, 
          y: isHidden ? -100 : 0, 
          transition: { 
            duration: 0.3,
            ease: "easeInOut"
          }
        }}
        style={{
          width: '100%',
          willChange: 'transform',
          background: BACKGROUND_GRADIENTS[backgroundIndex],
        }}
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-500 ease-in-out
          ${isScrolled ? 'bg-opacity-90 backdrop-blur-md' : ''}
          ${isHidden ? 'transform -translate-y-full' : ''}
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
              );
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
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}