import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { Trash2, Save, X, Settings } from 'lucide-react';
import toast from 'react-hot-toast';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import ProfileSection from '../components/settings/ProfileSection';
import PreferencesSection from '../components/settings/PreferencesSection';
import SettingsCard from '../components/settings/SettingsCard';
import { updateUser } from '../store/slices/authSlice';
import { toggleTheme } from '../store/slices/uiSlice';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const SettingsPage = () => {
    useSmoothScroll();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { theme } = useSelector(state => state.ui);
    
    // Local state for non-Formik settings like frequency
    const [frequency, setFrequency] = useState(localStorage.getItem('insightFrequency') || 'Daily');

    const formik = useFormik({
        initialValues: {
            name: user.name || '',
            email: user.email || '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Legal name is required'),
            email: Yup.string().email('Invalid email address').required('Email Address is required'),
        }),
        onSubmit: (values) => {
            dispatch(updateUser(values));
            localStorage.setItem('insightFrequency', frequency);
            toast.success('Settings synchronized successfully', {
                style: {
                    borderRadius: '20px',
                    background: '#1C3A3A',
                    color: '#fff',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    fontSize: '10px',
                    letterSpacing: '0.1em'
                },
            });
        },
    });

    const handleDiscard = () => {
        formik.resetForm();
        setFrequency(localStorage.getItem('insightFrequency') || 'Daily');
        toast.error('Changes discarded');
    };

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0D2626] text-white' : 'bg-[#F9FAFB] text-slate-800'} flex font-sans relative overflow-hidden transition-colors duration-500`}>
            <Sidebar />

            <div className="flex-1 ml-20 relative z-10">
                <Navbar searchPlaceholder="Search settings..." />

                <main className="p-12 max-w-[1200px] mx-auto">
                    {/* Header */}
                    <div className="mb-16 px-2">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="text-5xl font-black text-[#1C3A3A] tracking-tighter mb-4 leading-none decoration-[#1C3A3A]/10 underline underline-offset-8">
                                Account Settings
                            </h1>
                            <p className="text-slate-500 font-bold text-lg leading-relaxed max-w-2xl">
                                Refine your editorial experience. Manage your personal identity and system-wide optimization preferences.
                            </p>
                        </motion.div>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="bg-white rounded-[48px] p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-slate-50 relative overflow-hidden">
                            {/* Decorative Grid */}
                            <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none select-none">
                                <svg width="100%" height="100%" viewBox="0 0 100 100">
                                    <pattern id="grid-settings" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="1"/>
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#grid-settings)" />
                                </svg>
                            </div>

                            <ProfileSection 
                                values={formik.values}
                                handleChange={formik.handleChange}
                                handleBlur={formik.handleBlur}
                                errors={formik.errors}
                                touched={formik.touched}
                            />

                            <PreferencesSection 
                                theme={theme}
                                onThemeToggle={() => dispatch(toggleTheme())}
                                frequency={frequency}
                                onFrequencyChange={setFrequency}
                            />

                            <SettingsCard />

                            {/* Bottom Actions */}
                            <div className="pt-10 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-8">
                                <button className="flex items-center gap-3 text-rose-500 font-black text-[11px] uppercase tracking-[0.2em] hover:text-rose-600 transition-all group">
                                    <Trash2 size={16} className="group-hover:animate-bounce" />
                                    Deactivate Account
                                </button>

                                <div className="flex items-center gap-6">
                                    <button 
                                        type="button"
                                        onClick={handleDiscard}
                                        className="px-8 py-4 rounded-[22px] border border-slate-200 text-slate-500 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center gap-3"
                                    >
                                        <X size={16} />
                                        Discard
                                    </button>
                                    <button 
                                        type="submit"
                                        className="px-10 py-5 rounded-[22px] bg-[#5C3300] hover:bg-[#4A2900] text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-orange-950/30 hover:-translate-y-1 transition-all flex items-center gap-3"
                                    >
                                        <Save size={16} />
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <footer className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 px-4">
                        <div className="flex items-center gap-8">
                            <a href="#" className="text-[10px] font-black text-slate-300 uppercase tracking-widest hover:text-slate-500 transition-colors">Privacy Policy</a>
                            <div className="w-1.5 h-1.5 bg-slate-100 rounded-full"></div>
                            <a href="#" className="text-[10px] font-black text-slate-300 uppercase tracking-widest hover:text-slate-500 transition-colors">Terms of Service</a>
                        </div>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.25em]">Version 2.4.0-alpha</p>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default SettingsPage;
