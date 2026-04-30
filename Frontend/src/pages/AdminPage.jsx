import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Zap, Activity as ActivityIcon } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import InfrastructureCard from '../components/admin/InfrastructureCard';
import ServiceControls from '../components/admin/ServiceControls';
import UserTable from '../components/admin/UserTable';
import ThreatCard from '../components/admin/ThreatCard';
import { updateMetrics, toggleService } from '../store/slices/adminSlice';
import { toggleMFA } from '../store/slices/userAccessSlice';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import toast from 'react-hot-toast';

const AdminPage = () => {
    useSmoothScroll();
    const dispatch = useDispatch();
    const { metrics, services } = useSelector(state => state.admin);
    const { users } = useSelector(state => state.userAccess);

    // Simulate real-time metric fluctuations
    useEffect(() => {
        const interval = setInterval(() => {
            const fluctuate = (val, max, variance) => {
                const shift = (Math.random() * variance * 2) - variance;
                return Math.max(0, Math.min(max, Number((val + shift).toFixed(1))));
            };

            dispatch(updateMetrics({
                cpu: fluctuate(metrics.cpu, 100, 5),
                memory: fluctuate(metrics.memory, 32, 0.5),
                latency: fluctuate(metrics.latency, 200, 15),
                network: fluctuate(metrics.network, 10, 0.2),
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, [dispatch, metrics]);

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex font-sans relative overflow-hidden">
            <Sidebar />

            <div className="flex-1 ml-20 relative z-10">
                <Navbar searchPlaceholder="Search system nodes, users, or logs..." />

                <main className="p-12 max-w-[1600px] mx-auto pb-32">
                    {/* Header Controls */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16 px-2">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="text-5xl font-black text-[#1C3A3A] tracking-tighter mb-4 leading-none">
                                Admin Control Center
                            </h1>
                            <p className="text-slate-500 font-bold text-lg leading-relaxed">
                                Orchestrate your optimization engine infrastructure and access controls.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-6"
                        >
                            <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-[20px] shadow-sm border border-slate-100 hidden md:flex">
                                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
                                <span className="text-[10px] font-black text-[#1C3A3A] uppercase tracking-widest">Global Status: Optimal</span>
                            </div>
                            <button className="px-10 py-5 rounded-[22px] bg-[#1C3A3A] text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-teal-950/20 hover:bg-[#0D2626] hover:-translate-y-1 transition-all flex items-center gap-3 active:scale-95">
                                <ActivityIcon size={16} />
                                Launch Sequence
                            </button>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                        {/* Left Column: Infrastructure */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:col-span-8 flex flex-col gap-8"
                        >
                            <InfrastructureCard metrics={metrics} />
                            
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                <div className="lg:col-span-7">
                                     <UserTable 
                                        users={users} 
                                        onToggleMFA={(id) => dispatch(toggleMFA(id))} 
                                     />
                                </div>
                                <div className="lg:col-span-5">
                                     <ThreatCard />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Service Controls */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="lg:col-span-4"
                        >
                            <ServiceControls 
                                services={services} 
                                onToggle={(key) => dispatch(toggleService(key))} 
                            />
                        </motion.div>
                    </div>
                </main>

                {/* Floating Action Button */}
                <button 
                  onClick={() => toast('Executing manual override...', { icon: '⚡' })}
                  className="fixed bottom-12 right-12 w-16 h-16 bg-[#5C3300] rounded-full flex items-center justify-center text-white shadow-[0_15px_30px_rgba(92,51,0,0.3)] hover:scale-110 hover:-rotate-12 transition-all duration-300 z-50">
                    <Zap size={24} className="fill-orange-400" />
                </button>
            </div>
        </div>
    );
};

export default AdminPage;
