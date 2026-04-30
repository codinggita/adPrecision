import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, HardDrive, Activity, Network } from 'lucide-react';

const InfrastructureCard = ({ metrics }) => {
  return (
    <div className="bg-white rounded-[40px] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] border border-slate-50">
      <div className="flex items-start justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
                <Server size={24} className="text-[#1C3A3A]" />
                <h3 className="text-2xl font-black text-[#1C3A3A] tracking-tighter">Core Server Farm 01</h3>
            </div>
            <p className="text-sm font-bold text-slate-400">Primary Optimization Engine Cluster</p>
          </div>
          <div className="text-right">
              <span className="text-2xl font-black text-emerald-600 tracking-tighter tabular-nums">{metrics.uptime}%</span>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Uptime Index</p>
          </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
          {/* CPU Metric */}
          <div className="bg-slate-50/50 p-6 rounded-[24px] border border-slate-100">
              <div className="flex items-center gap-3 mb-4 text-slate-500">
                  <Cpu size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">CPU Load</span>
              </div>
              <div className="flex items-end gap-3 mb-3">
                  <span className="text-4xl font-black text-[#1C3A3A] leading-none tabular-nums tracking-tighter">{metrics.cpu}</span>
                  <span className="text-sm font-bold text-slate-400 mb-1">%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                     className="h-full bg-orange-500 rounded-full"
                     animate={{ width: `${metrics.cpu}%` }}
                     transition={{ type: "spring", stiffness: 50 }}
                  />
              </div>
          </div>

          {/* Memory Metric */}
          <div className="bg-slate-50/50 p-6 rounded-[24px] border border-slate-100">
              <div className="flex items-center gap-3 mb-4 text-slate-500">
                  <HardDrive size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Memory Use</span>
              </div>
              <div className="flex items-end gap-3 mb-3">
                  <span className="text-4xl font-black text-[#1C3A3A] leading-none tabular-nums tracking-tighter">{metrics.memory}</span>
                  <span className="text-sm font-bold text-slate-400 mb-1">GB</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                     className="h-full bg-emerald-500 rounded-full"
                     animate={{ width: `${(metrics.memory / 32) * 100}%` }}
                     transition={{ type: "spring", stiffness: 50 }}
                  />
              </div>
          </div>

          {/* Latency Metric */}
          <div className="bg-slate-50/50 p-6 rounded-[24px] border border-slate-100">
              <div className="flex items-center gap-3 mb-4 text-slate-500">
                  <Activity size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">API Latency</span>
              </div>
              <div className="flex items-end gap-3 mb-3">
                  <span className="text-4xl font-black text-[#1C3A3A] leading-none tabular-nums tracking-tighter">{metrics.latency}</span>
                  <span className="text-sm font-bold text-slate-400 mb-1">ms</span>
              </div>
              {/* Fake historical graph line for visuals */}
              <svg viewBox="0 0 100 20" className="w-full h-4 overflow-visible">
                  <polyline points="0,15 20,10 40,18 60,8 80,12 100,2" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
          </div>

          {/* Network Metric */}
          <div className="bg-slate-50/50 p-6 rounded-[24px] border border-slate-100">
              <div className="flex items-center gap-3 mb-4 text-slate-500">
                  <Network size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Network I/O</span>
              </div>
              <div className="flex items-end gap-3 mb-3">
                  <span className="text-4xl font-black text-[#1C3A3A] leading-none tabular-nums tracking-tighter">{metrics.network}</span>
                  <span className="text-sm font-bold text-slate-400 mb-1">Gbps</span>
              </div>
              <div className="w-full h-1.5 flex gap-1">
                  {[...Array(6)].map((_, i) => (
                      <div key={i} className={`flex-1 rounded-full ${i < Math.floor(metrics.network * 2) ? 'bg-[#1C3A3A]' : 'bg-slate-200'}`}></div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default InfrastructureCard;
