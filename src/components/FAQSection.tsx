import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  Info, 
  Shield, 
  Lock 
} from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'General' | 'Security' | 'Technical' | 'Compliance';
  tags: string[];
}

const FAQSection: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const faqCategories = [
    'All',
    'General',
    'Security',
    'Technical',
    'Compliance'
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What is Zero Trust Security?",
      answer: "Zero Trust is a security model that requires strict identity verification for every person and device attempting to access resources on a private network, regardless of whether they are sitting within or outside of the network perimeter.",
      category: 'Security',
      tags: ['Security Model', 'Network Protection']
    },
    {
      id: 2,
      question: "How often should we conduct security audits?",
      answer: "We recommend conducting comprehensive security audits at least quarterly, with continuous monitoring and vulnerability assessments. Critical systems should be reviewed more frequently, potentially monthly or after significant infrastructure changes.",
      category: 'Compliance',
      tags: ['Audit', 'Best Practices']
    },
    {
      id: 3,
      question: "What are the key components of a robust incident response plan?",
      answer: "A comprehensive incident response plan should include: preparation, identification, containment, eradication, recovery, and lessons learned phases. It should define clear roles, communication protocols, and step-by-step procedures for handling various types of security incidents.",
      category: 'Technical',
      tags: ['Incident Response', 'Security Strategy']
    },
    {
      id: 4,
      question: "How do we ensure compliance with data protection regulations?",
      answer: "Ensure compliance by implementing robust data protection measures, conducting regular privacy impact assessments, maintaining detailed documentation, implementing data minimization principles, and establishing clear consent and data handling procedures.",
      category: 'Compliance',
      tags: ['Data Protection', 'Regulations']
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    (selectedCategory === null || selectedCategory === 'All' || faq.category === selectedCategory) &&
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleQuestion = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-dark-background">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-electric-blue mb-4 pt-[20px]"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-light-gray max-w-2xl mx-auto"
        >
          Find answers to common questions about cybersecurity, compliance, and our services.
        </motion.p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start space-x-2">
          {faqCategories.map((category) => (
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
            placeholder="Search FAQs..."
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
              pl-10
            "
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-gray" />
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {filteredFAQs.map((faq) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-steel-gray/30 rounded-xl overflow-hidden"
          >
            <div 
              onClick={() => toggleQuestion(faq.id)}
              className="flex justify-between items-center p-6 cursor-pointer hover:bg-steel-gray/50 transition-all"
            >
              <div className="flex items-center space-x-4">
                {faq.category === 'Security' ? (
                  <Shield className="text-electric-blue" />
                ) : faq.category === 'Compliance' ? (
                  <Lock className="text-electric-blue" />
                ) : (
                  <HelpCircle className="text-electric-blue" />
                )}
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
              </div>
              <ChevronDown 
                className={`
                  text-light-gray 
                  transition-transform 
                  ${activeQuestion === faq.id ? 'rotate-180' : ''}
                `} 
              />
            </div>
            <AnimatePresence>
              {activeQuestion === faq.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="border-t border-steel-gray/50 pt-4">
                    <p className="text-light-gray">{faq.answer}</p>
                    <div className="flex items-center space-x-2 mt-4">
                      <Info className="w-5 h-5 text-electric-blue" />
                      <div className="flex space-x-2">
                        {faq.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-steel-gray/50 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;