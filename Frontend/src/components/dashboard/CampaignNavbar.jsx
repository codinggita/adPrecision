import React from 'react';
import { Search, Bell, Settings, Plus } from 'lucide-react';

const CampaignNavbar = () => {
  return (
    <header className="h-16 bg-[#F9FAFB]/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between border-b border-black/[0.02]">
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input
          type="text"
          placeholder="Search campaigns, audiences, or metrics..."
          className="w-full bg-[#F3F4F6] border-none rounded-xl py-2.5 pl-11 pr-4 text-[13px] font-medium text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-teal-500/10 transition-all"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 pr-4 border-r border-slate-200">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-all relative">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#F9FAFB]"></span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-all">
            <Settings size={18} />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-[13px] font-black text-slate-800 leading-tight">Alex Mercer</div>
            <div className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">Pro Account</div>
          </div>
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-slate-200">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>

        <button className="bg-[#5C3300] hover:bg-[#4A2900] text-white px-4 py-2.5 rounded-xl text-[13px] font-black transition-all flex items-center gap-2 shadow-lg shadow-orange-950/10">
          <Plus size={16} strokeWidth={3} />
          Create Campaign
        </button>
      </div>
    </header>
  );
};

export default CampaignNavbar;
