import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Clock, 
  BookOpen, 
  ArrowRight, 
  Code, 
  Shield, 
  Globe, 
  Lock
} from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Course } from '@/types';
import { useRouter } from 'next/navigation';

// Define color mappings for difficulty levels
const LEVEL_COLORS = {
  'Beginner': {
    bg: 'bg-green-500/20',
    text: 'text-green-300',
    border: 'border-green-300'
  },
  'Intermediate': {
    bg: 'bg-yellow-500/20',
    text: 'text-yellow-300',
    border: 'border-yellow-300'
  },
  'Advanced': {
    bg: 'bg-red-500/20',
    text: 'text-red-300',
    border: 'border-red-300'
  }
};

// Map tags to icons
const ICON_MAP = {
  'Network': Globe,
  'Web Security': Code,
  'Ethical Hacking': Shield,
  'Fundamentals': BookOpen,
  'Beginner': BookOpen,
  'Online Safety': Shield
};

export default function CourseCard({ course }: { course: Course }) {
  const router = useRouter();

 
  const PrimaryTag = ICON_MAP[course.tags[0] as keyof typeof ICON_MAP] || BookOpen;
  
  
  const levelColors = LEVEL_COLORS[course.level];

  
  const handleCourseStart = () => {
    if (course.available) {
      
      if (course.externalLink) {
        window.open(course.externalLink, '_blank', 'noopener,noreferrer');
      } else {
        
        router.push(`/courses/${course.id}`);
      }
    }
  };

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05, 
        boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)' 
      }}
      transition={{ duration: 0.3 }}
      className="h-full group"
    >
      <Card 
        className={`
          h-full flex flex-col 
          bg-[#0a1128] 
          border-2 ${course.available ? levelColors.border : 'border-gray-700'}
          text-white 
          overflow-hidden 
          relative
          p-0
        `}
      >
        {/* Course Image Section */}
        <div className="relative">
          <Image 
            src={course.image} 
            alt={course.title} 
            width={400} 
            height={200} 
            className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105" 
          />
          
          {/* Unavailable Overlay */}
          {!course.available && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Lock className="w-12 h-12 text-gray-400 mb-2" />
                <span className="text-gray-300 font-semibold">Coming Soon</span>
              </div>
            </div>
          )}

          {/* Tags and Level Badge */}
          <div className="absolute top-2 right-2 flex items-center gap-2">
            <PrimaryTag className="w-5 h-5 text-cyan-300" />
            <div className={`${levelColors.bg} ${levelColors.text}`}>
              <Badge>{course.level}</Badge>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="flex flex-col flex-grow p-5 space-y-4">
          {/* Title and Description */}
          <div>
            <h3 className="text-xl font-bold mb-2 line-clamp-2 
              group-hover:text-cyan-300 transition duration-300">
              {course.title}
            </h3>
            <p className="text-gray-400 line-clamp-3 mb-4">
              {course.description}
            </p>
          </div>

          {/* Course Details */}
          <div className="flex flex-col space-y-3 border-t border-cyan-500/20 pt-4">
            {/* Duration */}
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Duration</span>
              </div>
              <span className="font-semibold text-white">{course.duration}</span>
            </div>

            {/* Modules */}
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>Modules</span>
              </div>
              <span className="font-semibold text-white">{course.modules.length}</span>
            </div>

            {/* Start Course Button */}
            <div className="pt-2">
              <Button
                onClick={handleCourseStart}
                disabled={!course.available}
                fullWidth
                variant={course.available ? "default" : "secondary"}
                className={
                  course.available 
                    ? 'bg-cyan-500 text-black hover:bg-cyan-400' 
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }
              >
                {course.available ? 'Start Course' : 'Unavailable'}
                {course.available && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Hover Effect Layer */}
        <div 
          className="
            absolute inset-0 border-2 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 
            pointer-events-none
            border-cyan-500/50
          "
        />
      </Card>
    </motion.div>
  );
}