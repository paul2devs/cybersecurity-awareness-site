"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X } from "lucide-react";

import ToolCard from "@/components/ToolCard";
import HiddenTool from "@/components/HiddenTool";
import CyberBackground from "@/components/CyberBackground";
import { tools, hiddenTools } from "@/lib/toolData";
import { Tool } from "@/types";

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTools, setFilteredTools] = useState<Tool[]>([...tools, ...hiddenTools]);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterTools(query);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filterTools = useCallback((query: string) => {
    let result = [...tools, ...hiddenTools];

    if (query) {
      result = result.filter((tool) =>
        tool.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredTools(result);
  }, []);

  useEffect(() => {
    filterTools(searchQuery);
  }, [searchQuery, filterTools]);

  return (
    <div className="relative min-h-screen bg-[#0A192F] text-white overflow-hidden pt-[80px]">
      <CyberBackground />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-[#64FFDA]">
            Cyber Arsenal
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-[#8892B0]">
            Cutting-edge tools to fortify your digital defenses and explore the frontiers of cybersecurity
          </p>
        </motion.div>

        <div className="flex space-x-4 mb-8">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 bg-[#112240] border border-[#233554] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64FFDA]" />
          </div>
          <button
            onClick={handleOpenModal}
            className="bg-[#112240] p-3 rounded-lg hover:bg-[#233554]"
          >
            <Filter className="text-[#64FFDA]" />
          </button>
        </div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm"
 onClick={handleCloseModal}
            >
              <div className="flex items-center justify-center min-h-screen">
                <div className="bg-[#112240] rounded-lg p-6 max-w-md w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-[#64FFDA]">Select a Tool</h2>
                    <button onClick={handleCloseModal}>
                      <X className="text-[#64FFDA]" />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Search tools..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full px-4 py-2 mb-4 bg-[#233554] border border-[#233554] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
                  />
                  <div className="max-h-60 overflow-y-auto">
                    {filteredTools.map((tool) => (
                      <div key={tool.id} className="py-2">
                        <ToolCard tool={tool} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
              >
                {tool.id.startsWith("hidden-tool") ? (
                  <HiddenTool tool={tool} />
                ) : (
                  <ToolCard tool={tool} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}