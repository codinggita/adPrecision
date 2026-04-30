import React from 'react';

const MetricsCard = ({ icon: Icon, label, value, growth, trend }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md p-7 rounded-[36px] border border-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50/10 to-slate-200/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>

      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className={`p-4 rounded-[20px] transition-all duration-300 ${trend === 'up'
            ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-200'
            : 'bg-slate-50 text-slate-500 group-hover:bg-[#1C3A3A] group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal-200'
          }`}>
          <Icon size={26} strokeWidth={2.5} />
        </div>
        {growth && (
          <div className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${trend === 'up' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
            }`}>
            {growth}
          </div>
        )}
      </div>

      <div className="relative z-10">
        <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.25em] mb-2">{label}</h4>
        <div className="text-4xl font-black text-[#0D2626] tracking-tighter tabular-nums drop-shadow-sm">
          {value}
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${trend === 'up' ? 'bg-emerald-500 w-0 group-hover:w-full' : 'bg-[#1C3A3A] w-0 group-hover:w-full'
        }`}></div>
    </div>
  );
};

export default MetricsCard;
