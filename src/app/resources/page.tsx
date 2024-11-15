'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Library, 
  Zap, 
  Shield, 
  Code, 
  Terminal 
} from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { ResourceCard } from '@/components/ResourceCard';
import { categories, resources } from '@/lib/data';
import { Resource } from '@/types';
import dynamic from 'next/dynamic';

// Dynamic import for performance
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false
});

// Define a more specific type for filter
type FilterType = 'All' | 'Trending' | 'New';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredResources, setFilteredResources] = useState<Resource[]>(resources);
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  useEffect(() => {
    const filtered = resources.filter(resource =>
      (activeCategory === 'All' || resource.category === activeCategory) &&
      (activeFilter === 'All' || 
       (activeFilter === 'Trending' && resource.trending) ||
       (activeFilter === 'New' && resource.new)) &&
      (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       resource.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );
    setFilteredResources(filtered);
  }, [activeCategory, searchTerm, activeFilter]);

  const filterButtons = [
    { icon: <Zap className="mr-2" />, label: 'Trending', value: 'Trending' as FilterType },
    { icon: <Shield className="mr-2" />, label: 'All', value: 'All' as FilterType },
    { icon: <Code className="mr-2" />, label: 'New', value: 'New' as FilterType }
  ];

  // Category filter buttons
  const categoryFilterButtons = categories.map(category => ({
    label: category,
    value: category
  }));

  return (
    <div className="relative min-h-screen bg-[#0a192f] text-white overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-6">
            <Library className="w-12 h-12 text-[#64ffda] mr-4" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#8892b0]">
              Cybersecurity Resource Hub
            </h1>
          </div>
          <p className="max-w-2xl mx-auto text-xl text-[#8892b0]">
            Curated knowledge base for cybersecurity professionals and enthusiasts
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64ffda] w-5 h-5" />
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 bg-[#112240] border-[#233554] text-white placeholder-[#8892b0]"
            />
          </div>
        </motion.div>

        {/* Resource Type Filters */}
        <div className="flex justify-center space-x-4 mb-8">
          {filterButtons.map((button) => (
            <motion.button
              key={button.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(button.value)}
              className={`flex items-center px-6 py-2 rounded-full transition-all ${
                activeFilter === button.value 
                  ? 'bg-[#64ffda] text-[#0a192f]' 
                  : 'bg-[#112240] text-[#8892b0]'
              }`}
            >
              {button.icon}
              {button.label}
            </motion.button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-2 mb-12 flex-wrap">
          {categoryFilterButtons.map((category) => (
            <motion.button
              key={category.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category.value 
                  ? 'bg-[#64ffda] text-[#0a192f]' 
                  : 'bg-[#112240] text-[#8892b0]'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1 
                }}
              >
                <ResourceCard resource={resource} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-[#8892b0]"
          >
            <Terminal className="mx-auto mb-4 w-16 h-16 text-[#64ffda]" />
            <p className="text-2xl">No resources found</p>
            <p className="mt-2">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}