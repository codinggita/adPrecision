import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import EmptyState from '../components/dashboard/EmptyState';
import ErrorState from '../components/dashboard/ErrorState';
import MaintenanceBanner from '../components/dashboard/MaintenanceBanner';
import { setCampaigns, setLoading, setError } from '../store/slices/campaignSlice';
import toast from 'react-hot-toast';

const DashboardStatePage = () => {
  const dispatch = useDispatch();
  const { campaigns, loading, error } = useSelector(state => state.campaigns);
  const [viewMode, setViewMode] = useState('demo'); // 'demo' | 'live'

  // Simulation Logic
  const handleSimulateError = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
        dispatch(setError("Critical connection shift detected."));
        toast.error("Telemetry link severed.", {
            style: { borderRadius: '20px', background: '#991B1B', color: '#fff', fontSize: '12px', fontWeight: '900' }
        });
    }, 1500);
  };

  const handleSimulateSuccess = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
        dispatch(setCampaigns([])); // Empty state
    }, 1000);
  };

  const handleCreateCampaign = () => {
      toast.success("Initializing Campaign Forge...", {
          icon: '🚀',
          style: { borderRadius: '25px', background: '#1C3A3A', color: '#fff', fontWeight: '900', fontSize: '11px' }
      });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex font-sans">
      <Sidebar />

      <div className="flex-1 ml-20 relative">
        <Navbar searchPlaceholder="Search campaigns or reports..." />

        {/* State Toggles (Demo Purpose Only) */}
        <div className="absolute top-24 right-12 z-50 flex gap-4 bg-white/50 backdrop-blur-3xl p-2 rounded-2xl border border-slate-200">
            <button 
                onClick={handleSimulateSuccess}
                className="px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all"
            >
                Test Empty
            </button>
            <button 
                onClick={handleSimulateError}
                className="px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-rose-50 text-rose-500 transition-all"
            >
                Test Error
            </button>
        </div>

        <main className="p-12 max-w-[1400px] mx-auto pb-40">
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div 
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-40"
                    >
                        <div className="w-20 h-20 border-8 border-slate-100 border-t-[#1C3A3A] rounded-full animate-spin"></div>
                        <p className="mt-8 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] animate-pulse">Syncing Precision Data...</p>
                    </motion.div>
                ) : error ? (
                    <motion.div 
                        key="error"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <ErrorState />
                    </motion.div>
                ) : campaigns.length === 0 ? (
                    <motion.div 
                        key="empty"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <EmptyState onCreateFirst={handleCreateCampaign} />
                    </motion.div>
                ) : (
                    <motion.div key="data">
                        {/* Dashboard content would go here */}
                        <div className="text-center py-40">
                             <h1 className="text-4xl font-black text-[#1C3A3A]">Campaigns Loaded</h1>
                             <button 
                                onClick={() => dispatch(setCampaigns([]))}
                                className="mt-8 text-primary font-black uppercase tracking-widest text-xs"
                             >
                                 Reset to Empty State
                             </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <MaintenanceBanner />
        </main>
      </div>
    </div>
  );
};

export default DashboardStatePage;
