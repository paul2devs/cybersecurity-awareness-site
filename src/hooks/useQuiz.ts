import { useState, useCallback } from 'react'
import { QuizQuestion } from '@/types'

const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'What is phishing?',
    options: [
      'A type of fish',
      'A cybersecurity attack that tricks users into revealing sensitive information',
      'A method of encrypting data',
      'A type of computer virus'
    ],
    correctAnswer: 'A cybersecurity attack that tricks users into revealing sensitive information'
  },
  {
    id: '2',
    question: 'What does "https" in a URL indicate?',
    options: [
      'The website is fast',
      'The website is popular',
      'The website is secure',
      'The website is new'
    ],
    correctAnswer: 'The website is secure'
  },
  {
    id: '3',
    question: 'What is a firewall used for?',
    options: [
      'To store user data',
      'To prevent unauthorized access to or from a private network',
      'To increase computer speed',
      'To delete malware automatically'
    ],
    correctAnswer: 'To prevent unauthorized access to or from a private network'
  },
  {
    id: '4',
    question: 'What is malware?',
    options: [
      'Software designed to protect a computer from viruses',
      'Malicious software designed to harm or exploit systems',
      'Software that speeds up a computer',
      'None of the above'
    ],
    correctAnswer: 'Malicious software designed to harm or exploit systems'
  },
  {
    id: '5',
    question: 'Which of the following is a strong password?',
    options: [
      'password123',
      'qwerty',
      'MyS3cureP@ss!',
      'admin'
    ],
    correctAnswer: 'MyS3cureP@ss!'
  },
  {
    id: '6',
    question: 'What is two-factor authentication (2FA)?',
    options: [
      'A method of logging in twice',
      'A security measure requiring two types of verification',
      'A way to speed up login times',
      'None of the above'
    ],
    correctAnswer: 'A security measure requiring two types of verification'
  },
  {
    id: '7',
    question: 'What does VPN stand for?',
    options: [
      'Virtual Private Network',
      'Very Private Network',
      'Verified Public Network',
      'Virtual Protection Network'
    ],
    correctAnswer: 'Virtual Private Network'
  },
  {
    id: '8',
    question: 'What is ransomware?',
    options: [
      'Software that speeds up a computer',
      'Malware that locks files and demands payment to unlock them',
      'A security measure to protect data',
      'A way to back up data'
    ],
    correctAnswer: 'Malware that locks files and demands payment to unlock them'
  },
  {
    id: '9',
    question: 'What is social engineering?',
    options: [
      'Using social media for work',
      'Manipulating people into giving up confidential information',
      'Engineering software solutions',
      'Designing social networks'
    ],
    correctAnswer: 'Manipulating people into giving up confidential information'
  },
  {
    id: '10',
    question: 'What is a brute force attack?',
    options: [
      'Using random passwords until the correct one is found',
      'Installing malware on a device',
      'A type of firewall',
      'A form of phishing'
    ],
    correctAnswer: 'Using random passwords until the correct one is found'
  },
  {
    id: '11',
    question: 'What does antivirus software do?',
    options: [
      'Enhances internet speed',
      'Identifies and removes malicious software from a computer',
      'Protects against social engineering',
      'None of the above'
    ],
    correctAnswer: 'Identifies and removes malicious software from a computer'
  },
  {
    id: '12',
    question: 'What is an IP address?',
    options: [
      'A physical location of a device',
      'A unique address identifying a device on a network',
      'A personal password',
      'A type of malware'
    ],
    correctAnswer: 'A unique address identifying a device on a network'
  },
  {
    id: '13',
    question: 'What is encryption?',
    options: [
      'A method of speeding up data transfer',
      'The process of encoding data to prevent unauthorized access',
      'A way to delete unwanted files',
      'None of the above'
    ],
    correctAnswer: 'The process of encoding data to prevent unauthorized access'
  },
  {
    id: '14',
    question: 'Which of these is a phishing method?',
    options: [
      'Sending fake emails to trick recipients into revealing personal information',
      'Blocking websites',
      'Using a VPN for security',
      'Installing antivirus software'
    ],
    correctAnswer: 'Sending fake emails to trick recipients into revealing personal information'
  },
  {
    id: '15',
    question: 'What is spyware?',
    options: [
      'Software used to improve internet speed',
      'Malware that collects personal information without permission',
      'A type of firewall',
      'A method of encryption'
    ],
    correctAnswer: 'Malware that collects personal information without permission'
  },
  {
    id: '16',
    question: 'What does DDoS stand for?',
    options: [
      'Direct Download of Software',
      'Distributed Denial of Service',
      'Data Decryption on Server',
      'Direct Data Overwrite Service'
    ],
    correctAnswer: 'Distributed Denial of Service'
  },
  {
    id: '17',
    question: 'What is a botnet?',
    options: [
      'A network of bots that help secure networks',
      'A group of infected computers controlled remotely',
      'A social media network for bots',
      'A tool used to speed up internet browsing'
    ],
    correctAnswer: 'A group of infected computers controlled remotely'
  },
  {
    id: '18',
    question: 'What does CIA stand for in cybersecurity?',
    options: [
      'Central Intelligence Agency',
      'Confidentiality, Integrity, Availability',
      'Cybersecurity Information Access',
      'Critical Infrastructure Assessment'
    ],
    correctAnswer: 'Confidentiality, Integrity, Availability'
  },
  {
    id: '19',
    question: 'What is a zero-day vulnerability?',
    options: [
      'A known software issue that is fixed immediately',
      'A vulnerability discovered and exploited before it’s patched',
      'A vulnerability that only affects old software',
      'A minor bug with no impact on security'
    ],
    correctAnswer: 'A vulnerability discovered and exploited before it’s patched'
  },
  {
    id: '20',
    question: 'What is identity theft?',
    options: [
      'Copying files without permission',
      'Stealing someone’s personal information to impersonate them',
      'Using a fake ID to access buildings',
      'A type of encryption'
    ],
    correctAnswer: 'Stealing someone’s personal information to impersonate them'
  },
  {
    id: '21',
    question: 'What is SQL injection?',
    options: [
      'A way to improve database performance',
      'An attack where malicious code is inserted into a database query',
      'A method of data encryption',
      'A type of phishing attack'
    ],
    correctAnswer: 'An attack where malicious code is inserted into a database query'
  },
  {
    id: '22',
    question: 'What does a digital certificate do?',
    options: [
      'It speeds up internet browsing',
      'It verifies the identity of a website or user',
      'It blocks malware',
      'It encrypts all data on a device'
    ],
    correctAnswer: 'It verifies the identity of a website or user'
  },
  {
    id: '23',
    question: 'What is multi-factor authentication (MFA)?',
    options: [
      'A way to log in without a password',
      'Using multiple layers of security to verify identity',
      'A network management protocol',
      'A tool to reset passwords'
    ],
    correctAnswer: 'Using multiple layers of security to verify identity'
  },
  {
    id: '24',
    question: 'What is the purpose of a security audit?',
    options: [
      'To speed up network performance',
      'To analyze and improve security measures',
      'To create backups of data',
      'To block malware'
    ],
    correctAnswer: 'To analyze and improve security measures'
  },
  {
    id: '25',
    question: 'Which of the following is an example of social engineering?',
    options: [
      'Using malware to steal data',
      'Calling a person and pretending to be IT support to obtain passwords',
      'Installing antivirus software',
      'Encrypting sensitive data'
    ],
    correctAnswer: 'Calling a person and pretending to be IT support to obtain passwords'
  },
  {
    id: '26',
    question: 'What is the purpose of an SSL certificate?',
    options: [
      'To make websites load faster',
      'To encrypt communication between a web server and browser',
      'To prevent malware',
      'To store passwords securely'
    ],
    correctAnswer: 'To encrypt communication between a web server and browser'
  },
  {
    id: '27',
    question: 'What is a Trojan horse?',
    options: [
      'A program that seems useful but hides malicious intent',
      'A type of firewall',
      'A security tool used to prevent attacks',
      'A method of secure communication'
    ],
    correctAnswer: 'A program that seems useful but hides malicious intent'
  },
  {
    id: '28',
    question: 'What is the main purpose of encryption?',
    options: [
      'To speed up data transfer',
      'To protect data by making it unreadable without a key',
      'To increase storage space',
      'To improve network speed'
    ],
    correctAnswer: 'To protect data by making it unreadable without a key'
  },
  {
    id: '29',
    question: 'What is patch management?',
    options: [
      'The process of monitoring for network intrusions',
      'The practice of updating software to fix security vulnerabilities',
      'The process of encrypting data',
      'The management of firewall rules'
    ],
    correctAnswer: 'The practice of updating software to fix security vulnerabilities'
  },
  {
    id: '30',
    question: 'What is a password manager used for?',
    options: [
      'To store and manage passwords securely',
      'To generate network encryption keys',
      'To delete unused passwords',
      'To create strong passwords only'
    ],
    correctAnswer: 'To store and manage passwords securely'
  }

];


export function useQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100

  const handleAnswer = useCallback((answer: string) => {
    setSelectedAnswer(answer)
    setIsAnswered(true)
    
    if (answer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1)
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
        setSelectedAnswer(null)
        setIsAnswered(false)
      } else {
        setShowResults(true)
      }
    }, 1000)
  }, [currentQuestion, currentQuestionIndex])

  const resetQuiz = useCallback(() => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setShowResults(false)
    setSelectedAnswer(null)
    setIsAnswered(false)
  }, [])

  const getScoreMessage = useCallback(() => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 80) return "Excellent! You're a cybersecurity expert!"
    if (percentage >= 60) return "Great job! You have good security awareness."
    if (percentage >= 40) return "Good effort! Keep learning about cybersecurity."
    return "There's room for improvement. Keep studying cybersecurity!"
  }, [score])

  const getScoreColor = useCallback(() => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-blue-600"
    if (percentage >= 40) return "text-yellow-600"
    return "text-red-600"
  }, [score])

  return {
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
    totalQuestions: quizQuestions.length,
  }
}