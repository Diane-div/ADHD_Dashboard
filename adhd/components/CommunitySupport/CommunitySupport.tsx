'use client'

import React, { useState } from 'react'
import { ChevronRight, MoreVertical, MessageCircle } from 'lucide-react'

type Props = {}

interface CommunityMessage {
  id: number
  text: string
  author: string
  emoji: string
}

const CommunitySupport = (props: Props) => {
  const [messages, setMessages] = useState<CommunityMessage[]>([
    {
      id: 1,
      text: 'Struggling to start, any tips?',
      author: 'Anna',
      emoji: '😊'
    },
    {
      id: 2,
      text: 'Finished my tasks today!',
      author: 'Mike',
      emoji: '🎉'
    },
    {
      id: 3,
      text: "Anyone else distracted? Let's focus together!",
      author: 'Community',
      emoji: ''
    }
  ])

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-orange-500 text-white px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">Community Support</h2>
        <button className="p-1 hover:bg-orange-600 rounded-lg transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="bg-yellow-50 p-6 space-y-4">
        {/* Study Motivation Chat Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
          <h3 className="text-lg font-semibold text-slate-800">Study Motivation Chat</h3>
          <ChevronRight size={20} className="text-slate-400 ml-auto" />
        </div>

        {/* Messages */}
        <div className="space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className="bg-white rounded-lg p-4 border border-yellow-200 hover:border-orange-300 transition-colors"
            >
              <p className="text-slate-700 font-medium">
                {message.text}
                {message.emoji && <span className="ml-2">{message.emoji}</span>}
                <span className="text-slate-500 font-normal ml-2">~{message.author}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
            Share a Win
            <ChevronRight size={20} />
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
            Ask for Support
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommunitySupport
