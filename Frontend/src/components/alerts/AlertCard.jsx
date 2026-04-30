import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Lightbulb, Activity, Layers, Check, Clock } from 'lucide-react';

const AlertCard = ({ title, description, type, timestamp, read, actionLabel, onMarkRead }) => {
  const getIcon = () => {
    switch (type) {
      case 'CRITICAL': return <ShieldAlert size={20} />;
      case 'INSIGHT': return <Lightbulb size={20} />;
      case 'MONITOR': return <Activity size={20} />;
      case 'WORKFLOW': return <Layers size={20} />;
      default: return <Activity size={20} />;
    }
  };

  const getTypeStyle = () => {
    switch (type) {
      case 'CRITICAL': return 'bg-rose-50 text-rose-500 border-rose-100';
      case 'INSIGHT': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'MONITOR': return 'bg-slate-100 text-slate-500 border-slate-200';
      case 'WORKFLOW': return 'bg-slate-100 text-slate-500 border-slate-200';
      default: return 'bg-slate-100 text-slate-500 border-slate-200';
    }
  };

  const getIconContainerStyle = () => {
    switch (type) {
      case 'CRITICAL': return 'bg-rose-100 text-rose-600';
      case 'INSIGHT': return 'bg-orange-100 text-[#5C3300]';
      default: return 'bg-slate-100 text-slate-400';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      layout
      className={`p-10 rounded-[36px] bg-white border-2 transition-all duration-300 relative group overflow-hidden ${
        read ? 'border-transparent shadow-sm' : 'border-slate-50 shadow-[0_20px_50px_rgba(0,0,0,0.03)]'
      }`}
    >
        {/* Left Status Bar */}
        {!read && (
            <div className={`absolute left-0 top-0 bottom-0 w-2 ${
                type === 'CRITICAL' ? 'bg-rose-500' : type === 'INSIGHT' ? 'bg-[#5C3300]' : 'bg-slate-300'
            }`}></div>
        )}

      <div className="flex gap-8 items-start relative z-10">
        <div className={`p-4 rounded-2xl shrink-0 transition-transform group-hover:scale-110 ${getIconContainerStyle()}`}>
          {getIcon()}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-black text-[#1C3A3A] tracking-tighter truncate">{title}</h4>
            <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border shrink-0 ${getTypeStyle()}`}>
                {type}
            </span>
          </div>
          
          <p className="text-sm font-bold text-slate-500 leading-relaxed max-w-[500px] mb-8">
            {description}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-300">
                <Clock size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">{timestamp}</span>
            </div>
            
            <button className="text-[11px] font-black text-[#1C3A3A] hover:text-primary uppercase tracking-[0.2em] transition-all underline underline-offset-8 decoration-2 decoration-teal-500/20">
                {actionLabel}
            </button>
            
            {!read && (
                <button 
                  onClick={onMarkRead}
                  className="ml-auto flex items-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest hover:text-emerald-600 transition-colors"
                >
                    <Check size={14} />
                    Mark Read
                </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AlertCard;
