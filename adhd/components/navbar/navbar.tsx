'use client'

import React, { useState } from 'react'
import { Home, CheckSquare, BookOpen, Users, User, Bell, Settings, Menu, X } from 'lucide-react'

type Props = {}

const Navbar = (props: Props) => { 
  const [isOpen, setIsOpen] = useState(false);

  const navbarFunctions = [
    { label: 'Home', icon: Home },
    { label: 'Tasks', icon: CheckSquare },
    { label: 'Learning', icon: BookOpen },
    { label: 'Community', icon: Users },
    { label: 'My Profile', icon: User },
  ];

  return (
    <nav className="bg-slate-100 border-b border-slate-200">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left Navigation Items - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navbarFunctions.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.label}
                  className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors font-medium text-sm"
                >
                  <IconComponent size={20} className="text-teal-600" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Hamburger Menu - Visible on Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-200 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X size={24} className="text-slate-700" />
            ) : (
              <Menu size={24} className="text-slate-700" />
            )}
          </button>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
              <User size={20} className="text-slate-700" />
            </button>
            <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
              <Bell size={20} className="text-slate-700" />
            </button>
            <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
              <Settings size={20} className="text-slate-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Visible when Open */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            {navbarFunctions.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors font-medium text-sm rounded-lg"
                >
                  <IconComponent size={20} className="text-teal-600" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
