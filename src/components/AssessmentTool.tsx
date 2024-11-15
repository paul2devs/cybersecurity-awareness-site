'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card'
import { Button } from './ui/Button'
import { ProgressBar } from './ProgressBar'
import { AssessmentQuestion, AssessmentResult } from '@/types'
import { submitAssessment } from '@/lib/api'

const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: '1',
    question: 'How often do you update your software and operating systems?',
    options: ['Regularly', 'Sometimes', 'Rarely', 'Never']
  },
  {
    id: '2',
    question: 'Do you use a password manager?',
    options: ['Yes', 'No']
  },
  {
    id: '3',
    question: 'How strong are your passwords?',
    options: ['Very strong', 'Strong', 'Moderate', 'Weak']
  },
  {
    id: '4',
    question: 'Do you use two-factor authentication when available?',
    options: ['Always', 'Sometimes', 'Rarely', 'Never']
  },
  {
    id: '5',
    question: 'How often do you back up your data?',
    options: ['Daily', 'Weekly', 'Monthly', 'Rarely or never']
  }
]

export const AssessmentTool: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<AssessmentResult | null>(null)

  const handleAnswer = (answer: string) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [assessmentQuestions[currentQuestion].id]: answer
    }))
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1)
    } else {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    const assessmentResult = await submitAssessment(answers)
    setResult(assessmentResult)
  }

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Security Assessment</h2>
      {result ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Your Security Score: {result.score}%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{result.summary}</p>
              <h3 className="text-xl font-bold mb-2">Recommendations:</h3>
              <ul className="list-disc list-inside">
                {result.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <>
          <ProgressBar progress={progress} />
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>{assessmentQuestions[currentQuestion].question}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {assessmentQuestions[currentQuestion].options.map(option => (
                    <Button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      variant="outline"
                      className="justify-start"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </div>
  )
}