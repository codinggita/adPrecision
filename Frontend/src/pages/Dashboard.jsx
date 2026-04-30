import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import MetricsCard from '../components/dashboard/MetricsCard';
import ChartSection from '../components/dashboard/ChartSection';
import AlertsPanel from '../components/dashboard/AlertsPanel';
import CampaignTable from '../components/dashboard/CampaignTable';
import { DollarSign, Zap, Target, BarChart, Calendar } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F0F2F5] flex font-sans relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%]-left-[-10%] w-[40%] h-[40%] bg-teal-200/20 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-orange-100/30 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] bg-blue-100/20 blur-[80px] rounded-full pointer-events-none"></div>

      <Sidebar />
      <div className="flex-1 ml-20 relative z-10">
        <Navbar />

        <main className="p-10">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-12">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-black text-[#1F2937] tracking-tighter mb-2">Performance Intelligence</h2>
              <p className="text-[#6B7280] font-bold text-sm leading-relaxed max-w-lg">
                Real-time optimization metrics across global channels. Every insight is curated for editorial precision.
              </p>
            </div>
            <button className="bg-white border border-slate-200 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-sm hover:shadow-md transition-all group">
              <Calendar size={18} className="text-slate-400 group-hover:text-[#1C3A3A] transition-colors" />
              <span className="text-xs font-black text-slate-700 uppercase tracking-widest leading-none">Last 30 Days</span>
            </button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 animate-slide-up">
            <MetricsCard
              icon={DollarSign}
              label="Total Spend"
              value="$124,000"
              growth="+12.5%"
              trend="up"
            />
            <MetricsCard
              icon={Zap}
              label="ROI Efficiency"
              value="4.2x"
              growth="+0.4x"
              trend="up"
            />
            <MetricsCard
              icon={Target}
              label="Active Campaigns"
              value="12"
              growth="Steady"
            />
            <MetricsCard
              icon={BarChart}
              label="Conversions"
              value="1,420"
              growth="+8%"
              trend="up"
            />
          </div>

          {/* Main Visualization Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ChartSection />
            </div>
            <div className="lg:col-span-1">
              <AlertsPanel />
            </div>
          </div>

          {/* Campaign Table Section */}
          <div className="animate-fade-in">
            <CampaignTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
