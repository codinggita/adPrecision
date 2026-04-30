import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';

const SuggestedKeywords = ({ suggestions, onRemove, onAdd }) => {
  return (
    <div className="flex flex-col gap-6 mt-12">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-sm font-black text-[#1F2937] uppercase tracking-[0.2em]">Suggested Keywords</h3>
        <span className="bg-slate-100 text-slate-400 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest">{suggestions.length} New</span>
      </div>

      <div className="flex flex-col gap-4">
        <AnimatePresence mode="popLayout">
          {suggestions.map((kw) => (
            <motion.div
              key={kw.name}
              layout
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white p-6 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-50 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-base font-black text-[#1C3A3A] mb-1">{kw.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Difficulty: {kw.difficulty}</p>
                </div>
                <div className="text-right">
                  <span className="text-emerald-500 font-black text-sm">+{kw.growth}%</span>
                  <p className="text-[9px] font-bold text-slate-300 uppercase tracking-tighter">Proj. Reach</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => onAdd(kw)}
                  className="flex-1 bg-[#1C3A3A] text-white py-3.5 rounded-[18px] text-[10px] font-black uppercase tracking-[0.15em] transition-all hover:bg-emerald-600 shadow-lg shadow-teal-950/10"
                >
                  Add Keyword
                </button>
                <button 
                  onClick={() => onRemove(kw.name)}
                  className="p-3.5 rounded-[18px] text-slate-300 hover:text-rose-500 hover:bg-rose-50 transition-all border border-transparent hover:border-rose-100"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SuggestedKeywords;
