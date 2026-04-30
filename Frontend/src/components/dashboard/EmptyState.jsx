import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Database, BarChart2 } from 'lucide-react';

const EmptyState = ({ onCreateFirst }) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 animate-in fade-in zoom-in duration-700">
      <div className="w-96 h-64 bg-slate-100 rounded-[48px] flex items-center justify-center relative mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-white overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3A3A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-slate-50 transform group-hover:scale-110 transition-transform duration-500">
           <BarChart2 className="text-[#1C3A3A]" size={48} />
        </div>
        <div className="absolute bottom-10 flex gap-2">
            {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-1.5 bg-slate-200 rounded-full"></div>
            ))}
        </div>
      </div>

      <h2 className="text-4xl font-black text-[#1C3A3A] tracking-tighter mb-4">No Campaigns Found</h2>
      <p className="text-slate-500 font-bold text-lg max-w-md text-center leading-relaxed mb-12">
        It looks like your dashboard is waiting for its first spark. Start your journey by creating a data-driven campaign.
      </p>

      <div className="flex items-center gap-8">
        <button 
           onClick={onCreateFirst}
           className="bg-[#1C3A3A] hover:bg-[#0D2626] text-white px-10 py-5 rounded-[22px] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-teal-950/20 transition-all flex items-center gap-3 active:scale-95"
        >
          <Plus size={18} />
          Create Your First Campaign
        </button>
        <button className="text-[#1C3A3A] font-black text-xs uppercase tracking-[0.2em] hover:gap-4 flex items-center gap-2 transition-all group">
            <Database size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
            Import Data
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
