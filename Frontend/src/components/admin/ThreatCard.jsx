import React from 'react';
import { ShieldAlert, ArrowRight, ServerCrash, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const ThreatCard = () => {
  return (
    <div className="flex flex-col gap-8">
        {/* Threat Detection */}
        <div className="bg-rose-50 rounded-[40px] p-8 border border-rose-100 flex items-start gap-6 relative overflow-hidden group">
            {/* Soft pulsing background */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

            <div className="w-14 h-14 bg-white rounded-2xl shrink-0 flex items-center justify-center text-rose-500 shadow-sm relative z-10 border border-rose-50">
                <ShieldAlert size={24} />
            </div>
            <div className="relative z-10">
                <h4 className="text-xl font-black text-[#1C3A3A] tracking-tighter mb-2">Threat Detection</h4>
                <p className="text-sm font-bold text-slate-500 leading-relaxed mb-6">
                    Automated systems blocked 42 suspicious login attempts from unauthorized IPs in the last 24 hours.
                </p>
                <button 
                  onClick={() => toast.error('Security logs restricted to Super Admin', { icon: '🛑' })}
                  className="flex items-center gap-2 text-rose-600 font-black text-[10px] uppercase tracking-widest hover:gap-3 transition-all"
                >
                    View Security Logs <ArrowRight size={14} />
                </button>
            </div>
        </div>

        {/* Infrastructure Update */}
        <div className="bg-[#5C3300] rounded-[40px] p-8 relative overflow-hidden flex transform hover:-translate-y-1 transition-transform shadow-[0_20px_50px_rgba(92,51,0,0.15)] group cursor-pointer">
             <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-4 translate-y-4 group-hover:scale-110 transition-transform duration-700">
                  <ServerCrash size={140} className="text-white" />
             </div>

             <div className="relative z-10 w-full">
                 <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10 text-orange-300">
                     <Rocket size={20} />
                 </div>
                 <h4 className="text-xl font-black text-white tracking-tighter mb-3 leading-tight">Server Cluster Expansion Scheduled for Q4</h4>
                 <p className="text-[11px] font-bold text-white/60 leading-relaxed mb-8">
                     Prepare for a 300% capacity increase to support advanced AI modeling pipelines.
                 </p>
                 <button className="flex items-center justify-between w-full p-4 bg-white/10 rounded-2xl border border-white/5 text-white text-[10px] font-black uppercase tracking-widest group-hover:bg-white text-orange-500 group-hover:border-transparent transition-all">
                      View Roadmap <ArrowRight size={16} />
                 </button>
             </div>
        </div>
    </div>
  );
};

export default ThreatCard;
