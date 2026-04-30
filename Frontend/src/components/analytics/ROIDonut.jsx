import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const ROIDonut = ({ data }) => {
  return (
    <div className="bg-white rounded-[48px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-50 h-[500px] flex flex-col">
      <div className="mb-10">
        <h3 className="text-2xl font-black text-[#1C3A3A] tracking-tighter mb-1">ROI Breakdown</h3>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Channel efficiency ratio</p>
      </div>

      <div className="flex-1 min-h-[250px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={110}
              paddingAngle={8}
              dataKey="value"
              animationDuration={1500}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
                contentStyle={{ 
                    backgroundColor: '#1C3A3A', 
                    borderRadius: '16px', 
                    border: 'none', 
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 900,
                    textTransform: 'uppercase'
                }} 
                itemStyle={{ color: '#fff' }}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h4 className="text-4xl font-black text-[#1C3A3A] tracking-tighter tabular-nums leading-none">3.8x</h4>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Avg. ROI</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center bg-slate-50/50 p-4 rounded-2xl group hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-[11px] font-black text-[#1C3A3A] uppercase tracking-widest">{item.name}</span>
            </div>
            <span className="text-base font-black text-[#0D2626] tabular-nums tracking-tighter">{item.value}x</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ROIDonut;
