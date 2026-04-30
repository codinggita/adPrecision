import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Power, Save, CheckCircle2, TrendingUp, BarChart3, Activity } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import PrecisionCard from '../components/budget/PrecisionCard';
import AllocationSlider from '../components/budget/AllocationSlider';
import ComparisonCard from '../components/budget/ComparisonCard';
import MapSection from '../components/budget/MapSection';
import { updateAllocation } from '../store/slices/budgetSlice';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const BudgetOptimizationPage = () => {
    useSmoothScroll();
    const dispatch = useDispatch();
    const { allocations, totalBudget, allocated } = useSelector(state => state.budget);

    const handleAllocationChange = (id, newBudget) => {
        dispatch(updateAllocation({ id, budget: newBudget }));
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex font-sans relative overflow-hidden">
            <Sidebar />

            <div className="flex-1 ml-20 relative z-10">
                <Navbar searchPlaceholder="Search optimization goals..." />

                <main className="p-12 max-w-[1600px] mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 px-2">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-2xl"
                        >
                            <h1 className="text-5xl font-black text-[#1C3A3A] tracking-tighter mb-4 leading-none decoration-[#1C3A3A]/10 underline underline-offset-8">
                                Budget Optimization
                            </h1>
                            <p className="text-slate-600 font-bold text-lg leading-relaxed">
                                Redistribute your capital across performing channels to maximize efficiency and yield. 
                                <span className="text-emerald-500 font-black ml-2 px-2 py-1 bg-emerald-50 rounded-lg">8% uplift feasible.</span>
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 pt-2"
                        >
                            <button className="px-8 py-4 rounded-[22px] bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-[0.2em] shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3">
                                <Save size={18} />
                                Save Scenario
                            </button>
                            <button className="px-8 py-4 rounded-[22px] bg-[#5C3300] text-white text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-orange-950/30 hover:bg-[#4A2900] hover:-translate-y-0.5 transition-all flex items-center gap-3">
                                <Power size={18} />
                                Commit Changes
                            </button>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
                        {/* Left Column: Precision & Summary */}
                        <div className="lg:col-span-4 flex flex-col gap-10">
                            <PrecisionCard />
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-50 relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Total Budget</p>
                                        <h4 className="text-3xl font-black text-[#1C3A3A] tracking-tighter">${totalBudget.toLocaleString()}</h4>
                                    </div>
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-slate-50 rounded-bl-3xl group-hover:bg-slate-100 transition-colors"></div>
                                </div>
                                <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-50 relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Allocated</p>
                                        <h4 className="text-3xl font-black text-[#1C3A3A] tracking-tighter">{allocated}%</h4>
                                    </div>
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-slate-50 rounded-bl-3xl group-hover:bg-slate-100 transition-colors"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Active Allocations */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-[48px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-50 h-full">
                                <div className="flex justify-between items-center mb-12">
                                    <h3 className="text-2xl font-black text-[#1C3A3A] tracking-tighter">Active Allocations</h3>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                                        <span className="text-[9px] font-black text-emerald-700 uppercase tracking-widest">Live Sync Active</span>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    {allocations.map(alloc => (
                                        <AllocationSlider 
                                            key={alloc.id}
                                            {...alloc}
                                            onChange={handleAllocationChange}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Comparison and Map */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <ComparisonCard 
                            type="current"
                            roi="2.4x"
                            cpa="$3.2k"
                            progress={65}
                        />
                        <ComparisonCard 
                            type="projected"
                            roi="3.8x"
                            cpa="$2.1k"
                            progress={92}
                            highlighted={true}
                        />
                    </div>

                    <MapSection />
                </main>
            </div>
        </div>
    );
};

export default BudgetOptimizationPage;
