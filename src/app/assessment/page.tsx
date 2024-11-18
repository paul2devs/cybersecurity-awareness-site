// ... other imports
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Brain, Target, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { AssessmentResult } from '@/types';
import { submitAssessment } from '@/lib/api';
import { assessmentQuestions } from '@/lib/data';
import Confetti from '@/components/Confetti';

const DIFFICULTY_ICONS = {
  'easy': <Zap className="text-green-400" />,
  'medium': <Brain className="text-yellow-400" />,
  'hard': <Target className="text-red-400" />
};

const RESULT_BACKGROUNDS = {
  'Beginner': 'bg-gradient-to-br from-green-400 to-blue-500',
  'Intermediate': 'bg-gradient-to-br from-yellow-400 to-orange-500',
  'Advanced': 'bg-gradient-to-br from-red-400 to-purple-500'
};

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false); 

  const handleAnswer = (answer: string) => {
    setIsAnimating(true);
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [assessmentQuestions[currentQuestion].id]: answer
    }));

    setTimeout(() => {
      if (currentQuestion < assessmentQuestions.length - 1) {
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
      } else {
        handleSubmit();
      }
      setIsAnimating(false);
    }, 300); 
  }; 

  const handleSubmit = async () => {
    const assessmentResult = await submitAssessment(answers);
    setResult(assessmentResult);
    if (assessmentResult.score > 70) {
      setConfettiActive(true); 
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setConfettiActive(false); 
  };

  const renderResultBadge = (score: number) => {
    if (score < 40) return 'Beginner';
    if (score < 70) return 'Intermediate';
    return 'Advanced';
  };

  return (
    <div className="min-h-screen bg-[#0f1f3b] flex items-center justify-center p-4 relative overflow-hidden pt-20">
      <Confetti active={confettiActive} /> 
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence>
          {result ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full z-10 relative"
            >
              <Card
                className={`
                  ${RESULT_BACKGROUNDS[renderResultBadge(result.score)]} 
                  text-white 
                  shadow-2xl 
                  transform 
                  transition-all 
                  duration-500 
                  hover:scale-105
                  w-full
                `}
              >
                <div className="p-8 space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Security Assessment</h2>
                    <div className="bg-white/20 rounded-xl p-6">
                      <p className="text-xl mb-2">Your Assessment Score:</p>
                      <div className="text-6xl font-bold text-white sm:text-7xl">
                        {result.score }%
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-6 rounded-xl">
                    <p className="text-xl mb-4">{result.summary}</p>
                    <div className="space-y-2">
                      <h3 className=" text-2xl font-semibold mb-2">Recommendations:</h3>
                      {result.recommendations.map((rec, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="flex items-center space-x-2"
                        >
                          <TrendingUp className="text-white/50" size={16} />
                          <span>{rec}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={handleRetake}
                      className="
                        bg-white text-black 
                        px-6 py-3 rounded-lg 
                        hover:bg-opacity-90 
                        transition-all duration-300 
                        flex items-center space-x-2
                      "
                    >
                      <TrendingUp size={20} />
                      <span>Retake Assessment</span>
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full"
            >
              <div className="mb-6 text-center">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
                  Cyber Security Assessment
                </h1>
                <p className="text-xl text-gray-400">
                  Test your cybersecurity knowledge and skill level
                </p>
              </div>
              
              <Card className="bg-[#1f1f1f] border-none shadow-2xl">
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-2xl font-semibold text-cyan-400">
                      Question {currentQuestion + 1}/{assessmentQuestions.length}
                    </div>
                    <div>
                      {assessmentQuestions[currentQuestion].difficulty && 
                        DIFFICULTY_ICONS[assessmentQuestions[currentQuestion].difficulty as keyof typeof DIFFICULTY_ICONS]}
                    </div>
                  </div>

                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: isAnimating ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {assessmentQuestions[currentQuestion].question}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      {assessmentQuestions[currentQuestion].options.map(option => (
                        <button
                          key={option}
                          onClick={() => handleAnswer(option)}
                          className="
                            h-20 text-lg 
                            border-cyan-500/30 text-white 
                            hover:bg-cyan-500/20 
                            hover:border-cyan-500 
                            transition-all 
                            duration-300 
                            border rounded-lg
                          "
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </Card>
              {currentQuestion === assessmentQuestions.length - 1 && (
                <div className="text-center mt-8">
                  <button
                    onClick={handleSubmit}
                    className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white px-6 py-3 rounded-lg"
                  >
                    Submit Assessment
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}