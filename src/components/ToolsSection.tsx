import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Code, 
  Network, 
  Terminal, 
  ExternalLink, 
  Star 
} from 'lucide-react';

interface CyberTool {
  id: number;
  name: string;
  category: 'Vulnerability' | 'Penetration' | 'Network' | 'Monitoring';
  description: string;
  features: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  githubLink: string;
  openSourceScore: number;
  icon: React.ReactNode;
}

const ToolsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toolCategories = [
    'All',
    'Vulnerability',
    'Penetration',
    'Network',
    'Monitoring'
  ];

  const cyberSecurityTools: CyberTool[] = [
    {
      id: 1,
      name: "Nmap",
      category: 'Network',
      description: "Powerful network discovery and security auditing tool for network inventory and vulnerability scanning.",
      features: [
        'Network mapping',
        'Port scanning',
        'Host detection',
        'Service/version detection'
      ],
      difficulty: 'Intermediate',
      githubLink: "https://github.com/nmap/nmap",
      openSourceScore: 5,
      icon: <Network />
    },
    {
      id: 2,
      name: "Metasploit Framework",
      category: 'Penetration',
      description: "Comprehensive penetration testing platform for developing and executing exploit code.",
      features: [
        'Exploit development',
        'Vulnerability verification',
        'Payload generation',
        'Post-exploitation tools'
      ],
      difficulty: 'Advanced',
      githubLink: "https://github.com/rapid7/metasploit-framework",
      openSourceScore: 4,
      icon: <Terminal />
    },
    {
      id: 3,
      name: "OWASP ZAP",
      category: 'Vulnerability',
      description: "Free, open-source web application security scanner for finding vulnerabilities in web applications.",
      features: [
        'Automated scanning',
        'Web application testing',
        'Vulnerability detection',
        'Active/passive scanning'
      ],
      difficulty: 'Beginner',
      githubLink: "https://github.com/zaproxy/zaproxy",
      openSourceScore: 5,
      icon: <Shield />
    },
    {
      id: 4,
      name: "Wireshark",
      category: 'Network',
      description: "World's most popular network protocol analyzer for network troubleshooting and analysis.",
      features: [
        'Packet capture',
        'Deep inspection',
        'Live capture',
        'Multi-platform support'
      ],
      difficulty: 'Intermediate',
      githubLink: "https://github.com/wireshark/wireshark",
      openSourceScore: 5,
      icon: <Code />
    }
  ];

  const filteredTools = cyberSecurityTools.filter(tool => 
    (selectedCategory === null || selectedCategory === 'All' || tool.category === selectedCategory) &&
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-16 bg-dark-background">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-electric-blue mb-4"
        >
          Cybersecurity Toolkit
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-light-gray max-w-2xl mx-auto"
        >
          Open-source tools for comprehensive cybersecurity analysis and protection.
        </motion.p>
      </div>

      {/* Filters and Search */}
      < div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start space-x-2">
          {toolCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all
                ${selectedCategory === category || (!selectedCategory && category === 'All')
                  ? 'bg-electric-blue text-white'
                  : 'bg-steel-gray/30 text-light-gray hover:bg-steel-gray/50'}
              `}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <div className="relative mt-4 md:mt-0">
          <input 
            type="text" 
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
              w-full md:w-64 px-4 py-2 
              bg-steel-gray/30 
              rounded-full 
              text-white 
              focus:outline-none 
              focus:ring-2 
              focus:ring-electric-blue
            "
          />
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="bg-steel-gray/30 rounded-xl p-6 hover:bg-steel-gray/50 transition-all"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-electric-blue">{tool.icon}</div>
              <div className="flex items-center space-x-1">
                {[...Array(tool.openSourceScore)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-yellow-400" 
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {tool.name}
            </h3>
            <p className="text-light-gray mb-4 line-clamp-3">
              {tool.description}
            </p>
            <div className="mb-4">
              <span 
                className={`
                  px-3 py-1 rounded-full text-sm 
                  ${tool.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' : 
                    tool.difficulty === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' : 
                    'bg-red-500/20 text-red-400'}
                `}
              >
                {tool.difficulty} Level
              </span>
            </div>
            <div className="space-y-2">
              <h4 className="text-md font-semibold text-electric-blue">
                Key Features:
              </h4>
              <ul className="list-disc list-inside text-light-gray">
                {tool.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center mt-4">
              <a
                href={tool.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric-blue hover:underline flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center text-light-gray py-12">
          No tools found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default ToolsSection;