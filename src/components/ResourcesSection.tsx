import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  Link, 
  Book, 
  Globe, 
  ExternalLink,
  Menu 
} from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  type: 'Whitepaper' | 'Guide' | 'Webinar' | 'Toolkit';
  description: string;
  downloadLink: string;
  icon: React.ReactNode;
  color: string;
  tags: string[];
}

const ResourcesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);

  const resourceCategories = [
    'All',
    'Whitepapers',
    'Guides',
    'Webinars',
    'Toolkits'
  ];

  const cybersecurityResources: Resource[] = [
    {
      id: 1,
      title: "Zero Trust Security Architecture",
      type: 'Whitepaper',
      description: "Comprehensive guide to implementing Zero Trust security model in modern enterprise environments.",
      downloadLink: "/resources/zero-trust-whitepaper.pdf",
      icon: <FileText />,
      color: 'text-blue-400',
      tags: ['Security', 'Enterprise', 'Architecture']
    },
    {
      id: 2,
      title: "Incident Response Playbook",
      type: 'Guide',
      description: "Step-by-step methodology for effective cybersecurity incident detection, containment, and recovery.",
      downloadLink: "/resources/incident-response-guide.pdf",
      icon: <Book />,
      color: 'text-green-400',
      tags: ['Incident Response', 'Security Strategy']
    },
    {
      id: 3,
      title: "Cloud Security Transformation",
      type: 'Whitepaper',
      description: "Exploring modern cloud security challenges and innovative mitigation strategies.",
      downloadLink: "/resources/cloud-security-whitepaper.pdf",
      icon: <Globe />,
      color: 'text-purple-400',
      tags: ['Cloud', 'Security', 'Enterprise']
    },
    {
      id: 4,
      title: "Cybersecurity Threat Landscape 2024",
      type: 'Webinar',
      description: "Expert panel discussion on emerging cyber threats and proactive defense mechanisms.",
      downloadLink: "https://www.enisa.europa.eu/publications/enisa-threat-landscape-2024",
      icon: <Link />,
      color: 'text-red-400',
      tags: ['Threat Intelligence', 'Trends']
    },
    {
      id: 5,
      title: "Penetration Testing Toolkit",
      type: 'Toolkit',
      description: "Comprehensive collection of open-source tools for network vulnerability assessment.",
      downloadLink: "https://pentest-tools.com/",
      icon: <Download />,
      color: 'text-orange-400',
      tags: ['Penetration Testing', 'Tools']
    }
  ];

  const filteredResources = selectedCategory && selectedCategory !== 'All'
  ? cybersecurityResources.filter(resource => resource.type.toLowerCase().includes(selectedCategory.toLowerCase()))
  : cybersecurityResources;

return (
  <div className="container mx-auto px-4 py-16 bg-dark-background">
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-4xl font-bold text-electric-blue mb-4"
      >
        Cybersecurity Resource Center
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-base md:text-xl text-light-gray max-w-2xl mx-auto"
      >
        Explore expert insights, guides, and the latest research on cybersecurity.
      </motion.p>
    </div>

    {/* Mobile Category Dropdown */}
    <div className="md:hidden mb-6">
      <motion.button
        onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
        className="w-full flex justify-between items-center bg-steel-gray/30 px-4 py-2 rounded-lg"
        whileTap={{ scale: 0.95 }}
      >
        <span>{selectedCategory || 'All'} Resources</span>
        <Menu />
      </motion.button>

      {isMobileCategoryOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-2 space-y-2"
        >
          {resourceCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setIsMobileCategoryOpen(false);
              }}
              className={`
                w-full px-4 py-2 rounded-lg text-sm font-medium transition-all text-left
                ${selectedCategory === category || (!selectedCategory && category === 'All')
                  ? 'bg-electric-blue text-white'
                  : 'bg-steel-gray/30 text-light-gray hover:bg-steel-gray/50'}
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>

    {/* Desktop Category Filters */}
    <div className="hidden md:flex justify-center mb-8 space-x-4">
      {resourceCategories.map((category) => (
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

    {/* Resources Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {filteredResources.map((resource) => (
        <motion.div
          key={resource.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          className="bg-steel-gray/30 rounded-xl p-4 md:p-6 hover:bg-steel-gray/50 transition-all"
        >
          <div className="flex justify-between items-center mb-4">
            <div className={`${resource.color} w-8 h-8 md:w-auto md:h-auto`}>{resource.icon}</div>
            <span 
              className={`
                px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm 
                ${resource.type === 'Whitepaper' ? 'bg-blue-500/20 text-blue-400' : 
                  resource.type === 'Guide' ? 'bg-green-500/20 text-green-400' : 
                  resource.type === 'Webinar' ? 'bg-red-500/20 text-red-400' : 
                  'bg-orange-500/20 text-orange-400'}
              `}
            >
              {resource.type}
            </span>
          </div>
          <h3 className="text-base md:text-xl font-semibold text-white mb-2">
            {resource.title}
          </h3>
          <p className="text-light-gray mb-4 text-sm md:text-base line-clamp-3">
            {resource.description}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
            <div className="flex flex-wrap gap-1 md:space-x-2">
              {resource.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-steel-gray/50 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={resource.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-blue hover:underline flex items-center text-sm md:text-base"
            >
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              Download
            </a>
          </div>
        </motion.div>
      ))}
    </div>

    {filteredResources.length === 0 && (
      <div className="text-center text-light-gray py-12">
        No resources found in this category.
      </div>
    )}
  </div>
);
};

export default ResourcesSection;