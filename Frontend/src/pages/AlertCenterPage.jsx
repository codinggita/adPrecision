import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCheck, Filter, ChevronRight, PlusCircle } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import AlertCard from '../components/alerts/AlertCard';
import PriorityCard from '../components/alerts/PriorityCard';
import ActivityList from '../components/alerts/ActivityList';
import { markAsRead, markAllAsRead, addAlert } from '../store/slices/alertSlice';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import toast from 'react-hot-toast';

const AlertCenterPage = () => {
    useSmoothScroll();
    const dispatch = useDispatch();
    const { alerts, activities, filter } = useSelector(state => state.alerts);

    // Mock Real-time simulation
    useEffect(() => {
        const interval = setInterval(() => {
            const shouldAddAlert = Math.random() > 0.8;
            if (shouldAddAlert) {
                const newAlert = {
                    id: Date.now(),
                    title: 'New Audience Signal',
                    description: 'Automated cluster detected a spike in "Retail Tech" interest groups.',
                    type: 'INSIGHT',
                    timestamp: 'Just now',
                    read: false,
                    actionLabel: 'Explore Audience'
                };
                dispatch(addAlert(newAlert));
                toast('New alert received', {
                    icon: '🔔',
                    style: {
                        borderRadius: '16px',
                        background: '#1C3A3A',
                        color: '#fff',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        fontSize: '9px',
                        letterSpacing: '0.15em'
                    },
                });
            }
        }, 30000); // Check every 30s

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex font-sans relative overflow-hidden">
            <Sidebar />

            <div className="flex-1 ml-20 relative z-10">
                <Navbar searchPlaceholder="Search campaign alerts..." />

                <main className="p-12 max-w-[1600px] mx-auto">
                    {/* Header with Breadcrumb */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 px-2">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <nav className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
                                <span>Account</span>
                                <ChevronRight size={12} />
                                <span className="text-[#1C3A3A]">Notifications</span>
                            </nav>
                            <h1 className="text-5xl font-black text-[#1C3A3A] tracking-tighter mb-4 leading-none decoration-[#1C3A3A]/10 underline underline-offset-8">
                                Alert Center
                            </h1>
                            <p className="text-slate-500 font-bold text-lg leading-relaxed max-w-xl">
                                Stay updated with real-time performance shifts and optimization opportunities across your active campaigns.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-12 pt-10"
                        >
                            <button 
                                onClick={() => {
                                    dispatch(markAllAsRead());
                                    toast.success('All alerts synchronized');
                                }}
                                className="flex items-center gap-3 text-[#1C3A3A] font-black text-[11px] uppercase tracking-[0.2em] hover:gap-5 transition-all"
                            >
                                <CheckCheck size={18} className="text-emerald-500" />
                                Mark all as read
                            </button>
                            
                            <button className="px-8 pr-12 py-4 rounded-[22px] bg-[#1C3A3A] text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-teal-900/40 hover:bg-[#0D2626] transition-all flex items-center gap-4 relative">
                                <Filter size={18} />
                                Filter Alerts
                                <div className="absolute right-4 w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center text-[10px] tabular-nums">
                                    {alerts.filter(a => !a.read).length}
                                </div>
                            </button>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Column */}
                        <div className="lg:col-span-4">
                            <PriorityCard count={12} />
                            <ActivityList activities={activities} />
                        </div>

                        {/* Right Column: Alerts List */}
                        <div className="lg:col-span-8 flex flex-col gap-6">
                            <AnimatePresence mode="popLayout" initial={false}>
                                {alerts.map(alert => (
                                    <AlertCard 
                                        key={alert.id}
                                        {...alert}
                                        onMarkRead={() => dispatch(markAsRead(alert.id))}
                                    />
                                ))}
                            </AnimatePresence>

                            {/* Load More Section */}
                            <motion.button 
                                whileHover={{ scale: 1.01 }}
                                className="mt-8 border-2 border-dashed border-slate-200 rounded-[36px] py-8 text-slate-400 text-xs font-black uppercase tracking-[0.2em] hover:border-slate-300 hover:text-slate-500 transition-all flex items-center justify-center gap-3 group"
                            >
                                <PlusCircle size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                                Load previous notifications
                            </motion.button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AlertCenterPage;
