'use client';

import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      {categories.map(category => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            px-4 py-2 rounded-full transition-all duration-300
            ${activeCategory === category 
              ? 'bg-[#64FFDA] text-[#0A192F]' 
              : 'bg-[#112240] text-[#8892B0] hover:bg-[#233554]'}
          `}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};