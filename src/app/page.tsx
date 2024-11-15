'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { 
  ShieldCheck, 
  Target, 
  BookOpen, 
  Globe, 
  AlertTriangle,
  ClipboardCheck,
  HelpCircle,
  Menu 
} from 'lucide-react';

import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import ThreatsSection from '@/components/ThreatSection';
import PreventionSection from '@/components/PreventionSection';
import CoursesSection from '@/components/CoursesSection';
import ResourcesSection from '@/components/ResourcesSection';
import ToolsSection from '@/components/ToolsSection';
import TestimonialSection from '@/components/TestimonialSection';
import FAQSection from '@/components/FAQSection';


interface Section {
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
  learnMorePath: string;
}


const SectionButton: React.FC<{
  section: Section;
  isActive: boolean;
  onClick: () => void;
}> = React.memo(({ section, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`
        flex items-center space-x-3 px-5 py-2.5 rounded-full
        transition-all duration-300 ease-in-out text-base
        ${isActive 
          ? 'bg-electric-blue text-white' 
          : 'bg-steel-gray text-light-gray hover:bg-opacity-70'}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {React.cloneElement(section.icon as React.ReactElement, { 
        className: 'w-6 h-6 mr-2' 
      })}
      <span className="font-medium">{section.title}</span>
    </motion.button>
  );
});

SectionButton.displayName = 'SectionButton';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobileSectionsOpen, setIsMobileSectionsOpen] = useState(false);

  const sections: Section[] = [
    { 
      title: 'Threats', 
      icon: <AlertTriangle />, 
      component: <ThreatsSection />,
      learnMorePath: '/threat'
    },
    { 
      title: 'Prevention', 
      icon: <ShieldCheck />, 
      component: <PreventionSection />,
      learnMorePath: '/prevention'
    },
    { 
      title: 'Courses', 
      icon: <BookOpen />, 
      component: <CoursesSection />,
      learnMorePath: '/courses'
    },
    { 
      title: 'Tools', 
      icon: <Target />, 
      component: <ToolsSection />,
      learnMorePath: '/tools'
    },
    { 
      title: 'Resources', 
      icon: <Globe />, 
      component: <ResourcesSection />,
      learnMorePath: '/resources'
    },
    { 
      title: 'Report Incident', 
      icon: <ClipboardCheck />, 
      component: (
        <div className="flex flex-col items-center justify-center text-center space-y-6 p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-cyber-primary">
            Cybersecurity Incident Reporting
          </h2>
          <p className="max-w-xl text-base md:text-lg text-gray-300">
            Encountered a security breach or suspicious activity? 
            Quickly report and get immediate guidance from our expert team.
          </p>
          <Link href="/report-incident">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-6 py-3
                bg-electric-blue 
                text-white 
                rounded-full 
                text-base
                hover:bg-opacity-80 
                transition-all 
                duration-300
                font-semibold
              "
            >
              Report an Incident
            </motion.button>
          </Link>
        </div>
      ),
      learnMorePath: '/report-incident'
    },
    { 
      title: 'Quiz', 
      icon: <HelpCircle />, 
      component: (
        <div className="flex flex-col items-center justify-center text-center space-y-6 p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-cyber-primary">
            Cybersecurity Knowledge Quiz
          </h2>
          <p className="max-w-xl text-base md:text-lg text-gray-300">
            Test your cybersecurity awareness and learn about the latest threats 
            and best practices through our interactive quiz.
          </p>
          <Link href="/quiz">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-6 py-3
                bg-electric-blue 
                text-white 
                rounded-full 
                text-base
                hover:bg-opacity-80 
                transition-all 
                duration-300
                font-semibold
              "
            >
              Take a Quiz
            </motion.button>
          </Link>
        </div>
      ),
      learnMorePath: '/quiz'
    }
  ];

 
  const handleSectionChange = useCallback((index: number) => {
    setActiveSection(index);
    setIsMobileSectionsOpen(false);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F] text-white overflow-x-hidden">
      <div className="relative z-10">
        <main className="space-y-16 pt-24 md:pt-32">
          <HeroSection />
          <StatisticsSection />
          
          <div className="container mx-auto px-4">
            {/* Mobile Section Selector */}
            <div className="md:hidden mb-6">
              <motion.button
                onClick={() => setIsMobileSectionsOpen(!isMobileSectionsOpen)}
                className="w-full flex justify-between items-center bg-steel-gray/30 px-4 py-3 rounded-lg text-base"
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-base font-medium">{sections[activeSection].title} Section</span>
                <Menu className="w-6 h-6" />
              </motion.button>

              {isMobileSectionsOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-2 space-y-2"
                >
                  {sections.map((section, index) => (
                    <motion.button
                      key={section.title}
                      onClick={() => handleSectionChange(index)}
                      className={`
                        w-full px-4 py-3 rounded-lg text-base font-medium transition-all text-left
                        ${activeSection === index
                          ? 'bg-electric-blue text-white'
                          : 'bg-steel-gray/30 text-light-gray hover:bg-steel-gray/50'}
                      `}
                    >
                      {section.title}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Desktop Section Buttons */}
            <div className="hidden md:flex justify-center mb-12 space-x-2 md:space-x-4 overflow-x-auto scrollbar-hide">
              {sections.map((section, index) => (
                <SectionButton
                  key={section.title}
                  section={section}
                  isActive={activeSection === index}
                  onClick={() => handleSectionChange(index)}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  type: "tween",
                  duration: 0.3 
                }}
                className="min-h-[600px] bg-[#112240] rounded-2xl p-8 shadow-2xl relative pb-20" 
              >
                <div className="space-y-6">
                  {sections[activeSection].component}
                </div>
                {activeSection !== 5 && activeSection !== 6 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <Link href={sections[activeSection].learnMorePath}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                          px-6 py-3 
                          bg-electric-blue 
                          text-white 
                          rounded-full 
                          flex items-center 
                          space-x-2 
                          text-base
                          hover:bg-opacity-80 
                          transition-all 
                          duration-300
                        "
                      >
                        Learn More
                      </motion.button>
                    </Link>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <TestimonialSection />
          <FAQSection />
        </main>
      </div>
    </div>
  );
}