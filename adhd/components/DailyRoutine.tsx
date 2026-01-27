'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, MoreVertical } from 'lucide-react'

type RoutineSection = {
  title: string
  time?: string
  color: string
  items: string[]
  iconColor: string
}

const DailyRoutine = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('Morning Routine')

  const sections: RoutineSection[] = [
    {
      title: 'Morning Routine',
      time: '7:00 AM',
      color: 'bg-purple-100',
      items: ['Get Up', 'Breakfast', 'Quick Workout'],
      iconColor: 'bg-purple-500',
    },
    {
      title: 'Afternoon Tasks',
      color: 'bg-orange-100',
      items: ['Study Session', 'Finish Report'],
      iconColor: 'bg-orange-500',
    },
    {
      title: 'Evening Wind Down',
      color: 'bg-green-100',
      items: ['Read & Relax', 'Light Stretch'],
      iconColor: 'bg-green-500',
    },
  ]

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-slate-900">Daily Routine</h2>
        <button className="p-1 hover:bg-slate-100 rounded-lg transition-colors">
          <MoreVertical size={20} className="text-slate-500" />
        </button>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((section) => {
          const isExpanded = expandedSection === section.title

          return (
            <div key={section.title}>
              {/* Section Header */}
              <button
                onClick={() =>
                  setExpandedSection(isExpanded ? null : section.title)
                }
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${section.color} hover:opacity-80`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-slate-900">
                    {section.title}
                  </span>
                  {section.time && (
                    <span className="text-sm text-slate-600">{section.time}</span>
                  )}
                </div>
                {isExpanded ? (
                  <ChevronDown size={20} className="text-slate-700" />
                ) : (
                  <ChevronRight size={20} className="text-slate-700" />
                )}
              </button>

              {/* Section Items */}
              {isExpanded && (
                <div className="mt-3 ml-4 space-y-2">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <div
                        className={`w-5 h-5 rounded-full ${section.iconColor} flex items-center justify-center`}
                      >
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}

                  {/* Edit Button - only for Morning Routine */}
                  {section.title === 'Morning Routine' && (
                    <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                      Edit
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DailyRoutine
