import React from 'react';
import { Search, Bell, Settings as SettingsIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ searchPlaceholder = "Search campaign data...", rightAction }) => {
  return (
    <header className="h-20 bg-[#F9FAFB]/80 backdrop-blur-md sticky top-0 z-40 px-10 flex items-center justify-between border-b border-black/[0.02]">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder={searchPlaceholder}
          className="w-full bg-white border border-slate-200/60 rounded-2xl py-3 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:border-slate-300 focus:shadow-sm transition-all"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Searching...</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-slate-200 pr-6">
            <Link to="/notifications" className="p-2 text-slate-400 hover:text-primary transition-all relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </Link>
            <button className="p-2 text-slate-400 hover:text-primary transition-all">
                <SettingsIcon size={20} />
            </button>
        </div>

        <div className="flex items-center gap-4 pl-2">
            <div className="flex flex-col items-end">
                <span className="text-sm font-black text-[#1C3A3A] tracking-tight leading-none">Alex Rivera</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Pro Account</span>
            </div>
            <div className="w-12 h-12 bg-slate-200 rounded-2xl overflow-hidden border-2 border-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
                <img src="https://ui-avatars.com/api/?name=Alex+Rivera&background=1C3A3A&color=fff" alt="Profile" className="w-full h-full object-cover" />
            </div>
        </div>

        {rightAction && (
          <button 
            onClick={rightAction.onClick}
            className="bg-[#1C3A3A] hover:bg-[#0D2626] text-white px-6 py-3 rounded-2xl text-xs font-black transition-all shadow-xl shadow-teal-950/10 active:scale-95 ml-2 uppercase tracking-[0.15em]"
          >
            {rightAction.label}
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
