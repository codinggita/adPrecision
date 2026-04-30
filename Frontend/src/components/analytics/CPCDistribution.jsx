import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const CPCDistribution = ({ data }) => {
  return (
    <div className="bg-white rounded-[48px] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-50 relative overflow-hidden">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h3 className="text-3xl font-black text-[#1C3A3A] tracking-tighter mb-1">CPC Distribution</h3>
          <p className="text-sm font-bold text-slate-400">Detailed cost variance across campaign groups</p>
        </div>
        <button className="flex items-center gap-2 text-accent-orange font-black text-xs uppercase tracking-widest hover:gap-4 transition-all">
          View Full Dataset <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-50">
              <th className="pb-8 text-[11px] font-black text-slate-300 uppercase tracking-[0.2em]">Campaign Group</th>
              <th className="pb-8 text-[11px] font-black text-slate-300 uppercase tracking-[0.2em] text-center">Avg. CPC</th>
              <th className="pb-8 text-[11px] font-black text-slate-300 uppercase tracking-[0.2em] text-center px-10">Efficiency</th>
              <th className="pb-8 text-[11px] font-black text-slate-300 uppercase tracking-[0.2em] text-right">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50/50">
            {data.map((row, index) => (
              <motion.tr 
                key={row.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <td className="py-10">
                    <div className="flex items-center gap-6">
                        <div className={`w-1.5 h-10 rounded-full ${row.status === 'Active' ? 'bg-emerald-500' : 'bg-orange-400'}`}></div>
                        <div>
                            <p className="text-lg font-black text-[#1C3A3A] tracking-tight group-hover:text-primary transition-colors">{row.name}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{row.status} • {row.segments} Segments</p>
                        </div>
                    </div>
                </td>
                <td className="py-10 text-center">
                    <span className="text-xl font-black text-[#0D2626] tracking-tighter tabular-nums">${row.avgCpc.toFixed(2)}</span>
                </td>
                <td className="py-10 px-10">
                    <div className="flex flex-col gap-3 max-w-[200px] mx-auto">
                        <div className="flex justify-between items-center px-1">
                            <span className={`text-[9px] font-black uppercase tracking-widest ${
                                row.efficiency === 'ELITE' ? 'text-emerald-500' : row.efficiency === 'HIGH' ? 'text-emerald-400' : 'text-orange-500'
                            }`}>{row.efficiency}</span>
                            <span className="text-[10px] font-bold text-slate-300 italic">Target: $1.20</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${row.progress}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full rounded-full ${
                                    row.efficiency === 'ELITE' ? 'bg-[#064E3B]' : row.efficiency === 'HIGH' ? 'bg-[#1C3A3A]' : 'bg-[#5C3300]'
                                }`}
                            />
                        </div>
                    </div>
                </td>
                <td className="py-10 text-right">
                    <div className={`flex items-center justify-end gap-2 font-black text-sm tabular-nums ${
                        row.trendStatus === 'up' ? 'text-emerald-500' : 'text-rose-500'
                    }`}>
                        {row.trendStatus === 'up' ? <ArrowUpRight size={18} strokeWidth={3} /> : <ArrowDownRight size={18} strokeWidth={3} />}
                        {row.trend}
                    </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAB Shadow Placeholder */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default CPCDistribution;
