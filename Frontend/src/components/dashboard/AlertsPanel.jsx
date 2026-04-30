import React from 'react';
import { AlertTriangle, TrendingUp, ArrowRight } from 'lucide-react';

const AlertsPanel = () => {
  return (
    <div className="bg-[#F8FAFC] p-8 rounded-[40px] border border-slate-100 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp size={20} className="text-[#1C3A3A]" />
        <h3 className="text-sm font-black text-[#1F2937] uppercase tracking-[0.15em]">Optimization Alerts</h3>
      </div>

      <div className="space-y-4">
        {/* Active Alert */}
        <div className="bg-white p-6 rounded-[32px] border-l-4 border-[#5C3300] shadow-sm">
          <div className="bg-orange-50 text-orange-700 text-[10px] font-black px-2 py-1 rounded-lg w-fit mb-3 uppercase tracking-wider">
            High Impact
          </div>
          <p className="text-sm font-bold text-slate-700 leading-relaxed mb-4">
            Scaling opportunity detected for 'Summer Essentials' campaign.
          </p>
          <button className="text-xs font-black text-[#1F2937] underline underline-offset-4 decoration-2 decoration-orange-200 hover:decoration-orange-500 transition-all">
            Apply Optimization
          </button>
        </div>

        {/* Placeholder Alerts */}
        <div className="bg-white/40 p-6 rounded-[32px] border border-slate-100 blur-[1px] opacity-60">
          <div className="h-4 bg-slate-200 rounded-full w-2/3 mb-4"></div>
          <div className="h-3 bg-slate-100 rounded-full w-full"></div>
        </div>
        <div className="bg-white/40 p-6 rounded-[32px] border border-slate-100 blur-[1px] opacity-60">
          <div className="h-4 bg-slate-200 rounded-full w-1/2 mb-4"></div>
          <div className="h-3 bg-slate-100 rounded-full w-4/5"></div>
        </div>
      </div>

      <button className="mt-auto pt-6 flex items-center justify-center gap-2 text-xs font-black text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-[0.2em]">
        View All Insights
        <ArrowRight size={14} />
      </button>
    </div>
  );
};

export default AlertsPanel;
