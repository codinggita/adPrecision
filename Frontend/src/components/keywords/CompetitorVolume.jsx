import React from 'react';
import { motion } from 'framer-motion';

const CompetitorVolume = ({ competitors }) => {
  return (
    <div className="bg-slate-50/50 p-8 rounded-[40px] border border-slate-100 mt-12">
      <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-8">Competitor Volume</h3>
      
      <div className="flex flex-col gap-6">
        {competitors.map((comp) => (
          <div key={comp.name} className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
              <span className="text-slate-600">{comp.name}</span>
              <span className="text-slate-800">${(comp.spend / 1000).toFixed(1)}k spend</span>
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(comp.spend / 5000) * 100}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-[#1C3A3A] rounded-full"
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-[9px] font-bold text-slate-300 italic leading-relaxed">
        Market trends updated 14 minutes ago via real-time bidding stream.
      </p>
    </div>
  );
};

export default CompetitorVolume;
