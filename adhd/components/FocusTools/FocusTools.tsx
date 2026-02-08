'use client'

import React, { useState } from 'react'
import { Plus, Settings, Menu, Lock, Volume2, VolumeX } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

type Props = {}

const FocusTools = (props: Props) => {
  const [activeTab, setActiveTab] = useState('pomodoro')
  const [timePeriod, setTimePeriod] = useState('week')
  const [soundEnabled, setSoundEnabled] = useState(true)

  const moodEnergyData = [
    { time: '1', mood: 69, energy: 50 },
    { time: '2', mood: 65, energy: 52 },
    { time: '3', mood: 62, energy: 51 },
    { time: '4', mood: 65, energy: 50 },
    { time: '5', mood: 68, energy: 52 },
    { time: '6', mood: 70, energy: 55 },
    { time: '7', mood: 72, energy: 52 },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 max-w-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Focus Tools</h2>
        <div className="flex items-center gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
            <Plus size={24} />
          </button>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 p-2 rounded-lg transition-colors">
            <Settings size={24} />
          </button>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 p-2 rounded-lg transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Tab Selection */}
      <div className="bg-white rounded-full p-1 mb-8 flex items-center gap-2 border border-slate-200">
        <button
          onClick={() => setActiveTab('pomodoro')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
            activeTab === 'pomodoro'
              ? 'bg-slate-100 text-slate-800'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <Lock size={18} />
          Pomodoro Timer
        </button>
        <button
          onClick={() => setActiveTab('whiteNoise')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
            activeTab === 'whiteNoise'
              ? 'bg-slate-100 text-slate-800'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <span className="text-2xl">🎧</span>
          White Noise
        </button>
        <div className="ml-auto flex items-center gap-2">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Volume2 size={20} className="text-blue-500" />
          </button>
          
        </div>
      </div>

      {/* Mood & Energy Chart */}
      <div className="bg-white rounded-2xl p-6 mb-8 border border-slate-200">
        <div className="flex items-center gap-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">😊</span>
            <span className="text-slate-600 font-semibold">Mod</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 bg-green-500 rounded-full"></span>
            <span className="text-slate-600 font-semibold">Energy</span>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-6 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={moodEnergyData}>
              <defs>
                <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[40, 75]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
              />
              <Area 
                type="monotone" 
                dataKey="mood" 
                stroke="#06b6d4" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorMood)"
              />
              <Area 
                type="monotone" 
                dataKey="energy" 
                stroke="#f59e0b" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorEnergy)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Time Period Selector */}
        <div className="flex items-center justify-center gap-8 text-slate-500 text-sm font-semibold">
          <button
            onClick={() => setTimePeriod('week')}
            className={`transition-colors ${timePeriod === 'week' ? 'text-slate-700' : ''}`}
          >
            Week
          </button>
          <button
            onClick={() => setTimePeriod('month')}
            className={`transition-colors ${timePeriod === 'month' ? 'text-slate-700' : ''}`}
          >
            1
          </button>
          <button
            onClick={() => setTimePeriod('trends')}
            className={`transition-colors ${timePeriod === 'trends' ? 'text-slate-700' : ''}`}
          >
            Trends
          </button>
        </div>
      </div>

      {/* Start Focus Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl py-4 rounded-xl transition-colors flex items-center justify-center gap-3">
        Start Focus
        <span>→</span>
      </button>
    </div>
  )
}

export default FocusTools
