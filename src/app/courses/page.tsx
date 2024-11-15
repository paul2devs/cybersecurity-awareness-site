'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Code, Shield, BookOpen, X } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import { Input } from '@/components/ui/Input';
import { courses } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const FILTER_CATEGORIES = [
    { icon: Globe, label: 'Network' },
    { icon: Code, label: 'Web Security' },
    { icon: Shield, label: 'Ethical Hacking' },
    { icon: BookOpen, label: 'Fundamentals' }
  ];

  const filteredCourses = courses.filter(course => 
    (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) &&
    (selectedFilters.length === 0 || 
     selectedFilters.some(filter => course.tags.includes(filter)))
  );

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedFilters([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030812] via-[#0a1128] to-[#030812] text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Futuristic Header  */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
            Cyber Learning Hub
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock the secrets of cybersecurity with cutting-edge courses designed to transform you into a digital guardian.
          </p>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300" />
              <Input
                type="text"
                placeholder="Explore courses, skills, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-3 bg-[#0a1128] border-cyan-500/20 text-white placeholder-cyan-300/50"
              />
              {(searchTerm || selectedFilters.length > 0) && (
                <button 
                  onClick={clearFilters}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400 hover:text-red-300"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {FILTER_CATEGORIES.map((category) => (
                <motion.button
                  key={category.label}
                  onClick={() => toggleFilter(category.label)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300",
                    selectedFilters.includes(category.label) 
                      ? "bg-cyan-500 text-black" 
                      : "bg-[#0a1128] border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/10"
                  )}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Courses Grid*/}
        <AnimatePresence>
          {filteredCourses.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 space-y-6"
            >
              <h2 className="text-3xl text-cyan-300">No Courses Found</h2>
              <p className="text-gray-400 max-w-md mx-auto">
                Adjust your search or filters to discover more learning paths.
              </p>
              <Button 
                onClick={clearFilters}
                className="bg-cyan-500 text-black hover:bg-cyan-400"
              >
                Reset Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}