import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  Clock, 
  User, 
  Award, 
  PlayCircle 
} from 'lucide-react';

interface Course {
  id: number;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  instructor: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  modules: string[];
  certification: boolean;
}

const CoursesSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const cybersecurityCourses: Course[] = [
    {
      id: 1,
      title: "Cybersecurity Fundamentals",
      level: 'Beginner',
      duration: "4 weeks",
      instructor: "Alex Johnson",
      description: "Comprehensive introduction to cybersecurity principles, threat landscapes, and basic protection strategies.",
      icon: <BookOpen />,
      color: 'text-blue-400',
      modules: [
        'Network Security Basics',
        'Threat Detection',
        'Security Protocols',
        'Risk Management'
      ],
      certification: true
    },
    {
      id: 2,
      title: "Advanced Ethical Hacking",
      level: 'Advanced',
      duration: "8 weeks",
      instructor: "Sarah Miller",
      description: "In-depth penetration testing and vulnerability assessment techniques for cybersecurity professionals.",
      icon: <Video />,
      color: 'text-purple-400',
      modules: [
        'Penetration Testing',
        'Exploit Development',
        'Network Intrusion',
        'Forensic Analysis'
      ],
      certification: true
    },
    {
      id: 3,
      title: "Cloud Security Masterclass",
      level: 'Intermediate',
      duration: "6 weeks",
      instructor: "Michael Chen",
      description: "Comprehensive guide to securing cloud infrastructure and managing cloud-based security challenges.",
      icon: <Award />,
      color: 'text-green-400',
      modules: [
        'Cloud Architecture Security',
        'Identity Management',
        'Compliance Frameworks',
        'Threat Mitigation'
      ],
      certification: true
    }
  ];

  const courseVariants = {
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
          Cybersecurity Learning Paths
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-light-gray max-w-2xl mx-auto"
        >
          Boost your cybersecurity skills with expert-led training courses.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cybersecurityCourses.map((course) => (
          <motion.div
            key={course.id}
            variants={courseVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className={`
              bg-steel-gray/30 rounded-xl p-6 
              cursor-pointer transition-all duration-300
              ${selectedCourse?.id === course.id ? 'border-2 border-electric-blue' : ''}
            `}
            onClick={() => setSelectedCourse(course)}
          >
            <div className="flex justify-between items-center mb-4">
              <div className={`${course.color}`}>{course.icon}</div>
              <span 
                className={`
                  px-3 py-1 rounded-full text-sm 
                  ${course.level === 'Beginner' ? 'bg-blue-500/20 text-blue-400' : 
                    course.level === 'Intermediate' ? 'bg-green-500/20 text-green-400' : 
                    'bg-purple-500/20 text-purple-400'}
                `}
              >
                {course.level}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {course.title}
            </h3>
            <div className="flex items-center text-light-gray space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{course.instructor}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCourse && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-steel-gray/30 rounded-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedCourse.title}
              </h3>
              <p className="text-light-gray mb-6">
                {selectedCourse.description}
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-electric-blue mb-3">
                  Course Modules
                </h4>
                <ul className="space-y-2">
                  {selectedCourse.modules.map((module, index) => (
                    <li 
                      key={index} 
                      className="flex items-center space-x-2 text-light-gray"
                    >
                      <PlayCircle className="w-4 h-4 text-electric-blue" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-electric-blue text-white px-6 py-2 rounded-full hover:bg-electric-blue/80 transition-colors">
                  Enroll Now
                </button>
                {selectedCourse.certification && (
                  <div className="flex items-center space-x-2 text-green-400">
                    <Award className="w-5 h-5" />
                    <span>Certification Included</span>
                  </div>
                )}
              </div>
            </div>
            <div className="hidden md:block bg-steel-gray/50 rounded-xl p-6 flex items-center justify-center">
              <div className="text-center">
                <User className="w-24 h-24 mx-auto text-light-gray mb-4" />
                <h4 className="text-xl font-semibold text-white">
                  {selectedCourse.instructor}
                </h4>
                <p className="text-light-gray">Course Instructor</p>
              </div>
            </div>
          </div>
        </motion.div>)}
    </div>
  );
};

export default CoursesSection;