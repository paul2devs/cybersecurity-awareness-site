import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Globe, 
  Lock 
} from 'lucide-react';

interface StatisticItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  bgColor: string;
}

const StatisticsSection: React.FC = () => {
  const statisticsData: StatisticItem[] = [
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "98.7%",
      label: "Threat Detection Accuracy",
      color: "text-green-400",
      bgColor: "bg-green-400/10 hover:bg-green-400/20"
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "65M+",
      label: "Threats Prevented",
      color: "text-electric-blue",
      bgColor: "bg-electric-blue/10 hover:bg-electric-blue/20"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "142",
      label: "Countries Protected",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10 hover:bg-purple-400/20"
    },
    {
      icon: <Lock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "24/7",
      label: "Real-time Monitoring",
      color: "text-red-400",
      bgColor: "bg-red-400/10 hover:bg-red-400/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20  
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12  
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center mb-10 sm:mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-electric-blue mb-3 sm:mb-4"
        >
          Cybersecurity Stats
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-base sm:text-lg md:text-xl text-light-gray max-w-2xl mx-auto px-4"
        >
          Get top-notch protection and clear insights for safe browsing worldwide.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
      >
        {statisticsData.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              rotate: 3,  
              transition: { 
                type: 'spring', 
                stiffness: 300 
              }
            }}
            className={`
              ${stat.bgColor} 
              border border-white/10 
              rounded-xl 
              p-4 sm:p-6 
              text-center 
              transition-all 
              duration-300 
              hover:shadow-2xl 
              hover:border-white/20
            `}
          >
            <div className={`mb-3 sm:mb-4 flex justify-center ${stat.color}`}>
              {stat.icon}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
              {stat.value}
            </h3>
            <p className="text-xs sm:text-sm text-light-gray">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8 sm:mt-12"
      >
        <div 
          className="
            inline-block 
            bg-electric-blue/10 
            border border-electric-blue/30 
            px-4 sm:px-6 
            py-2 sm:py-3 
            rounded-full
            hover:bg-electric-blue/20
            transition-all
            duration-300
          "
        >
          <p className="text-xs sm:text-base text-light-gray flex items-center justify-center space-x-2">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-electric-blue" />
            <span>Real-time Global Cybersecurity Intelligence</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default StatisticsSection;