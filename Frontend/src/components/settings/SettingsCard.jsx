import React from 'react';
import { Shield, CreditCard, Cpu } from 'lucide-react';

const SettingsCard = () => {
  const options = [
    { icon: Shield, label: 'Security', color: 'bg-blue-50 text-blue-500' },
    { icon: CreditCard, label: 'Billing', color: 'bg-indigo-50 text-indigo-500' },
    { icon: Cpu, label: 'API Access', color: 'bg-teal-50 text-teal-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-in fade-in slide-in-from-top-4 duration-1000 delay-500">
      {options.map((option, index) => (
        <button 
            key={index}
            className="flex items-center gap-6 p-8 rounded-[36px] border border-slate-50 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className={`p-4 rounded-2xl ${option.color} group-hover:scale-110 transition-transform`}>
            <option.icon size={20} />
          </div>
          <span className="text-sm font-black text-[#1C3A3A] uppercase tracking-widest">{option.label}</span>
        </button>
      ))}
    </div>
  );
};

export default SettingsCard;
