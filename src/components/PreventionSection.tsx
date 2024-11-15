import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Filter, 
  AlertTriangle, 
  CheckCircle 
} from 'lucide-react';

interface PreventionStrategy {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  steps: string[];
}

const PreventionSection: React.FC = () => {
  const [activeStrategy, setActiveStrategy] = useState<number | null>(null);

  const preventionStrategies: PreventionStrategy[] = [
    {
      id: 1,
      title: "Multi-Factor Authentication",
      description: "Enhance account security by implementing multiple verification layers.",
      icon: <Lock className="w-10 h-10" />,
      steps: [
        "Enable 2-factor authentication",
        "Use authenticator apps",
        "Implement biometric verification",
        "Regularly update authentication methods"
      ]
    },
    {
      id: 2,
      title: "Network Segmentation",
      description: "Divide network into secure, controlled segments to limit potential breach impact.",
      icon: <Filter className="w-10 h-10" />,
      steps: [
        "Create isolated network zones",
        "Implement strict access controls",
        "Use VLANs and firewalls",
        "Monitor inter-segment traffic"
      ]
    },
    {
      id: 3,
      title: "Continuous Monitoring",
      description: "Real-time threat detection and proactive security management.",
      icon: <AlertTriangle className="w-10 h-10" />,
      steps: [
        "Deploy advanced threat detection systems",
        "Use AI-powered monitoring tools",
        "Set up real-time alerts",
        "Conduct regular security audits"
      ]
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
    hidden: { opacity: 0, y: 50 },
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
    <div className="container mx-auto px-4 py-16 bg-dark-background">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-electric-blue mb-4"
        >
          Proactive Cybersecurity Strategies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-light-gray max-w-2xl mx-auto"
        >
          Use strong prevention methods to protect your digital world.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8"
      >
        {preventionStrategies.map((strategy) => (
          <motion.div
            key={strategy.id}
            variants={itemVariants}
            className={`
              bg-steel-gray/30 rounded-xl p-6 cursor-pointer 
              transition-all duration-300 
              ${activeStrategy === strategy.id 
                ? 'border-2 border-electric-blue' 
                : 'hover:bg-steel-gray/50'}
            `}
            onClick={() => setActiveStrategy(
              activeStrategy === strategy.id ? null : strategy.id
            )}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-electric-blue">{strategy.icon}</div>
              <CheckCircle 
                className={`
                  w-6 h-6 
                  ${activeStrategy === strategy.id 
                    ? 'text-green-500' 
                    : 'text-light-gray opacity-50'}
                `} 
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {strategy.title}
            </h3>
            <p className="text-light-gray mb-4">
              {strategy.description}
            </p>
            {activeStrategy === strategy.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4"
              >
                <h4 className="text-md font-bold text-electric-blue mb-2">
                  Implementation Steps:
                </h4>
                <ul className="space-y-2">
                  {strategy.steps.map((step, index) => (
                    <li 
                      key={index} 
                      className="flex items-center space-x-2 text-light-gray"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
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
            <span>Comprehensive Cybersecurity Prevention Framework</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PreventionSection;