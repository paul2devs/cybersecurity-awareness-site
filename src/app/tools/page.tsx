"use client";

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter 
} from 'lucide-react';

import ToolCard from '@/components/ToolCard';
import HiddenTool from '@/components/HiddenTool';
import CyberBackground from '@/components/CyberBackground'; 
import { tools, hiddenTools } from '@/lib/toolData';
import { Tool } from '@/types';

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredTools, setFilteredTools] = useState<Tool[]>([...tools, ...hiddenTools]);

  const categories = [
    'All', 
    'Network Security', 
    'Penetration Testing', 
    'Encryption', 
    'Monitoring'
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterTools(query, activeCategory);
  };

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    filterTools(searchQuery, category);
  };

  const filterTools = useCallback((query: string, category: string) => {
    let result = [...tools, ...hiddenTools];

    if (category !== 'All') {
      result = result.filter(tool => tool.category === category);
    }

    if (query) {
      result = result.filter(tool => 
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredTools(result);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A192F] text-white overflow-hidden pt-[80px]">  {/* Added pt-[80px] */}
      <CyberBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-[#64FFDA]">
            Cyber Arsenal
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-[#8892B0]">
            Cutting-edge tools to fortify your digital defenses and explore the frontiers of cybersecurity
          </p>
        </motion.div>

        <div className="flex space-x-4 mb-8">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Search tools..." 
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 bg-[#112240] border border-[#233554] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64FFDA]" />
          </div>
          <button 
            onClick={() => {/* Advanced filter logic */}}
            className="bg-[#112240] p-3 rounded-lg hover:bg-[#233554]"
          >
            <Filter className="text-[#64FFDA]" />
          </button>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`
                px-4 py-2 rounded-full transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-[#64FFDA] text-[#0A192F]' 
                  : 'bg-[#112240] text-[#8892B0] hover:bg-[#233554]'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence>
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1 
                }}
              >
                {tool.id.startsWith('hidden-tool') ? (
                  <HiddenTool tool={tool} />
                ) : (
                  <ToolCard tool={tool} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}