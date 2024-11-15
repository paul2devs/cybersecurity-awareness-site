'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/Button';
import { fetchNews } from '@/lib/api';
import { NewsItem } from '@/types';
import { Newspaper, Loader2, Filter, Search } from 'lucide-react';

// Add the LoadingSkeleton component
const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <motion.div 
        key={i}
        className="bg-[#0a1128] border-2 border-[#1a2b4a] rounded-3xl overflow-hidden animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        <div className="h-56 bg-gray-800" />
        <div className="p-6 space-y-4">
          <div className="flex justify-between">
            <div className="h-4 bg-gray-700 rounded w-1/4" />
            <div className="h-4 bg-gray-700 rounded w-1/4" />
          </div>
          <div className="h-6 bg-gray-700 rounded w-3/4" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded" />
            <div className="h-4 bg-gray-700 rounded w-5/6" />
          </div>
          <div className="flex justify-between">
            <div className="h-10 bg-gray-700 rounded w-1/3" />
            <div className="h-4 bg-gray-700 rounded w-1/4" />
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'ALL' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'>('ALL');

  const loadNews = useCallback(async () => {
    try {
      setLoading(true);
      const result = await fetchNews(page);
      
      if (result.data.length === 0) setHasMore(false);
      else {
        setNews((prev) => [...prev, ...result.data]);
        setHasMore(result.hasMore);
      }
    } catch (err) {
      console.error('Error loading news:', err);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  const filteredNews = news.filter(item => 
    (filter === 'ALL' || item.threat_level === filter) &&
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#030812] text-white pb-16 pt-16">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 bg-cyber-green rounded-full flex items-center justify-center mx-auto mb-6"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <Newspaper className="w-8 h-8 text-white" />
          </motion.div>
          
          <h1 className="text-3xl font-bold mb-4 text-white">
            Latest Cybersecurity News
          </h1>
          <p className="text-lg mb-8 text-muted-text">
            Stay up-to-date with the latest cybersecurity news and trends.
          </p>

          {/* Search and Filter Section */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2 text-gray-400" />
            </div>
            <div className="relative">
              <select
                className="bg-gray-800 text-white rounded-full py-2 pl-4 pr-8 focus:outline-none"
                onChange={(e) => setFilter(e.target.value as 'ALL' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL')}
              >
                <option value="ALL">All Threat Levels</option>
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="CRITICAL">Critical</option>
              </select>
              <Filter className="absolute right-3 top-2 text-gray-400" />
            </div>
          </div>
        </motion.div>

        {/* News Section */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-8">
            <Button onClick={() => setPage((prev) => prev + 1)} variant="default">
              Load More
              <Loader2 className="w-4 h-4 ml-2 animate-spin" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}