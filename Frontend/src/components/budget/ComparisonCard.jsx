import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, History } from 'lucide-react';

const ComparisonCard = ({ type, roi, cpa, progress, highlighted }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative p-10 rounded-[48px] overflow-hidden transition-all duration-500 ${
        highlighted 
        ? 'bg-[#1C3A3A] text-white shadow-[0_40px_80px_-15px_rgba(28,58,58,0.4)]' 
        : 'bg-white text-slate-800 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)] border border-slate-50'
      }`}
    >
      {/* Decorative Icon */}
      <div className={`absolute top-8 right-8 opacity-20 ${highlighted ? 'text-white' : 'text-slate-200'}`}>
        {type === 'projected' ? <Rocket size={40} /> : <History size={40} />}
      </div>

      <div className="relative z-10">
        <span className={`inline-block px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase mb-12 ${
          highlighted ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-400'
        }`}>
          {type === 'projected' ? 'Projected Optimization' : 'Current State'}
        </span>

        <div className="flex gap-16 mb-12">
            <div>
                <h4 className="text-4xl font-black tracking-tighter mb-1 tabular-nums">{roi}</h4>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${highlighted ? 'text-slate-300' : 'text-slate-400'}`}>Aggregate ROI</p>
            </div>
            <div className={`w-px h-12 self-center ${highlighted ? 'bg-white/10' : 'bg-slate-100'}`}></div>
            <div>
                <h4 className="text-4xl font-black tracking-tighter mb-1 tabular-nums">{cpa}</h4>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${highlighted ? 'text-slate-300' : 'text-slate-400'}`}>CPA Avg</p>
            </div>
        </div>

        <div className="space-y-3">
            <div className="h-2 bg-black/5 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full rounded-full ${highlighted ? 'bg-accent-orange shadow-[0_0_20px_rgba(217,119,6,0.5)]' : 'bg-slate-200'}`}
                />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ComparisonCard;
