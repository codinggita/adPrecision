import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { name: 'WEEK 01', spend: 35, roi: 25 },
  { name: 'WEEK 02', spend: 45, roi: 65 },
  { name: 'WEEK 03', spend: 85, roi: 30 },
  { name: 'WEEK 04', spend: 55, roi: 78 },
  { name: 'WEEK 05', spend: 65, roi: 45 },
];

const ChartSection = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md p-10 rounded-[48px] border border-white/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.04)] h-full transition-all hover:shadow-2xl">
      <div className="flex justify-between items-start mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Live Performance</span>
          </div>
          <h3 className="text-[28px] font-black text-[#0D2626] tracking-tight leading-none">Spend vs. Efficiency</h3>
          <p className="text-slate-400 text-xs font-bold mt-2">Algorithmic performance mapping across channels</p>
        </div>
        
        <div className="flex gap-8 bg-slate-50/50 p-3 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#1C3A3A] shadow-lg shadow-teal-900/20"></div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Spend</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#D97706] shadow-lg shadow-orange-900/20"></div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">ROI</span>
          </div>
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1C3A3A" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#1C3A3A" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorROI" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D97706" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#D97706" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="8 8" vertical={false} stroke="#E2E8F0" strokeOpacity={0.6} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 900, letterSpacing: '0.2em' }} 
              dy={25}
            />
            <YAxis hide domain={[0, 100]} />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '24px', 
                border: '1px solid rgba(0,0,0,0.05)', 
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', 
                padding: '20px',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)'
              }}
              cursor={{ stroke: '#94A3B8', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Area 
              type="monotone" 
              dataKey="spend" 
              stroke="#1C3A3A" 
              strokeWidth={5} 
              fillOpacity={1} 
              fill="url(#colorSpend)"
              activeDot={{ r: 8, strokeWidth: 0, fill: '#1C3A3A', shadow: '0 0 20px rgba(28,58,58,0.4)' }} 
            />
            <Area 
              type="monotone" 
              dataKey="roi" 
              stroke="#D97706" 
              strokeWidth={5} 
              strokeDasharray="10 10"
              fillOpacity={1} 
              fill="url(#colorROI)"
              activeDot={{ r: 8, strokeWidth: 0, fill: '#D97706', shadow: '0 0 20px rgba(217,119,6,0.4)' }} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
