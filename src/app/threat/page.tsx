'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Lock, 
  AlertTriangle, 
  Search, 
  X 
} from 'lucide-react';
import { threats } from '@/lib/threatData';
import ThreatCard from '@/components/ThreatCard';

type ThreatCategory = {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
};

export default function ThreatsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [severityFilter, setSeverityFilter] = useState<number | null>(null);

  const threatCategories: ThreatCategory[] = [
    { 
      name: 'Network', 
      icon: <Zap className="mr-2" />, 
      color: 'bg-blue-500',
      description: 'Threats targeting network infrastructure'
    },
    { 
      name: 'Social', 
      icon: <Lock className="mr-2" />, 
      color: 'bg-purple-500',
      description: 'Threats exploiting human psychology'
    },
    { 
      name: 'Advanced', 
      icon: <AlertTriangle className="mr-2" />, 
      color: 'bg-red-500',
      description: 'Sophisticated and complex threats'
    },
    { 
      name: 'Physical', 
      icon: <Shield className="mr-2" />, 
      color: 'bg-green-500',
      description: 'Tangible security risks'
    }
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleCategory = (categoryName: string) => {
    setActiveCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const filteredThreats = useMemo(() => {
    return threats.filter(threat => {
      const matchesSearch = searchTerm.length === 0 || 
        threat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        threat.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

      
      const matchesCategory = activeCategories.length === 0 || 
        activeCategories.includes(threat.category);

      
      const matchesSeverity = severityFilter === null || 
        threat.severity === severityFilter;

      return matchesSearch && matchesCategory && matchesSeverity;
    });
  }, [searchTerm, activeCategories, severityFilter]);

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-br from-[#0A0D1F] to-[#1A1D2B] text-white"
      style={{ paddingTop: '100px' }}
    >
      <div className="container mx-auto px-4">
        {/* Search and Filters */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Search Input */}
          <div className="relative">
            <input 
              type="text"
              placeholder="Search threats..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 bg-[#112240] text-white rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-[#00FFD4]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Category Filters */}
          <div>
            <div className="flex flex-wrap gap-2">
              {threatCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => toggleCategory(category.name)}
                  className={`
                    flex items-center px-3 py-1 rounded-full text-sm
                    ${activeCategories.includes(category.name) 
                      ? `${category.color} text-white` 
                      : 'bg-[#112240] text-gray-300'}
                  `}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Severity Filter */}
          <div>
            <div className="flex items-center space-x-2">
              <span>Severity:</span>
              {[1, 2, 3].map((level) => (
                <button
                  key={level}
                  onClick={() => setSeverityFilter(level)}
                  className={`
                    px-3 py-1 rounded-full
                    ${severityFilter === level 
                      ? 'bg-red-500 text-white' 
                      : 'bg-[#112240] text-gray-300'}
                  `}
                >
                  {level}
                </button>
              ))}
              {severityFilter && (
                <button 
                  onClick={() => setSeverityFilter(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#00FFD4]">
            {filteredThreats.length} Threats Identified
          </h2>
        </div>

        {/* Threats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
              }
            }
          }}
        >
          <AnimatePresence>
            {filteredThreats.map((threat, index) => (
              <motion.div
                key={threat.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
              >
                <ThreatCard 
                  threat={threat} 
                  isExpanded={expandedIndex === index} 
                  onToggle={() => handleToggle(index)} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredThreats.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl text-gray-400">
              No threats found matching your criteria
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}