import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import SocialButton from '../components/SocialButton';
import { HelpCircle, User } from 'lucide-react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup and redirect
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-[#F3F4F6] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-orange-200">
      {/* Background Decoration */}
      <div className="absolute top-[-50px] left-[-150px] opacity-[0.03] pointer-events-none rotate-[-12deg]">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1="-100" y1={i * 50} x2="900" y2={i * 50 + 600} stroke="black" strokeWidth="1" />
          ))}
        </svg>
      </div>

      {/* Top Branding */}
      <Link to="/" className="mb-12 text-center flex flex-col items-center animate-fade-in group">
        <div className="bg-[#1C3A3A] w-14 h-14 rounded-[18px] flex items-center justify-center mb-6 shadow-2xl shadow-teal-950/30 group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
            <path d="M12 1L14.5 9.5H23L16.25 14.5L18.75 23L12 18L5.25 23L7.75 14.5L1 9.5H9.5L12 1Z" />
          </svg>
        </div>
        <h1 className="text-[40px] font-black text-[#0D2626] tracking-tighter mb-2 leading-none group-hover:text-primary transition-colors">AdPrecision</h1>
        <p className="text-[#9CA3AF] font-bold text-[10px] tracking-[0.3em] uppercase">The Optimization Engine</p>
      </Link>

      {/* Signup Card */}
      <div className="w-full max-w-[500px] bg-white rounded-[48px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] p-12 md:p-16 relative z-10 transition-all border border-black/5 animate-slide-up">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-[28px] font-black text-[#1F2937] tracking-tight">Create Account</h2>
          <div className="w-14 h-2 bg-[#F3F4F6] rounded-full"></div>
        </div>

        <form className="flex flex-col gap-8" onSubmit={handleSignup}>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase ml-1">Full Name</label>
            <div className="relative group">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#5C3300] transition-colors" />
              <input 
                type="text" 
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#F3F4F6] border-2 border-transparent focus:border-slate-200 focus:bg-white transition-all py-4 pl-12 pr-4 rounded-2xl outline-none font-bold text-slate-700" 
              />
            </div>
          </div>

          <InputField
            label="EMAIL ADDRESS"
            icon="mail"
            type="email"
            placeholder="user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="PASSWORD"
            icon="lock"
            type="password"
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full mt-6 bg-gradient-to-br from-[#5C3300] via-[#4A2900] to-[#2D1900] hover:scale-[1.01] text-white font-black py-4 rounded-full transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(92,51,0,0.3)] active:scale-[0.98] text-lg">
            Get Started
            <span className="text-2xl font-light">→</span>
          </button>
        </form>

        <div className="relative my-12 flex items-center">
          <div className="flex-grow border-t border-[#F3F4F6]"></div>
          <span className="flex-shrink mx-6 text-[10px] font-black text-[#D1D5DB] tracking-[0.3em] uppercase">Or Join With</span>
          <div className="flex-grow border-t border-[#F3F4F6]"></div>
        </div>

        <div className="flex gap-5">
          <SocialButton
            label="Google"
            icon={
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            }
          />
          <SocialButton
            label="Apple"
            icon={
              <svg viewBox="0 0 384 512" className="w-5 h-5 fill-black/80">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-43.8-22.1-75.3-21-42.3 1.5-81.1 26.1-102.8 63.9-46 80-11.7 191.6 32.5 255.4 21.6 31.2 47.3 65.9 81.3 64.7 32.5-1.2 45.3-21.3 84.6-21.3 39.4 0 51.3 21.3 85 20.6 34.6-.6 56.4-31.2 78.1-62.7 24.7-36.1 34.9-71.1 35.3-72.9-.8-.4-68.1-26.1-68.4-104.1zM249.1 82.5c16.3-20 27.2-47.8 24.2-75.5-23.3 1-51.5 15.6-68.2 35.2-15 17.5-28.2 45.7-24.7 72.3 26 2.1 52.5-12 68.7-32z" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Bottom Link */}
      <div className="mt-12 mb-24 text-center animate-fade-in delay-300">
        <p className="text-[#6B7280] font-bold text-sm tracking-tight">
          Already have an account?{' '}
          <Link to="/login" className="text-[#111827] font-black underline decoration-[3px] underline-offset-[6px] decoration-black/10 hover:decoration-black transition-all">
            Sign In
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="fixed bottom-8 w-full flex items-center justify-center gap-12 text-[10px] font-black text-[#D1D5DB] uppercase tracking-[0.2em] pointer-events-none">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-lg shadow-emerald-500/40"></div>
          System Optimal
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB]"></div>
          V2.4.1
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
