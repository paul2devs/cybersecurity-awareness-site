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
}

const StatisticsSection: React.FC = () => {
  const statisticsData: StatisticItem[] = [
    {
      icon: <Shield className="w-8 h-8" />,
      value: "98.7%",
      label: "Threat Detection Accuracy",
      color: "text-green-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "65M+",
      label: "Threats Prevented",
      color: "text-electric-blue"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "142",
      label: "Countries Protected",
      color: "text-purple-400"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      value: "24/7",
      label: "Real-time Monitoring",
      color: "text-red-400"
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
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-electric-blue mb-4"
        >
          Cybersecurity Stats
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-light-gray max-w-2xl mx-auto"
        >
          Get top-notch protection and clear insights for safe browsing worldwide.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-4 gap-6"
      >
        {statisticsData.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-steel-gray/30 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:bg-steel-gray/50"
          >
            <div className={`mb-4 flex justify-center ${stat.color}`}>
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              {stat.value}
            </h3>
            <p className="text-light-gray">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <div className="inline-block bg-electric-blue/10 border border-electric-blue/30 px-6 py-3 rounded-full">
          <p className="text-light-gray flex items-center justify-center space-x-2">
            <Shield className="w-5 h-5 text-electric-blue" />
            <span>Real-time Global Cybersecurity Intelligence</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default StatisticsSection;