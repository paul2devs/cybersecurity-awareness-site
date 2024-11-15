// quiz/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ProgressBar";
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Trophy, 
  Shield, 
  Target, 
  Zap 
} from 'lucide-react';
import { useQuiz } from '@/hooks/useQuiz';
import dynamic from 'next/dynamic';

// Dynamic imports for performance
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false
});

const HolographicOverlay = dynamic(() => import('@/components/HolographicOverlay'), {
  ssr: false
});

export default function CybersecurityQuiz() {
  const {
    currentQuestion,
    progress,
    score,
    showResults,
    selectedAnswer,
    isAnswered,
    handleAnswer,
    resetQuiz,
    getScoreMessage,
    getScoreColor,
    totalQuestions,
  } = useQuiz();

  const [backgroundVariant, setBackgroundVariant] = useState<'default' | 'success' | 'error'>('default');
  const controls = useAnimation();

  useEffect(() => {
    if (isAnswered) {
      const variant = selectedAnswer === currentQuestion.correctAnswer 
        ? 'success' 
        : 'error';
      setBackgroundVariant(variant);
      
      // Trigger background animation
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.5 }
      });
    }
  }, [isAnswered, selectedAnswer, currentQuestion, controls]);

  const backgroundVariants = {
    default: 'from-[#0A2342] to-[#1A3B5C]',
    success: 'from-[#004A2F] to-[#00703C]',
    error: 'from-[#4A0000] to-[#700000]'
  };

  const renderQuestionContent = () => (
    <motion.div
      key={currentQuestion.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-[#0A1929]/80 backdrop-blur-lg text-white shadow-2xl border-[#00FF9F]/20">
        <CardHeader className="border-b border-[#00FF9F]/20">
          <CardTitle className="text-[#00FF9F] flex items-center">
            <Target className="mr-3 w-6 h-6" />
            Question {currentQuestion.id} of {totalQuestions}
          </CardTitle>
          <CardDescription className="text-white/80">
            {currentQuestion.question}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 py-6">
          {currentQuestion.options.map((option, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => !isAnswered && handleAnswer(option)}
                variant={ 
                  selectedAnswer === option
                    ? option === currentQuestion.correctAnswer
                      ? 'default'
                      : 'destructive'
                    : 'outline'
                }
                className={`
                  w-full justify-start text-left 
                  transition-all duration-300 
                  ${selectedAnswer === option 
                    ? option === currentQuestion.correctAnswer 
                      ? 'bg-[#00FF9F]/20' 
                      : 'bg-[#FF3366]/20'
                    : 'hover:bg-[#00C3FF]/10'
                  }
                `}
                disabled={isAnswered}
              >
                <Zap className="mr-3 w-4 h-4 opacity-50" />
                {option}
                {isAnswered && option === currentQuestion.correctAnswer && (
                  <CheckCircle2 className="ml-auto h-5 w-5 text-[#00FF9F]" />
                )}
                {isAnswered && selectedAnswer === option && option !== currentQuestion.correctAnswer && (
                  <XCircle className="ml-auto h-5 w-5 text-[#FF3366]" />
                )}
              </Button>
            </motion.div>
          ))}
        </CardContent>
        <CardFooter>
          <ProgressBar 
            progress={progress}
            className="h-2 bg-[#F8F9FA]/20 rounded-full overflow-hidden"
            barClassName="bg-[#00FF9F]"
          />
        </CardFooter>
      </Card>
    </motion.div>
  );

  const renderResultContent = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[#0A1929]/80 backdrop-blur-lg text-white shadow-2xl border-[#00FF9F]/20">
        <CardHeader className="text-center border-b border-[#00FF9F]/20">
          <CardTitle className="text-[#00FF9F] flex justify-center items-center">
            <Trophy className="mr-3 w-8 h-8" />
            Quiz Results
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-12">
          <Shield className="w-24 h-24 mx-auto mb-6 text-[#00FF9F] animate-pulse" />
          <p className="text-4xl font-bold mb-4 text-[#00FF9F]">
            {score} / {totalQuestions}
          </p>
          <p className={`text-xl mb-8 ${getScoreColor()}`}>
            {getScoreMessage()}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={resetQuiz} 
              className="w-full bg-[#00FF9F] text-[#0A1929] hover:bg-[#00C3FF]"
            >
              <RotateCcw className="mr-2 h-5 w-5" /> Retake Quiz
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <motion.div 
      animate={controls}
      className={`
        min-h-screen 
        bg-gradient-to-b 
        ${backgroundVariants[backgroundVariant]} 
        pt-20 
        overflow-hidden 
        relative
      `}
    >
      {/* Background Elements */}
      <ParticleBackground />
      <HolographicOverlay />

      <div className="max-w-2xl mx-auto relative z-10 pt-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-[#00FF9F] drop-shadow-lg"
        > Cybersecurity Quiz
        </motion.h1>
        
        <AnimatePresence mode="wait">
          {!showResults ? renderQuestionContent() : renderResultContent()}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

