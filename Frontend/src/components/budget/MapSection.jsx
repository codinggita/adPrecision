import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="bg-white rounded-[48px] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-50 flex flex-col lg:flex-row gap-12 items-center">
      <div className="lg:w-1/3">
        <h3 className="text-3xl font-black text-[#1C3A3A] tracking-tighter mb-6">Market Saturation</h3>
        <p className="text-sm font-bold text-slate-500 leading-relaxed max-w-[280px] mb-8">
            Geographic performance data indicates that central Europe is currently under-allocated relative to its rising search volume.
        </p>
        <button className="flex items-center gap-3 text-accent-orange font-black text-xs uppercase tracking-[0.2em] hover:gap-5 transition-all">
            Explore Heatmap <ArrowRight size={16} />
        </button>
      </div>

      <div className="flex-1 w-full relative">
        <div className="bg-[#f8fafc] rounded-[40px] aspect-[21/9] overflow-hidden relative border border-slate-100 p-8 flex items-center justify-center grayscale group hover:grayscale-0 transition-all duration-1000">
            {/* Using a stylized SVG map for premium feel instead of a broken API link */}
            <svg viewBox="0 0 800 300" className="w-full h-full opacity-30 group-hover:opacity-60 transition-opacity">
                <path d="M150,100 Q180,50 250,80 T350,120 T450,90 T550,130 T650,100" fill="none" stroke="#1C3A3A" strokeWidth="20" strokeLinecap="round" />
                <circle cx="200" cy="120" r="40" fill="#E5E7EB" />
                <circle cx="450" cy="180" r="60" fill="#E5E7EB" />
                <circle cx="600" cy="80" r="30" fill="#E5E7EB" />
                <circle cx="350" cy="50" r="25" fill="#E5E7EB" />
            </svg>

            {/* Marker */}
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10"
            >
                <div className="bg-[#5C3300] p-2.2 rounded-lg shadow-xl shadow-orange-900/40 animate-bounce">
                    <MapPin size={18} className="text-white" fill="currentColor" />
                </div>
                <div className="bg-white px-4 py-2 rounded-xl shadow-2xl border border-slate-100 whitespace-nowrap">
                    <span className="text-[10px] font-black text-[#1C3A3A] uppercase tracking-widest leading-none">EMEA Growth Sector</span>
                </div>
            </motion.div>

            {/* Overlay Grid lines for tech feel */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
