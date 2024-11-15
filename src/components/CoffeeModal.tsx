'use client'

import { useState } from 'react'
import { Coffee, Copy, X, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CoffeeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null)

  const bankAccounts = [
    {
      bank: 'Opay',
      number: '7068578749',
      color: 'bg-green-50',
      borderColor: 'border-green-500'
    },
    {
      bank: 'GTBank',
      number: '0685583318', 
      color: 'bg-blue-50',
      borderColor: 'border-blue-500'
    }
  ]

  const handleCopy = (account: string) => {
    navigator.clipboard.writeText(account)
    setCopiedAccount(account)
    
    
    setTimeout(() => setCopiedAccount(null), 2000)
  }

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 
        bg-yellow-500 text-white 
        px-4 py-2 rounded-full 
        hover:bg-yellow-600 
        transition-colors"
      >
        <Coffee className="w-5 h-5" />
        <span>Buy Me a Coffee</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div 
            className="fixed inset-x-0 bottom-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-md mx-4 rounded-t-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-yellow-50 p-6 border-b border-yellow-100 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-yellow-800 flex items-center">
                  <Coffee className="mr-3 text-yellow-600" />
                  Support My Work
                </h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-yellow-600 hover:text-yellow-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-center">
                  Every coffee helps fuel more amazing content and projects! 
                  Choose a bank to transfer:
                </p>

                {bankAccounts.map((account) => (
                  <motion.div
                    key={account.bank}
                    whileHover={{ scale: 1.02 }}
                    className={`
                      ${account.color} 
                      border ${account.borderColor}
                      rounded-xl p-4 
                      flex items-center 
                      justify-between
                      transition-all
                    `}
                  >
                    <div>
                      <p className="font-semibold text-gray-800">{account.bank}</p>
                      <p className="text-gray-600 font-mono">{account.number}</p>
                    </div>
                    <button 
                      onClick={() => handleCopy(account.number)}
                      className={`
                        border rounded-full p-2 
                        transition-all
                        ${copiedAccount === account.number 
                          ? 'bg-green-100 border-green-300' 
                          : 'bg-white border-gray-200 hover:bg-gray-50'}
                      `}
                    >
                      {copiedAccount === account.number ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </motion.div>
                ))}
]
                <div className="text-center text-sm text-gray-500 mt-4">
                  Thank you for your support! ☕
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}