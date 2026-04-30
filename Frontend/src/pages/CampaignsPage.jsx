import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import CampaignNavbar from '../components/dashboard/CampaignNavbar';
import MetricsCard from '../components/dashboard/MetricsCard';
import CampaignTable from '../components/dashboard/CampaignTable';
import { Users, BarChart2, Banknote, Sparkles, Calendar, Plus, ChevronRight } from 'lucide-react';

const CampaignsPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex font-sans selection:bg-teal-100">
      <Sidebar />
      <div className="flex-1 ml-20">
        <CampaignNavbar />
        
        <main className="p-10 max-w-[1600px] mx-auto relative min-h-[calc(100vh-64px)]">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-12">
            <div className="animate-fade-in">
              <h2 className="text-[32px] font-black text-slate-800 tracking-tight leading-none mb-3">Campaign Management</h2>
              <p className="text-slate-400 font-bold text-[13px] tracking-tight">
                Overview of your active media deployments. We've detected a <span className="text-[#1C3A3A] underline decoration-teal-200 decoration-2 underline-offset-2">12% efficiency gap</span> in your 'Q4 Apparel' set.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-white border border-slate-200 px-5 py-2.5 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-all group">
                <Calendar size={16} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest leading-none">Last 30 Days</span>
              </button>
              <button className="bg-[#5C3300] hover:bg-[#4A2900] text-white px-5 py-2.5 rounded-xl flex items-center gap-2.5 shadow-xl shadow-orange-950/20 transition-all active:scale-95 group">
                <Plus size={18} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-300" />
                <span className="text-[11px] font-black uppercase tracking-widest leading-none">Create Campaign</span>
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <MetricsCard 
              icon={Users} 
              label="Total Reach" 
              value="1.4M" 
              growth="+8.2%" 
              trend="up" 
            />
            <MetricsCard 
              icon={BarChart2} 
              label="Avg. ROAS" 
              value="4.2x" 
              growth="+1.4%" 
              trend="up" 
            />
            <MetricsCard 
              icon={Banknote} 
              label="Active Spend" 
              value="$42,850" 
              growth="Stable" 
            />
            {/* Specialized AI Score Card */}
            <div className="bg-[#1C3A3A] p-7 rounded-[32px] shadow-2xl shadow-teal-950/30 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
               <div className="flex justify-between items-start mb-10 relative z-10">
                 <h4 className="text-teal-400/60 text-[10px] font-black uppercase tracking-[0.3em]">AI Score</h4>
                 <Sparkles className="text-teal-400/50" size={20} />
               </div>
               <div className="flex items-end justify-between relative z-10">
                  <div className="text-[44px] font-black text-white leading-none tracking-tighter">92/100</div>
                  <div className="bg-teal-400/20 p-2 rounded-xl text-teal-400">
                    <ChevronRight size={18} />
                  </div>
               </div>
            </div>
          </div>

          {/* Campaign Table Section */}
          <div className="mb-20">
            <CampaignTable />
          </div>

          {/* Floating Action Button */}
          <button className="fixed bottom-10 left-10 w-14 h-14 bg-[#5C3300] text-white rounded-full flex items-center justify-center shadow-2xl shadow-orange-950/40 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all z-50 group border-4 border-white/80 backdrop-blur-sm">
            <Plus size={28} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </main>
      </div>
    </div>
  );
};

export default CampaignsPage;
