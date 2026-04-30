import React from 'react';
import { ArrowRight } from 'lucide-react';

const MaintenanceBanner = () => {
  return (
    <div className="mt-20 bg-[#1C3A3A] rounded-[48px] p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
              <path d="M10 10 Q 50 10 50 50 T 90 90" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
      </div>

      <div className="max-w-xl relative z-10">
        <h3 className="text-4xl font-black text-white tracking-tighter mb-4">Under Maintenance?</h3>
        <p className="text-emerald-500/80 font-bold text-lg leading-relaxed mb-10">
            If you're seeing repeated empty states, we might be calibrating the optimization engine for your account.
        </p>
        <div className="flex items-center gap-4 py-3 px-6 bg-black/20 rounded-2xl w-fit border border-white/5">
            <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">System Status: Operational</span>
        </div>
      </div>

      <div className="lg:w-96 bg-white/5 backdrop-blur-3xl p-10 rounded-[40px] border border-white/10 relative z-10 group hover:border-white/20 transition-all">
          <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-4">Pro Tip: Precision Launch</p>
          <p className="text-sm font-bold text-white/80 leading-relaxed mb-8">
              Start with a "Discovery Campaign" if you lack historical data. Our AI will curate initial insights based on market benchmarks.
          </p>
          <button className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.2em] hover:gap-5 transition-all">
              Read the Guide <ArrowRight size={16} className="text-emerald-500" />
          </button>
      </div>
    </div>
  );
};

export default MaintenanceBanner;
