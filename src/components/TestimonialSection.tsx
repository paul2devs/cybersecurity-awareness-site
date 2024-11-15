import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Quote, 
  Star, 
  ArrowLeft, 
  ArrowRight, 
  Award, 
  Briefcase 
} from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
  background: {
    role: string;
    experience: string;
  }
}

const TestimonialSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Rodriguez",
      position: "Chief Information Security Officer",
      company: "TechGuard Solutions",
      testimonial: "The cybersecurity training program has been transformative for our team. The depth of knowledge and practical approach have significantly enhanced our security posture and incident response capabilities.",
      rating: 5,
      background: {
        role: "Cybersecurity Leadership",
        experience: "15+ Years in Enterprise Security"
      }
    },
    {
      id: 2,
      name: "David Chen",
      position: "Senior Penetration Tester",
      company: "CyberShield Consulting",
      testimonial: "As a professional penetration tester, I found the advanced ethical hacking course to be incredibly comprehensive. The hands-on modules and real-world scenarios provided invaluable insights into modern cybersecurity challenges.",
      rating: 5,
      background: {
        role: "Ethical Hacking",
        experience: "10+ Years in Cybersecurity"
      }
    },
    {
      id: 3,
      name: "Sarah Thompson",
      position: "Cloud Security Architect",
      company: "Amazon INC",
      testimonial: "The cloud security masterclass exceeded my expectations. The curriculum perfectly balances theoretical knowledge with practical implementation strategies for securing complex cloud environments.",
      rating: 4,
      background: {
        role: "Cloud Security Engineering",
        experience: "8+ Years in Cloud Infrastructure"
      }
    }
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-dark-background">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-electric-blue mb-4"
        >
          Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-light-gray max-w-2xl mx-auto"
        >
          Hear from cybersecurity professionals who have transformed their careers and organizations.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="bg-steel-gray/30 rounded-xl p-8 relative"
        >
          <Quote className="absolute top-4 left-4 text-electric-blue/30 w-16 h-16" />
          
          <div className="text-center">
            <p className="text-xl italic text-light-gray mb-6 relative z-10">
            &quot;{testimonials[currentTestimonial].testimonial}&quot;
            </p>
            
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="text-light-gray">
                {testimonials[currentTestimonial].position}
              </p>
            </div>

            <div className="flex justify-center space-x-4 text-light-gray">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-electric-blue" />
                <span>{testimonials[currentTestimonial].company}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-electric-blue" />
                <span>{testimonials[currentTestimonial].background.role}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevTestimonial}
            className="
              bg-steel-gray/30 
              text-light-gray 
              rounded-full 
              p-2 
              hover:bg-electric-blue 
              hover:text-white 
              transition-all
            "
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextTestimonial}
            className="
              bg-steel-gray/30 
              text-light-gray 
              rounded-full 
              p-2 
              hover:bg-electric-blue 
              hover:text-white 
              transition-all
            "
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`
                w-3 h-3 rounded-full cursor-pointer
                ${currentTestimonial === index 
                  ? 'bg-electric-blue' 
                  : 'bg-steel-gray/30'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;