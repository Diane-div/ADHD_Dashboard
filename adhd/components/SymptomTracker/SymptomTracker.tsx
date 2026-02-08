'use client'

import React, { useState } from 'react'
import { MoreVertical } from 'lucide-react'

type Props = {}

const SymptomTracker = (props: Props) => {
  const [focus, setFocus] = useState(2)
  const [impulsivity, setImpulsivity] = useState(4)
  const [restlessness, setRestlessness] = useState(3)
  const [selectedMood, setSelectedMood] = useState('navy')

  const moods = [
    { id: 'navy', color: 'bg-blue-900', label: 'Focused' },
    { id: 'green', color: 'bg-green-500', label: 'Calm' },
    { id: 'orange', color: 'bg-orange-400', label: 'Neutral' },
    { id: 'blue', color: 'bg-blue-500', label: 'Energetic' },
    { id: 'red', color: 'bg-red-500', label: 'Stressed' },
    { id: 'purple', color: 'bg-purple-400', label: 'Overwhelmed' },
  ]

  const symptoms = [
    { label: 'Focus', value: focus, onChange: setFocus, color: 'from-red-500 to-red-200' },
    { label: 'Impulsivity', value: impulsivity, onChange: setImpulsivity, color: 'from-red-500 to-red-200' },
    { label: 'Restlessness', value: restlessness, onChange: setRestlessness, color: 'from-orange-500 to-orange-200' },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Symptom Tracker</h2>
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <MoreVertical size={20} className="text-slate-400" />
        </button>
      </div>

      {/* Today's Check-In Section */}
      <div className="bg-amber-50 rounded-lg p-6 space-y-6">
        <h3 className="text-xl font-bold text-slate-800">Today's Check-In</h3>

        {/* Sliders */}
        {symptoms.map((symptom, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-lg font-semibold text-slate-800">{symptom.label}:</label>
              <span className="text-lg font-bold text-slate-800">{symptom.value} / 5</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="5"
                value={symptom.value}
                onChange={(e) => symptom.onChange(parseInt(e.target.value))}
                className="flex-1 h-2 bg-gradient-to-r from-slate-300 to-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                style={{
                  background: `linear-gradient(to right, ${
                    symptom.label === 'Focus' ? 'rgb(239, 68, 68)' : symptom.label === 'Impulsivity' ? 'rgb(239, 68, 68)' : 'rgb(249, 115, 22)'
                  } 0%, rgb(249, 115, 22) ${(symptom.value / 5) * 100}%, rgb(229, 231, 235) ${(symptom.value / 5) * 100}%, rgb(229, 231, 235) 100%)`
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mood Selector */}
      <div className="mt-6 bg-slate-100 rounded-full p-4 flex items-center gap-3 justify-center flex-wrap">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => setSelectedMood(mood.id)}
            className={`w-10 h-10 rounded-full transition-all duration-200 ${mood.color} ${
              selectedMood === mood.id ? 'ring-2 ring-offset-2 ring-slate-400 scale-110' : 'hover:scale-105'
            }`}
            title={mood.label}
            aria-label={mood.label}
          />
        ))}
      </div>
    </div>
  )
}

export default SymptomTracker
