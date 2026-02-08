'use client'

import React from 'react'
import { ChevronRight } from 'lucide-react'

const HealthTipsTagline = () => {
  return (
    <div className="bg-slate-200 rounded-2xl px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-slate-300 transition-colors group">
      <div className="flex items-center gap-4">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-slate-400" />
          <div className="w-2 h-2 rounded-full bg-slate-400" />
          <div className="w-2 h-2 rounded-full bg-slate-400" />
        </div>
        <p className="text-slate-800 font-medium">
          Real-Time Health Tips: <span className="italic">Stay Updated on Flu Season!</span>
        </p>
      </div>
      
      <ChevronRight size={24} className="text-slate-600 group-hover:translate-x-1 transition-transform" />
    </div>
  )
}

export default HealthTipsTagline
