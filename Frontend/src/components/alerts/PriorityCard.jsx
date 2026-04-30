import React from 'react';
import { motion } from 'framer-motion';

const PriorityCard = ({ count }) => {
  return (
    <div className="bg-[#305E5E] rounded-[36px] p-10 text-white relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(48,94,94,0.4)] mb-10">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-20 -mb-20 group-hover:scale-110 transition-transform duration-700"></div>
      
      <div className="relative z-10">
        <h3 className="text-3xl font-black tracking-tighter mb-4">Priority Alerts</h3>
        <p className="text-slate-300 font-bold text-sm leading-relaxed mb-12 max-w-[200px]">
          You have 4 critical budget issues requiring immediate attention.
        </p>

        <div className="text-7xl font-black tracking-tighter mb-12 tabular-nums">
          {count}
        </div>

        <button className="w-full bg-[#5C3300] hover:bg-[#4A2900] text-white py-5 rounded-[22px] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-black/20 active:scale-[0.98]">
          Resolve Top Priority
        </button>
      </div>
    </div>
  );
};

export default PriorityCard;
