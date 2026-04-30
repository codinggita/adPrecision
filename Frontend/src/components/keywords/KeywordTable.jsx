import React from 'react';
import { motion } from 'framer-motion';
import { MoreVertical, Filter } from 'lucide-react';
import Lottie from 'lottie-react';

const KeywordTable = ({ keywords, loading }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'HIGH PERFORMANCE':
        return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'MEDIUM':
        return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'LOW REACH':
        return 'bg-rose-50 text-rose-600 border-rose-100';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  const getProgressColor = (ctr) => {
    if (ctr >= 4) return 'bg-emerald-500';
    if (ctr >= 2) return 'bg-orange-500';
    return 'bg-rose-500';
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[40px] shadow-sm">
        <div className="w-48 h-48">
          {/* Using a placeholder Lottie animation or a simple CSS loader if JSON isn't available */}
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1C3A3A]"></div>
        </div>
        <p className="mt-4 text-slate-400 font-bold text-xs tracking-widest uppercase">Analyzing Keywords...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden border border-white/50">
      <div className="p-8 flex justify-between items-center bg-white/50 backdrop-blur-sm border-b border-slate-50">
        <h3 className="text-xl font-black text-[#1F2937]">Current Performance</h3>
        <div className="flex items-center gap-4 text-slate-400">
          <Filter size={20} className="cursor-pointer hover:text-primary transition-colors" />
          <MoreVertical size={20} className="cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-50">
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Keyword</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Clicks</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Cost</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">CTR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50/50">
            {keywords.map((kw, index) => (
              <motion.tr 
                key={kw.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
              >
                <td className="px-8 py-6">
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-slate-800 tracking-tight leading-none mb-1.5 group-hover:text-primary transition-colors">{kw.name}</span>
                    <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase">ID: {kw.id}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest border ${getStatusStyle(kw.status)}`}>
                    {kw.status}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <span className="text-sm font-bold text-slate-600 tabular-nums">{kw.clicks.toLocaleString()}</span>
                </td>
                <td className="px-8 py-6">
                  <span className="text-sm font-bold text-slate-600 tabular-nums">${kw.cost.toFixed(2)}</span>
                </td>
                <td className="px-8 py-6 min-w-[150px]">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(kw.ctr * 10, 100)}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full ${getProgressColor(kw.ctr)}`}
                      />
                    </div>
                    <span className="text-xs font-black text-slate-800 tabular-nums">{kw.ctr}%</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-8 bg-slate-50/30 text-center border-t border-slate-50">
        <button className="text-[11px] font-black text-slate-400 hover:text-primary uppercase tracking-[0.2em] transition-all">
          View all {keywords.length * 300}+ keywords
        </button>
      </div>
    </div>
  );
};

export default KeywordTable;
