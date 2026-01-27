'use client'

import React, { useState } from 'react'
import { Paperclip, Smile, Send, MoreVertical, X } from 'lucide-react'

type Props = {}

const ADHDCompanion = (props: Props) => {
  const [input, setInput] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)

  const responses = [
    'Sure, let\'s do it!',
    'I need a break',
    'Give me a tip'
  ]

  const handleSendMessage = () => {
    if (input.trim()) {
      console.log('Message sent:', input)
      setInput('')
    }
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 w-16 h-16 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-lg"
        onClick={() => setIsMinimized(false)}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center">
          <div className="text-white text-xl font-bold">🤖</div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-100 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center">
            <div className="text-white text-lg font-bold">🤖</div>
          </div>
          <h2 className="text-white font-bold text-lg">ADHD Companion</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-slate-600 rounded-lg transition-colors">
            <MoreVertical size={20} className="text-white" />
          </button>
          <button 
            onClick={() => setIsMinimized(true)}
            className="p-1 hover:bg-slate-600 rounded-lg transition-colors"
          >
            <X size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="bg-white p-6 space-y-6 min-h-80">
        {/* Bot Message */}
        <div className="flex gap-4">
          <div className="w-12 h-12 flex-shrink-0 bg-slate-700 rounded-full flex items-center justify-center">
            <div className="text-white text-xl">🤖</div>
          </div>
          <div className="bg-slate-200 rounded-lg p-4 max-w-sm">
            <p className="text-slate-800 text-sm leading-relaxed">
              Feeling overwhelmed? Let's start small. How about we tackle one tiny step together?
            </p>
          </div>
        </div>

        {/* Response Buttons */}
        <div className="flex flex-col gap-3 ml-16">
          {responses.map((response, index) => (
            <button
              key={index}
              className="bg-slate-700 hover:bg-slate-800 text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group"
            >
              <span>{response}</span>
              {index === 2 && <span className="group-hover:translate-x-1 transition-transform">→</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-slate-200 px-6 py-4">
        <div className="flex items-center gap-3 bg-slate-50 rounded-full px-4 py-3 border border-slate-200 focus-within:border-slate-400 transition-colors">
          <button className="p-1 hover:bg-slate-200 rounded-lg transition-colors">
            <Paperclip size={20} className="text-slate-500" />
          </button>
          <input
            type="text"
            placeholder="Type your here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none"
          />
          <button className="p-1 hover:bg-slate-200 rounded-lg transition-colors">
            <Smile size={20} className="text-slate-500" />
          </button>
          <button
            onClick={handleSendMessage}
            className="p-2 bg-slate-700 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Send size={18} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ADHDCompanion
