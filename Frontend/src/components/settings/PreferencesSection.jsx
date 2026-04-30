import React from 'react';
import { Sun, Moon, Sliders, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const PreferencesSection = ({ theme, onThemeToggle, frequency, onFrequencyChange }) => {
  return (
    <div className="pt-12 border-t border-slate-50 mb-12 animate-in fade-in slide-in-from-top-4 duration-1000 delay-200">
      <div className="flex items-center gap-3 mb-8">
        <Sliders className="text-[#1C3A3A]" size={20} />
        <h3 className="text-xl font-black text-[#1C3A3A] tracking-tighter">Experience Preferences</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Interface Mode */}
        <div className="bg-slate-50/50 p-8 rounded-[36px] flex items-center justify-between border border-slate-50 group hover:bg-slate-50 transition-colors">
          <div>
            <p className="text-sm font-black text-[#1C3A3A] mb-1">Interface Mode</p>
            <p className="text-[11px] font-bold text-slate-400">Switch between paper and ink modes</p>
          </div>
          <div className="bg-white p-1.5 rounded-full flex items-center shadow-inner border border-slate-100 relative">
            <motion.div 
               animate={{ x: theme === 'light' ? 0 : 36 }}
               className="absolute w-8 h-8 bg-[#1C3A3A] rounded-full z-0"
            />
            <button 
                onClick={() => theme === 'dark' && onThemeToggle()}
                className={`w-8 h-8 flex items-center justify-center relative z-10 transition-colors ${theme === 'light' ? 'text-white' : 'text-slate-300'}`}
            >
              <Sun size={14} fill="currentColor" />
            </button>
            <button 
                onClick={() => theme === 'light' && onThemeToggle()}
                className={`w-8 h-8 flex items-center justify-center relative z-10 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-300'} ml-1`}
            >
              <Moon size={14} fill="currentColor" />
            </button>
          </div>
        </div>

        {/* Insight Frequency */}
        <div className="bg-slate-50/50 p-8 rounded-[36px] flex items-center justify-between border border-slate-50 group hover:bg-slate-50 transition-colors">
          <div>
            <p className="text-sm font-black text-[#1C3A3A] mb-1">Insight Frequency</p>
            <p className="text-[11px] font-bold text-slate-400">How often you receive digests</p>
          </div>
          <div className="relative">
            <select 
                value={frequency}
                onChange={(e) => onFrequencyChange(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-2xl px-6 py-2.5 text-xs font-black text-[#1C3A3A] pr-10 outline-none hover:border-slate-300 transition-all cursor-pointer shadow-sm"
            >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesSection;
