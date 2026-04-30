import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, Download, Plus, DollarSign, Activity } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import MetricsCard from '../components/dashboard/MetricsCard';
import KeywordTable from '../components/keywords/KeywordTable';
import InsightCard from '../components/keywords/InsightCard';
import SuggestedKeywords from '../components/keywords/SuggestedKeywords';
import CompetitorVolume from '../components/keywords/CompetitorVolume';
import { removeSuggestion, addKeyword } from '../store/slices/keywordSlice';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const KeywordOptimizationPage = () => {
    useSmoothScroll();
    const dispatch = useDispatch();
    const { keywords, suggestedKeywords, competitorVolume, loading } = useSelector(state => state.keywords);

    const handleAddKeyword = (kw) => {
        dispatch(addKeyword({
            id: `KW-${Math.floor(Math.random() * 90000) + 10000}`,
            name: kw.name,
            status: 'HIGH PERFORMANCE',
            clicks: 0,
            cost: 0,
            ctr: 0
        }));
        dispatch(removeSuggestion(kw.name));
    };

    const handleRemoveSuggestion = (name) => {
        dispatch(removeSuggestion(name));
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex font-sans relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
                <svg width="100%" height="100%" viewBox="0 0 800 800">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <Sidebar />

            <div className="flex-1 ml-20 relative z-10">
                <Navbar 
                    searchPlaceholder="Search keywords..." 
                />

                <main className="p-12 max-w-[1600px] mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 px-2">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-xl"
                        >
                            <h1 className="text-5xl font-black text-[#1C3A3A] tracking-tighter mb-4 leading-none decoration-teal-500/10 underline underline-offset-8">
                                Keyword Optimization
                            </h1>
                            <p className="text-slate-600 font-bold text-lg leading-relaxed">
                                Refine your ad reach with AI-driven performance metrics and editorial precision. 
                                Your current portfolio is performing <span className="text-emerald-500 font-black">14% above baseline.</span>
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 pt-2"
                        >
                            <button className="px-8 py-4 rounded-[22px] bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-[0.2em] shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3">
                                <Download size={18} />
                                Export Report
                            </button>
                            <button className="px-8 py-4 rounded-[22px] bg-[#1C3A3A] text-white text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-teal-900/30 hover:bg-[#0D2626] hover:-translate-y-0.5 transition-all flex items-center gap-3">
                                <Plus size={18} />
                                Manual Entry
                            </button>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Metrics and Table */}
                        <div className="lg:col-span-2 flex flex-col gap-12">
                            {/* Metrics Top Row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <MetricsCard 
                                    icon={DollarSign}
                                    label="Avg. CPC"
                                    value="$1.42"
                                    growth="-4.2% from last week"
                                    trend="up" // Using 'up' for emerald style, though CPC down is good
                                />
                                <MetricsCard 
                                    icon={TrendingUp}
                                    label="Conversion Rate"
                                    value="3.8%"
                                    growth="+0.5% growth"
                                    trend="up"
                                />
                                <MetricsCard 
                                    icon={Activity}
                                    label="Active Keywords"
                                    value="1,204"
                                    growth="Stable baseline"
                                    trend="steady"
                                />
                            </div>

                            <KeywordTable 
                                keywords={keywords} 
                                loading={loading} 
                            />
                        </div>

                        {/* Right Column: AI Insights & Suggestions */}
                        <div className="flex flex-col gap-0">
                            <InsightCard />
                            
                            <SuggestedKeywords 
                                suggestions={suggestedKeywords} 
                                onAdd={handleAddKeyword}
                                onRemove={handleRemoveSuggestion}
                            />

                            <CompetitorVolume 
                                competitors={competitorVolume} 
                            />
                        </div>
                    </div>
                </main>

                {/* Floating Action Button */}
                <motion.button 
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-10 right-10 w-16 h-16 bg-[#5C3300] text-white rounded-full flex items-center justify-center shadow-2xl shadow-orange-950/40 z-50 border-4 border-white/20"
                >
                    <Zap size={28} fill="currentColor" />
                </motion.button>
            </div>
        </div>
    );
};

export default KeywordOptimizationPage;
