import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Webhook, Link as LinkIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const ServiceControls = ({ services, onToggle }) => {
  
  const handleToggle = (key, label) => {
      onToggle(key);
      const isEnabled = !services[key];
      if (isEnabled) {
          toast.success(`${label} Activated`, {
              style: { borderRadius: '20px', background: '#10B981', color: '#fff', fontSize: '12px', fontWeight: '900' }
          });
      } else {
          toast(`${label} Deactivated`, {
              icon: '⏸️',
              style: { borderRadius: '20px', background: '#1C3A3A', color: '#fff', fontSize: '12px', fontWeight: '900' }
          });
      }
  };

  return (
    <div className="bg-[#1C3A3A] rounded-[40px] p-10 shadow-[0_40px_80px_-20px_rgba(28,58,58,0.4)] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <h3 className="text-xl font-black text-white tracking-tighter mb-8">Service Visibility Controls</h3>

      <div className="flex flex-col gap-6 relative z-10">
          {/* Public API */}
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-[28px] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${services.publicApi ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-400'}`}>
                      <LinkIcon size={20} />
                  </div>
                  <div>
                      <p className="text-sm font-black text-white">Public API Endpoint</p>
                      <p className="text-[10px] font-bold text-white/50 tracking-widest uppercase mt-1">External Data Access</p>
                  </div>
              </div>
              <button 
                onClick={() => handleToggle('publicApi', 'Public API Endpoint')}
                className={`w-14 h-8 rounded-full relative transition-colors duration-300 ${services.publicApi ? 'bg-emerald-500' : 'bg-white/20'}`}
              >
                  <motion.div 
                     className="w-6 h-6 bg-white rounded-full absolute top-1 shadow-sm"
                     animate={{ x: services.publicApi ? 28 : 4 }}
                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
              </button>
          </div>

          {/* Webhook Listener */}
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-[28px] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${services.webhookListener ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-400'}`}>
                      <Webhook size={20} />
                  </div>
                  <div>
                      <p className="text-sm font-black text-white">Webhook Listener</p>
                      <p className="text-[10px] font-bold text-white/50 tracking-widest uppercase mt-1">Real-time event sync</p>
                  </div>
              </div>
              <button 
                onClick={() => handleToggle('webhookListener', 'Webhook Listener')}
                className={`w-14 h-8 rounded-full relative transition-colors duration-300 ${services.webhookListener ? 'bg-emerald-500' : 'bg-white/20'}`}
              >
                  <motion.div 
                     className="w-6 h-6 bg-white rounded-full absolute top-1 shadow-sm"
                     animate={{ x: services.webhookListener ? 28 : 4 }}
                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
              </button>
          </div>

          {/* Legacy Auth */}
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-[28px] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${services.legacyAuth ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-400'}`}>
                      <Shield size={20} />
                  </div>
                  <div>
                      <p className="text-sm font-black text-white">Legacy Auth Bridge</p>
                      <p className="text-[10px] font-bold text-white/50 tracking-widest uppercase mt-1">v1.0 OAuth Support</p>
                  </div>
              </div>
              <button 
                onClick={() => handleToggle('legacyAuth', 'Legacy Auth Bridge')}
                className={`w-14 h-8 rounded-full relative transition-colors duration-300 ${services.legacyAuth ? 'bg-emerald-500' : 'bg-white/20'}`}
              >
                  <motion.div 
                     className="w-6 h-6 bg-white rounded-full absolute top-1 shadow-sm"
                     animate={{ x: services.legacyAuth ? 28 : 4 }}
                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
              </button>
          </div>
      </div>
    </div>
  );
};

export default ServiceControls;
