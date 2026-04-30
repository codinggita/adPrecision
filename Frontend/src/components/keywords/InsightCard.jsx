import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const InsightCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#1C3A3A] rounded-[40px] p-10 text-white shadow-[0_30px_60px_-15px_rgba(28,58,58,0.3)] relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-32 -mt-32 group-hover:bg-white/10 transition-all duration-700"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="text-accent-orange" size={24} />
          <h3 className="text-xl font-black tracking-tight">AI Insights</h3>
        </div>

        <p className="text-slate-300 font-bold text-sm leading-relaxed mb-10">
          Our engine detected a cluster of high-intent keywords in the <span className="text-white font-black italic">DevOps Security</span> vertical that align with your current audience.
        </p>

        <button className="w-full bg-[#5C3300] hover:bg-[#4A2900] text-white py-5 rounded-[22px] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-black/20 active:scale-[0.98]">
          Apply All Suggestions
        </button>
      </div>
    </motion.div>
  );
};

export default InsightCard;
