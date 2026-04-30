import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, HelpCircle, ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ErrorState = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20">
      <div className="animate-in slide-in-from-left duration-1000">
        <span className="px-5 py-2 rounded-full bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-10 inline-block border border-orange-100">ERROR 404</span>
        <h2 className="text-7xl font-black text-[#1C3A3A] tracking-tighter mb-8 leading-none">
            Lost in the <br/> data?
        </h2>
        <p className="text-slate-500 font-bold text-xl leading-relaxed mb-12 max-w-lg">
            The metrics you’re looking for seem to have shifted. Even the most precise optimization engines hit a dead end occasionally.
        </p>

        <div className="flex flex-col gap-6">
            <Link to="/dashboard" className="bg-white p-8 rounded-[36px] flex items-center justify-between border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] group hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#1C3A3A] group-hover:bg-primary group-hover:text-white transition-colors">
                        <LayoutDashboard size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-black text-[#1C3A3A]">Return to Dashboard</p>
                        <p className="text-[11px] font-bold text-slate-400">Back to your optimization overview</p>
                    </div>
                </div>
                <ArrowRight size={20} className="text-slate-200 group-hover:text-[#1C3A3A] group-hover:translate-x-2 transition-all" />
            </Link>

            <button className="bg-white p-8 rounded-[36px] flex items-center justify-between border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] group hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#1C3A3A] group-hover:bg-primary group-hover:text-white transition-colors">
                        <HelpCircle size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-black text-[#1C3A3A]">Contact Support</p>
                        <p className="text-[11px] font-bold text-slate-400">Get help finding what you need</p>
                    </div>
                </div>
                <ArrowRight size={20} className="text-slate-200 group-hover:text-[#1C3A3A] group-hover:translate-x-2 transition-all" />
            </button>
        </div>
      </div>

      <div className="relative animate-in slide-in-from-right duration-1000">
          <div className="bg-[#1C3A3A] rounded-[48px] aspect-[4/5] relative overflow-hidden flex items-center justify-center p-20 shadow-[0_40px_80px_-20px_rgba(28,58,58,0.4)]">
              {/* Abstract 404 Visual */}
              <div className="absolute inset-0 opacity-20 flex items-center justify-center pointer-events-none">
                  <span className="text-[300px] font-black text-white mix-blend-overlay">404</span>
              </div>
              <div className="relative z-10 text-center">
                  <h3 className="text-4xl font-black text-white tracking-tighter mb-4">Curated Precision</h3>
                  <p className="text-emerald-500/80 font-bold text-sm leading-relaxed max-w-xs">
                      Optimization is a journey through patterns. Sometimes the pattern breaks. We help you find the way back.
                  </p>
              </div>

              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-12 left-12 bg-white/10 backdrop-blur-3xl p-8 rounded-[32px] border border-white/20 shadow-2xl z-20"
              >
                  <p className="text-[9px] font-black text-white/50 uppercase tracking-widest mb-1">Error Rate Index</p>
                  <p className="text-3xl font-black text-white tabular-nums tracking-tighter">0.00%</p>
                  <div className="mt-4 w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-emerald-500 rounded-full"></div>
                  </div>
              </motion.div>

              <button className="absolute top-8 right-8 w-12 h-12 bg-white p-2 rounded-full shadow-xl flex items-center justify-center hover:rotate-90 transition-transform duration-500">
                  <Plus className="text-[#1C3A3A]" />
              </button>
          </div>
      </div>
    </div>
  );
};

export default ErrorState;
