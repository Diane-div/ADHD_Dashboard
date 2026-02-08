'use client'

import React, { useState } from 'react'
import { MoreVertical, Wind, HeartHandshake, AlertCircle } from 'lucide-react'

type Props = {}

const EmergencyCalmTools = (props: Props) => {
  const [activeTab, setActiveTab] = useState('panic')

  const tabs = [
    {
      id: 'panic',
      label: 'Panic Soother',
      icon: Wind,
      color: 'bg-red-500 hover:bg-red-600',
      textColor: 'text-white'
    },
    {
      id: 'breathing',
      label: 'Breathing Exercise',
      icon: HeartHandshake,
      color: 'bg-purple-600 hover:bg-purple-700',
      textColor: 'text-white'
    },
    {
      id: 'crisis',
      label: 'Crisis Resources',
      icon: AlertCircle,
      color: 'bg-gray-300 hover:bg-gray-400',
      textColor: 'text-gray-700'
    }
  ]

  const content = {
    panic: {
      title: 'Panic Soother',
      description: 'Quick techniques to calm anxiety and panic attacks'
    },
    breathing: {
      title: 'Breathing Exercise',
      description: 'Guided breathing exercises to reduce stress and promote calm'
    },
    crisis: {
      title: 'Crisis Resources',
      description: 'Emergency hotlines and professional resources available 24/7'
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-red-500 text-white px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Emergency Calm Tools</h2>
        <button className="p-2 hover:bg-red-600 rounded-lg transition-colors">
          <MoreVertical size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tabs */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all ${
                  isActive
                    ? `${tab.color} ${tab.textColor}`
                    : `${tab.id === 'crisis' ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 text-gray-700'} hover:bg-gray-200`
                }`}
              >
                <IconComponent size={18} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        
      </div>
    </div>
  )
}

export default EmergencyCalmTools
