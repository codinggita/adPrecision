import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Calendar, Zap, Download } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import InsightCards from '../components/analytics/InsightCards';
import CTRChart from '../components/analytics/CTRChart';
import ROIDonut from '../components/analytics/ROIDonut';
import CPCDistribution from '../components/analytics/CPCDistribution';
import { setActiveTab } from '../store/slices/analyticsSlice';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const DeepAnalyticsPage = () => {
    useSmoothScroll();
    const analytics = useSelector(state => state.analytics);
    const dispatch = useDispatch();

    if (!analytics) {
        return <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center font-sans">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1C3A3A]"></div>
        </div>;
    }

    const { ctrTrends, roiBreakdown, cpcDistribution, activeTab, loading } = analytics;

    const handleTabChange = (tab) => {
        dispatch(setActiveTab(tab));
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex font-sans relative overflow-hidden">
            <Sidebar />

            <div className="flex-1 ml-20 relative z-10 text-slate-800">
                <Navbar searchPlaceholder="Search analytics..." />

                <main className="p-12 max-w-[1600px] mx-auto pb-32">
                    {/* Header Controls Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 px-2">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-xl"
                        >
                            <h1 className="text-5xl font-black text-[#1C3A3A] tracking-tighter mb-4 leading-none decoration-[#1C3A3A]/10 underline underline-offset-8">
                                Deep Analytics
                            </h1>
                            <p className="text-slate-500 font-bold text-lg leading-relaxed">
                                Performance breakdown across global campaigns with real-time heuristic layering.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-wrap items-center gap-6 pt-2"
                        >
                            {/* Toggle Tabs */}
                            <div className="bg-slate-100 p-1.5 rounded-[22px] flex items-center shadow-inner border border-slate-200">
                                {['Campaign Groups', 'Individual Accounts'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => handleTabChange(tab)}
                                        className={`px-8 py-3 rounded-[18px] text-[11px] font-black uppercase tracking-widest transition-all ${
                                            activeTab === tab 
                                            ? 'bg-white text-[#1C3A3A] shadow-md shadow-slate-200' 
                                            : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Date Filter */}
                            <button className="px-6 py-4 rounded-[22px] bg-white border border-slate-200 text-slate-600 text-[11px] font-black uppercase tracking-[0.15em] shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                                <Calendar size={18} className="text-slate-400" />
                                Oct 01 — Oct 31, 2023
                            </button>

                            {/* Export Button */}
                            <button className="px-10 py-4 rounded-[22px] bg-[#1C3A3A] text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-teal-900/30 hover:bg-[#0D2626] hover:-translate-y-0.5 transition-all flex items-center gap-4 group">
                                <Download size={18} />
                                Export Report
                            </button>
                        </motion.div>
                    </div>

                    {/* Insight Cards */}
                    <InsightCards />

                    {/* Charts Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
                        <div className="lg:col-span-8">
                            <CTRChart data={ctrTrends} />
                        </div>
                        <div className="lg:col-span-4">
                            <ROIDonut data={roiBreakdown} />
                        </div>
                    </div>

                    {/* CPC Distribution Table */}
                    <CPCDistribution data={cpcDistribution} />

                    {/* Bottom CTA Banner */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-16 bg-gradient-to-br from-[#1C3A3A] to-[#0D2626] rounded-[48px] p-16 flex flex-col lg:flex-row justify-between items-center relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(28,58,58,0.4)] border border-white/5"
                    >
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none">
                            <svg width="100%" height="100%" viewBox="0 0 800 800">
                                <defs>
                                    <pattern id="grid-dark" width="60" height="60" patternUnits="userSpaceOnUse">
                                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid-dark)" />
                            </svg>
                        </div>

                        <div className="relative z-10 lg:max-w-2xl text-center lg:text-left mb-10 lg:mb-0">
                            <h2 className="text-5xl font-black text-white tracking-tighter mb-6 leading-none">Optimize your current spend?</h2>
                            <p className="text-emerald-500/80 font-bold text-xl leading-relaxed">
                                Our engine identifies <span className="text-white font-black italic">$4,200/mo</span> in potential savings with a predicted <span className="text-white font-black">+8% CTR lift.</span> Apply optimizations now.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                            <button className="w-full sm:w-auto px-12 py-6 rounded-[28px] bg-[#5C3300] hover:bg-[#4A2900] text-white text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105 active:scale-95">
                                Launch Optimization
                            </button>
                            <button className="w-full sm:w-auto px-12 py-6 rounded-[28px] bg-white/5 hover:bg-white/10 text-white border border-white/20 text-sm font-black uppercase tracking-[0.2em] backdrop-blur-md transition-all">
                                Analyze Further
                            </button>
                        </div>
                    </motion.div>
                </main>

                {/* Floating Action Button */}
                <motion.button 
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-12 right-12 w-20 h-20 bg-accent-orange text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(217,119,6,0.4)] z-50 border-4 border-white group"
                >
                    <Zap size={32} fill="currentColor" className="group-hover:animate-pulse" />
                </motion.button>
            </div>
        </div>
    );
};

export default DeepAnalyticsPage;
