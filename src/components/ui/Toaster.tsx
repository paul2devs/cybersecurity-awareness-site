'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ToastContextType {
  addToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<string[]>([]);

  const addToast = (message: string) => {
    setMessages((prev) => [...prev, message]);
    setTimeout(() => {
      setMessages((prev) => prev.filter((msg) => msg !== message));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      <div className="fixed top-0 right-0 p-4 space-y-2">
        {messages.map((message, index) => (
          <div key={index} className="bg-gray-800 text-white p-2 rounded shadow-lg">
            {message}
          </div>
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
