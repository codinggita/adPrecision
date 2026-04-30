import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Target, ShieldCheck } from 'lucide-react';

const PrecisionCard = () => {
  return (
    <div className="bg-[#E5E7EB] rounded-[48px] p-10 flex flex-col gap-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles size={120} className="text-slate-900" />
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-black text-[#1C3A3A] tracking-tighter mb-4">Precision Shift</h3>
        <p className="text-sm font-bold text-slate-500 leading-relaxed max-w-[240px]">
          AI engine suggests a capital migration to capture emerging high-intent traffic in EMEA regions.
        </p>
      </div>

      {/* Impact Action Box */}
      <motion.div 
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-white rounded-[32px] p-8 shadow-2xl shadow-slate-300/50 border border-white relative z-10"
      >
        <span className="inline-block px-3 py-1 bg-orange-50 text-accent-orange text-[9px] font-black tracking-widest rounded-full mb-6 uppercase">
            High Impact Action
        </span>
        <h4 className="text-lg font-black text-[#1C3A3A] leading-tight mb-4">
            Shift $500 from Campaign A to Campaign B
        </h4>
        <div className="flex justify-between items-center">
            <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Estimated ROI Lift</p>
                <p className="text-emerald-500 font-black text-sm">+12.4%</p>
            </div>
            <button className="text-[10px] font-black text-[#1C3A3A] uppercase tracking-[0.2em] hover:underline underline-offset-4 decoration-2">
                Apply Now
            </button>
        </div>
      </motion.div>

      <div className="flex flex-col gap-4 relative z-10">
        <div className="flex items-center gap-4 bg-white/40 p-4 rounded-2xl border border-white/50 backdrop-blur-sm">
            <TrendingUp size={18} className="text-[#1C3A3A]" />
            <span className="text-[11px] font-bold text-[#1C3A3A]">Capture $2.4k untapped reach</span>
        </div>
        <div className="flex items-center gap-4 bg-white/40 p-4 rounded-2xl border border-white/50 backdrop-blur-sm">
            <ShieldCheck size={18} className="text-[#1C3A3A]" />
            <span className="text-[11px] font-bold text-[#1C3A3A]">94% Confidence score</span>
        </div>
      </div>
    </div>
  );
};

export default PrecisionCard;
