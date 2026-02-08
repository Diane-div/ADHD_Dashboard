'use client'

import React from 'react'
import { MoreVertical } from 'lucide-react'
import Image from 'next/image'

type Props = {}

const LearningHub = (props: Props) => {
  const learningCards = [
    {
      id: 1,
      title: 'ADHD & Dopamine',
      bgColor: 'bg-blue-600',
      textColor: 'text-white',
      image: '/adhd-dopamine.jpg',
      description: 'Understand the science behind ADHD'
    },
    {
      id: 2,
      title: 'Focus Tips',
      bgColor: 'bg-orange-500',
      textColor: 'text-white',
      image: '/focus-tips.jpg',
      description: 'Practical strategies to improve focus'
    },
    {
      id: 3,
      title: 'Myth vs. Fact.',
      bgColor: 'bg-green-500',
      textColor: 'text-white',
      image: '/myth-vs-fact.jpg',
      description: 'Debunk common ADHD misconceptions'
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-700 px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">ADHD Learning Hub</h2>
        <button className="p-1 hover:bg-slate-500 rounded-lg transition-colors">
          <MoreVertical size={24} className="text-white" />
        </button>
      </div>

      {/* Cards Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningCards.map((card) => {
            return (
              <button
                key={card.id}
                className={`${card.bgColor} ${card.textColor} rounded-xl overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105 transition-transform flex flex-col`}
              >
                {/* Card Image */}
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm opacity-90">{card.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LearningHub;
