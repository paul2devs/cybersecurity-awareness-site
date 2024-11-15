
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Resource } from '@/types';
import { categoryIcons } from '@/lib/data';

export function ResourceCard({ resource }: { resource: Resource }) {
  const IconComponent = categoryIcons[resource.category];

  const getDifficultyColor = () => {
    switch (resource.difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-blue-500/20 text-blue-400';
    }
  };

  return (
    <motion.div 
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 15px rgba(100, 255, 218, 0.2)'
      }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#64ffda]/20 to-[#8892b0]/20 rounded-xl opacity-50 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-lg"></div>
      
      <div className="relative bg-[#112240] border border-[#233554] rounded-xl overflow-hidden p-6 h-full flex flex-col">
        {/* Top section with icon and badges */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-4">
            <div className="bg-[#64ffda]/10 p-3 rounded-full">
              <IconComponent className="w-6 h-6 text-[#64ffda]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#ccd6f6] line-clamp-2">
                {resource.title}
              </h3>
            </div>
          </div>

          {/* Trending or New Badge */}
          {(resource.trending || resource.new) && (
            <Badge 
              variant="outline" 
              className={`
                ${resource.trending ? 'bg-orange-500/20 text-orange-400' : ''}
                ${resource.new ? 'bg-purple-500/20 text-purple-400' : ''}
                flex items-center
              `}
            >
              {resource.trending && <TrendingUp className="mr-1 w-4 h-4" />}
              {resource.new && <Star className="mr-1 w-4 h-4" />}
              {resource.trending ? 'Trending' : 'New'}
            </Badge>
          )}
        </div>

        {/* Description */}
        <p className="text-[#8892b0] mb-4 flex-grow line-clamp-3">
          {resource.description}
        </p>

        {/* Tags and Difficulty */}
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.difficulty && (
            <Badge 
              variant="secondary" 
              className={`${getDifficultyColor()} text-xs`}
            >
              {resource.difficulty}
            </Badge>
          )}
          {resource.tags?.slice(0, 3).map(tag => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="bg-[#233554] text-[#64ffda] text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Button */}
        <motion.a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-auto block"
        >
          <div className="w-full bg-[#64ffda]/10 hover:bg-[#64ffda]/20 text-[#64ffda] 
            py-3 rounded-lg text-center flex items-center justify-center 
            transition duration-300 ease-in-out"
          >
            View Resource
            <ExternalLink className="ml-2 w-4 h-4" />
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
}