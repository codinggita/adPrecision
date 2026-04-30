import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import InputField from '../components/InputField';
import SocialButton from '../components/SocialButton';
import { HelpCircle, Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  const { login, loading } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('EMAIL IS REQUIRED'),
      password: Yup.string().min(6, 'Must be 6 chars or more').required('PASSWORD IS REQUIRED'),
    }),
    onSubmit: async (values) => {
      await login(values);
    },
  });

  return (
    <div className="min-h-screen w-full bg-[#F3F4F6] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-orange-200">
      <Helmet>
        <title>Login | AdPrecision</title>
        <meta name="description" content="Sign in to your AdPrecision account to manage your high-performance ad campaigns." />
      </Helmet>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(135deg, #1C3A3A 0%, transparent 40%)' }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[480px] bg-white rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-12 relative z-10 border border-white"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-[#1C3A3A] rounded-[22px] flex items-center justify-center shadow-2xl shadow-teal-950/20 mb-6 group transition-all duration-500 hover:rotate-[15deg]">
            <div className="w-8 h-8 bg-white rounded-md rotate-45 flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="w-4 h-4 bg-[#1C3A3A] rounded-full translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </div>
          </div>
          <h1 className="text-3xl font-black text-[#1C3A3A] tracking-tighter mb-2">Sign In</h1>
          <p className="text-[#6B7280] font-bold text-sm tracking-tight text-center">
            Continue to <span className="text-[#1C3A3A]">AdPrecision</span> Dashboard
          </p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
          <div className="space-y-4">
            <InputField
              label="EMAIL ADDRESS"
              icon="mail"
              placeholder="user@example.com"
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />
            
            <InputField
              label="PASSWORD"
              icon="lock"
              placeholder="••••••••"
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest px-1 mb-2">
            <label className="flex items-center gap-2 cursor-pointer group text-slate-400 hover:text-[#1C3A3A] transition-colors">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-200 text-[#1C3A3A] focus:ring-[#1C3A3A]" />
              Remember Me
            </label>
            <Link to="#" className="text-slate-400 hover:text-slate-900 transition-colors">Forgot Password?</Link>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#1C3A3A] text-white rounded-[22px] py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:bg-[#0D2626] hover:shadow-2xl hover:shadow-teal-900/30 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 mt-4"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Authenticating...
              </>
            ) : (
              'Sign In Account'
            )}
          </button>
        </form>

        <div className="my-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-slate-100"></div>
          <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">or continue with</span>
          <div className="flex-1 h-px bg-slate-100"></div>
        </div>

        <div className="flex gap-4">
          <SocialButton provider="google" />
          <SocialButton provider="apple" />
        </div>

        <p className="mt-10 text-center text-[11px] font-bold text-slate-400">
          Don't have an account? <Link to="/signup" className="text-[#1C3A3A] font-black hover:underline underline-offset-4 decoration-2">Create one free</Link>
        </p>
      </motion.div>

      {/* Floating Status Dots */}
      <div className="mt-12 flex gap-1.5 opacity-30">
        <div className="w-2 h-2 bg-[#1C3A3A] rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-[#1C3A3A] rounded-full animate-pulse delay-75"></div>
        <div className="w-2 h-2 bg-[#1C3A3A] rounded-full animate-pulse delay-150"></div>
      </div>

      <button className="fixed bottom-10 right-10 w-14 h-14 bg-white text-[#1C3A3A] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <HelpCircle size={24} className="relative z-10" />
      </button>
    </div>
  );
};

export default LoginPage;
