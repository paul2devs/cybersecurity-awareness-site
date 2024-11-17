'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  Menu, 
  X, 
  Zap, 
  Shield, 
  Globe, 
  Book, 
  Cpu, 
  Newspaper, 
  FileText 
} from 'lucide-react';
import { usePathname } from 'next/navigation'; 

const MENU_ITEMS = [
  { name: 'Home', href: '/', icon: Globe },
  { name: 'Threats', href: '/threat', icon: Zap },
  { name: 'Prevention', href: '/prevention', icon: Shield },
  { name: 'Tools', href: '/tools', icon: Cpu },
  { name: 'Courses', href: '/courses', icon: Book },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'Resources', href: '/resources', icon: FileText }, 
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const currentPath = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current && 
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderGlowEffect = () => (
    <motion.div 
      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
    />
  );

  return (
    <>
      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-[80px] md:h-[90px]"></div>
      
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ 
          opacity: 1, 
          y: isHidden ? -100 : 0, 
          transition: { 
            duration: 0.3,
            ease: "easeInOut"
          }
        }}
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-300 
          ${isScrolled ? 'bg-black/70 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}
          ${isHidden ? 'transform -translate-y-full' : ''}
          border-b border-cyan-500/20
        `}
        style={{
          width: '100%',
          willChange: 'transform'
        }}
      >
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center space-x-4 group relative"
          >
            {renderGlowEffect()}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/logos.png"
 alt="paul2dev logo"
                width={50}
                height={50}
                className="w-12 h-12 rounded-full border-2 border-cyan-500/50"
              />
            </motion.div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Paul2Dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {MENU_ITEMS.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    group flex items-center space-x-2 
                    transition-all duration-300 
                    ${currentPath === link.href 
                      ? 'text-cyan-400 font-bold' 
                      : 'text-gray-300 hover:text-cyan-300'}
                  `}
                >
                  <IconComponent 
                    className={`
                      transition-transform duration-300 
                      group-hover:rotate-12 
                      ${currentPath === link.href ? 'text-cyan-400' : 'text-gray-500'}
                    `} 
                    size={20} 
                  />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {MENU_ITEMS.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        flex items-center space-x-4 
                        py-3 px-4 rounded-lg 
                        transition-all duration-300
                        ${currentPath === link.href 
                          ? 'bg-cyan-500/20 text-cyan-300' 
                          : 'hover:bg-cyan-500/10 text-gray-300'}
                      `}
                    >
                      <IconComponent size={24} />
                      <span className="text-lg">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}