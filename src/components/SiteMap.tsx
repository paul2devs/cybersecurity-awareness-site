'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Shield, 
  Lock, 
  BookOpen, 
  Zap, 
  Monitor, 
  Award, 
  Newspaper, 
  AlertTriangle, 
  BookOpenCheck 
} from 'lucide-react'

const siteMap = [
  { 
    name: 'Home', 
    path: '/', 
    icon: Globe,
    description: 'Your cybersecurity journey starts here',
    color: 'from-blue-500 to-purple-600'
  },
  { 
    name: 'Cybersecurity Threats', 
    path: '/threats', 
    icon: AlertTriangle,
    description: 'Explore the digital danger landscape',
    color: 'from-red-500 to-orange-600'
  },
  { 
    name: 'Prevention Tips', 
    path: '/prevention', 
    icon: Shield,
    description: 'Armor up against cyber risks',
    color: 'from-green-500 to-teal-600'
  },
  { 
    name: 'Security Tools', 
    path: '/tools', 
    icon: Lock,
    description: 'Cutting-edge defense mechanisms',
    color: 'from-indigo-500 to-blue-600'
  },
  { 
    name: 'Resources', 
    path: '/resources', 
    icon: BookOpen,
    description: 'Knowledge is your ultimate weapon',
    color: 'from-yellow-500 to-orange-600'
  },
  { 
    name: 'Courses', 
    path: '/courses', 
    icon: Monitor,
    description: 'Level up your cyber skills',
    color: 'from-purple-500 to-pink-600'
  },
  { 
    name: 'Quiz', 
    path: '/quiz', 
    icon: Zap,
    description: 'Test your cybersecurity knowledge',
    color: 'from-cyan-500 to-blue-600'
  },
  { 
    name: 'Assessment', 
    path: '/assessment', 
    icon: Award,
    description: 'Measure your cyber readiness',
    color: 'from-pink-500 to-red-600'
  },
  { 
    name: 'News', 
    path: '/news', 
    icon: Newspaper,
    description: 'Stay informed about cyber landscape',
    color: 'from-gray-500 to-gray-700'
  },
  { 
    name: 'Report Incident', 
    path: '/report-incident', 
    icon: AlertTriangle,
    description: 'Immediate cyber threat reporting',
    color: 'from-red-600 to-red-800'
  },
  { 
    name: 'Glossary', 
    path: '/glossary', 
    icon: BookOpenCheck,
    description: 'Decode cybersecurity terminology',
    color: 'from-emerald-500 to-green-600'
  },
]

export default function SiteMap() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1128] via-[#1A2238] to-[#0F1729] pt-32 pb-8 overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        <h1 className="text-6xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-center">
          Cyber Navigation Hub
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteMap.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ 
                scale: 1.05,
                rotate: Math.random() * 2 - 1 
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
              onClick={() => router.push(item.path)}
            >
              <div 
                className={`
                  bg-gradient-to-br ${item.color} 
                  rounded-3xl p-6 
                  transform transition-all duration-300 
                  hover:shadow-2xl hover:scale-105
                  flex flex-col items-center
                  border-2 border-transparent
                  hover:border-cyan-300/50
                  cursor-pointer
                `}
              >
                <div className="bg-white/10 rounded-full p-4 mb-4">
                  <item.icon 
                    className="text-white w-12 h-12" 
                    strokeWidth={1.5} 
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 text-center">
                  {item.name}
                </h2>
                <p className="text-white/70 text-center text-sm">
                  {item.description}
                </p>
              </div>

              {/* Subtle hover effect */}
              <div 
                className="
                  absolute inset-0 
                  bg-gradient-to-br from-white/10 to-transparent 
                  opacity-0 group-hover:opacity-20 
                  rounded-3xl 
                  transition-all duration-300
                "
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div 
          className="
            absolute top-0 left-0 w-96 h-96 
            bg-cyan-500/20 rounded-full 
            blur-3xl animate-pulse
          "
        />
        <div 
          className="
            absolute bottom-0 right-0 w-96 h-96 
            bg-blue-500/20 rounded-full 
            blur-3xl animate-pulse delay-500
          "
        />
      </div>
    </div>
  )
}