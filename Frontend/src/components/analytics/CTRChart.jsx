import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1C3A3A] text-white p-4 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md">
        <p className="text-[10px] font-black uppercase tracking-widest mb-3 border-b border-white/10 pb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-3 mb-1.5 last:mb-0">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
            <span className="text-xs font-bold">{entry.name}:</span>
            <span className="text-xs font-black tabular-nums">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const CTRChart = ({ data }) => {
  return (
    <div className="bg-white rounded-[48px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-50 h-[500px] flex flex-col">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h3 className="text-2xl font-black text-[#1C3A3A] tracking-tighter mb-1">CTR Trends</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Click-through performance by platform segment</p>
        </div>
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#1C3A3A] rounded-full"></div>
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Facebook</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent-orange rounded-full"></div>
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Google Ads</span>
            </div>
        </div>
      </div>

      <div className="flex-1 w-full overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} 
                dy={15}
            />
            <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} 
                dx={-10}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
            <Bar 
                dataKey="facebook" 
                fill="#1C3A3A" 
                radius={[6, 6, 0, 0]} 
                barSize={12} 
                animationDuration={2000}
            />
            <Bar 
                dataKey="googleAds" 
                fill="#D97706" 
                radius={[6, 6, 0, 0]} 
                barSize={12} 
                animationDuration={2000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CTRChart;
