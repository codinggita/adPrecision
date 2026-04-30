import React from 'react';
import { Camera } from 'lucide-react';

const ProfileSection = ({ values, handleChange, handleBlur, errors, touched }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="relative group">
        <div className="w-32 h-32 rounded-[36px] overflow-hidden border-4 border-white shadow-2xl shadow-slate-200 group-hover:scale-105 transition-all duration-500">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop" 
            alt="Profile Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <button className="absolute -bottom-2 -right-2 bg-white p-2.5 rounded-2xl shadow-xl border border-slate-100 text-[#1C3A3A] hover:bg-slate-50 transition-colors">
          <Camera size={18} />
        </button>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
            <input 
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-slate-100 border-2 rounded-[22px] px-6 py-4 text-sm font-bold text-[#1C3A3A] outline-none transition-all ${
                    errors.name && touched.name ? 'border-rose-300' : 'border-transparent focus:border-slate-200 focus:bg-white'
                }`}
            />
            {errors.name && touched.name && <span className="text-[9px] font-black text-rose-500 uppercase tracking-tighter ml-4">{errors.name}</span>}
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
            <input 
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`bg-slate-100 border-2 rounded-[22px] px-6 py-4 text-sm font-bold text-[#1C3A3A] outline-none transition-all ${
                    errors.email && touched.email ? 'border-rose-300' : 'border-transparent focus:border-slate-200 focus:bg-white'
                }`}
            />
            {errors.email && touched.email && <span className="text-[9px] font-black text-rose-500 uppercase tracking-tighter ml-4">{errors.email}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
