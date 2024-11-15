'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, BookOpen, Zap, Terminal, Globe } from 'lucide-react'
import { glossaryTerms } from '@/lib/data'

export default function CyberGlossary() {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    { name: 'All', icon: <BookOpen /> },
    { name: 'Network', icon: <Globe /> },
    { name: 'Security', icon: <Terminal /> },
    { name: 'Advanced', icon: <Zap /> }
  ]

  const filteredTerms = glossaryTerms.filter(term => 
    (activeCategory === 'All' || term.category === activeCategory) &&
    (term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
     term.definition.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  // Animated Background Component
  const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-[#0A192F] via-[#112240] to-[#0A192F] animate-background-shift opacity-30"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0A192F] text-white relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Add padding to prevent header overlap */}
      <div className="container mx-auto px-4 py-16 pt-32 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-[#40CFEA] flex items-center gap-4"
        >
          <Terminal className="text-[#40CFEA]" size={48} />
          Cyber Lexicon
        </motion.h1>

        {/* Search and Category Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex space-x-4"
        >
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search cybersecurity terms..."
              className="w-full p-4 pl-12 bg-[#112240] rounded-xl text-white border-2 border-[#233554] focus:border-[#40CFEA] transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#40CFEA]" 
            />
          </div>

          {/* Category Filters */}
          <div className="flex space-x-2">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.name)}
                className={`p-3 rounded-xl transition-all ${
                  activeCategory === category.name 
                    ? 'bg-[#40CFEA] text-[#0A192F]' 
                    : 'bg-[#112240] text-[#8892B0]'
                }`}
              >
                {category.icon}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Terms Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                delayChildren: 0.3,
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTerms.map((term) => (
            <motion.div 
              key={term.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, 
                  y: 0,
                  transition: { type: 'spring', stiffness: 100 }
                }
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#112240] rounded-xl p-6 border-2 border-transparent hover:border-[#40CFEA] transition-all"
            >
              <div 
                onClick={() => setExpandedTerm(expandedTerm === term.id ? null : term.id)}
                className="cursor-pointer"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-[#40CFEA]">
                    {term.term}
                  </h3>
                  <motion.div
                    animate={{ 
                      rotate: expandedTerm === term.id ? 180 : 0 
                    }}
                  >
                    <Zap 
                      className={`text-[#40CFEA] ${
                        expandedTerm === term.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {expandedTerm === term.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-[#8892B0]"
                    >
                      {term.definition}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results State */}
        {filteredTerms.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-2xl text-[#8892B0]">
              No terms found. Try a different search.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}