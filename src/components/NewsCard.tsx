'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowUpRight, ShieldAlert, Tag, Globe } from 'lucide-react';
import Image from 'next/image';
import { NewsItem } from '@/types';
import { useState } from 'react';

const THREAT_COLORS = {
  LOW: 'bg-green-500',
  MEDIUM: 'bg-yellow-500',
  HIGH: 'bg-orange-500',
  CRITICAL: 'bg-red-600'
};

export default function NewsCard({ news }: { news: NewsItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedDate = new Date(news.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div 
      className="relative bg-[#0a1128] border-2 border-[#1a2b4a] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:border-[#3cc3de]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Threat Level Indicator */}
      {news.threat_level && (
        <div className={`absolute top-4 right-4 z-10 ${THREAT_COLORS[news.threat_level]} text-white px-3 py-1 rounded-full text-xs flex items-center gap-1`}>
          <ShieldAlert className="w-4 h-4" />
          {news.threat_level}
        </div>
      )}

      {/* News Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={news.imageUrl}
          alt={news.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/80 to-transparent" />
      </div>

      {/* News Content */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          {news.source && (
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Globe className="w-4 h-4" />
              <span>{news.source}</span>
            </div>
          )}
        </div>

        <h3 className="text-2xl font-bold text-[#3cc3de] line-clamp-2">
          {news.title}
        </h3>

        <p className="text-gray-300 line-clamp-3">
          {news.description}
        </p>

        {/* Tags */}
        {news.tags && (
          <div className="flex flex-wrap gap-2">
            {news.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-[#1a2b4a] text-[#3cc3de] px-2 py-1 rounded-full text-xs flex items-center gap-1"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        )}

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-gray-300 mt-4"
            >
              <p>{news.content}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between items-center mt-4">
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3cc3de] text-[#0a1128] hover:bg-[#1a2b4a] hover:text-[#3cc3de] font-medium transition-colors px-4 py-2 rounded-full"
            onClick={(e) => e.stopPropagation()}
          >
            Read More
            <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <ArrowUpRight className="w-4 h-4" />
            </motion.span>
          </a>

          <motion.div 
            className="text-sm text-gray-500 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Collapse' : 'Expand Details'}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}