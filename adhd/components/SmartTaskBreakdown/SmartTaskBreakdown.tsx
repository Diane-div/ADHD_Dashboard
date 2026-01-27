'use client'

import React, { useState } from 'react'
import { MoreVertical, ArrowRight } from 'lucide-react'

interface Task {
  id: number
  title: string
  steps: string[]
}

const SmartTaskBreakdown = () => {
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Project Outline',
      steps: [
        'Open your notes',
        'Write the first heading',
        'Jot down 3 main points',
      ],
    },
  ])

  const handleStartTask = (taskId: number) => {
    console.log(`Starting task ${taskId}`)
  }

  return (
    <div className="w-full bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-yellow-200">
        <h2 className="text-2xl font-bold text-slate-800">Smart Task Breakdown</h2>
      </div>

      {/* Task Cards */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-xl p-6 border border-yellow-100 shadow-sm"
          >
            {/* Task Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">{task.title}</h3>
              <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical size={20} className="text-slate-600" />
              </button>
            </div>

            {/* Task Steps */}
            <div className="space-y-3 mb-6">
              {task.steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <span className="font-semibold text-slate-700 min-w-fit">
                    {index + 1}.
                  </span>
                  <p className="text-slate-700">{step}</p>
                </div>
              ))}
            </div>

            {/* Start Task Button */}
            <div className="flex justify-end">
              <button
                onClick={() => handleStartTask(task.id)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg flex items-center gap-2 transition-colors"
              >
                Start Task
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SmartTaskBreakdown
