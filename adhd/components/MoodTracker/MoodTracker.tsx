'use client'

import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { Button } from '@/components/ui/button'

type Props = {}

const MoodTracker = (props: Props) => {
  const [selectedPeriod, setSelectedPeriod] = useState('today')

  // Sample data for mood and energy tracking
  const data = [
    { time: '8 AM', mood: 3, energy: 2 },
    { time: '10 AM', mood: 4, energy: 3 },
    { time: '12 PM', mood: 3, energy: 4 },
    { time: '2 PM', mood: 5, energy: 5 },
    { time: '4 PM', mood: 4, energy: 4 },
    { time: '6 PM', mood: 3, energy: 2 },
  ]

  // Get current mood and energy (last data point)
  const currentMood = data[data.length - 1].mood
  const currentEnergy = data[data.length - 1].energy

  // Mood emojis based on value (1-5 scale)
  const getMoodEmoji = (value: number) => {
    if (value <= 2) return '😞'
    if (value <= 3) return '😐'
    if (value <= 4) return '🙂'
    return '😊'
  }

  const getEnergyEmoji = (value: number) => {
    if (value <= 2) return '😐'
    if (value <= 3) return '🙂'
    if (value <= 4) return '😊'
    return '⚡'
  }

  const getMoodLabel = (value: number) => {
    if (value <= 2) return 'Low'
    if (value <= 3) return 'Meh'
    if (value <= 4) return 'Good'
    return 'Great'
  }

  const getEnergyLabel = (value: number) => {
    if (value <= 2) return 'Low'
    if (value <= 3) return 'Medium'
    if (value <= 4) return 'Good'
    return 'High'
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Mood & Energy Tracker</h2>
        <Button
          variant="outline"
          size="sm"
          className="bg-slate-100 text-slate-600 border-none hover:bg-slate-200"
        >
          Today
        </Button>
      </div>

      {/* Current Status */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{getMoodEmoji(currentMood)}</span>
          <div>
            <p className="text-sm text-slate-500">Mood</p>
            <p className="text-lg font-semibold text-slate-800">{getMoodLabel(currentMood)}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{getEnergyEmoji(currentEnergy)}</span>
          <div>
            <p className="text-sm text-slate-500">Energy</p>
            <p className="text-lg font-semibold text-slate-800">{getEnergyLabel(currentEnergy)}</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="mb-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="time"
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="#94a3b8"
              domain={[0, 5]}
              hide
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '8px',
              }}
              formatter={(value) => [value, '']}
            />
            {/* Mood Line - Blue */}
            <Line
              type="monotone"
              dataKey="mood"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', r: 5 }}
              activeDot={{ r: 7 }}
              isAnimationActive
            />
            {/* Energy Line - Green */}
            <Line
              type="monotone"
              dataKey="energy"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: '#10b981', r: 5 }}
              activeDot={{ r: 7 }}
              isAnimationActive
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-sm text-slate-600">Mood</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm text-slate-600">Energy</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">😊</span>
          <span className="text-2xl">✅</span>
        </div>
      </div>
    </div>
  )
}

export default MoodTracker
