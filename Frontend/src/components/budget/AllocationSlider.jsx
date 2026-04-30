import React from 'react';
import { motion } from 'framer-motion';

const AllocationSlider = ({ id, name, platform, budget, trend, status, onChange }) => {
  const max = 25000;
  const optimal = 12500;

  const handleSliderChange = (e) => {
    onChange(id, parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col gap-6 py-6 border-b border-slate-50 last:border-0 group">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-sm font-black text-[#1C3A3A] mb-1 group-hover:text-primary transition-colors">{name}</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{platform}</p>
        </div>
        <div className="text-right">
          <div className="text-xl font-black text-[#0D2626] tracking-tighter tabular-nums mb-1">${budget.toLocaleString()}</div>
          <span className={`text-[9px] font-black uppercase tracking-widest ${
            status === 'up' ? 'text-emerald-500' : status === 'down' ? 'text-rose-500' : 'text-slate-400'
          }`}>
            {trend} {trend !== 'Stable' && 'vs Last Period'}
          </span>
        </div>
      </div>

      <div className="relative pt-4 pb-2">
        {/* Custom Range Slider */}
        <input
          type="range"
          min="0"
          max={max}
          value={budget}
          onChange={handleSliderChange}
          className="absolute top-4 left-0 w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer z-20 accent-[#1C3A3A]"
          style={{
            background: `linear-gradient(to right, #1C3A3A 0%, #1C3A3A ${(budget/max)*100}%, #f1f5f9 ${(budget/max)*100}%, #f1f5f9 100%)`
          }}
        />
        
        {/* Indicators Overlay */}
        <div className="flex justify-between items-center mt-6 text-[9px] font-black text-slate-300 uppercase tracking-widest">
            <span>$0</span>
            <div className="flex flex-col items-center">
                <div className="w-px h-2 bg-slate-200 mb-1"></div>
                <span>$12.5k Optimal</span>
            </div>
            <span>$25k</span>
        </div>

        {/* Optimal Marker */}
        <div 
            className="absolute top-2 w-4 h-4 bg-white border-2 border-slate-200 rounded-full z-10"
            style={{ left: `${(optimal/max)*100}%`, transform: 'translateX(-50%)' }}
        ></div>
      </div>
    </div>
  );
};

export default AllocationSlider;
