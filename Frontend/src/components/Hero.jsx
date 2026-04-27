import React from 'react'
import { Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 animate-slide-up">
            <div>
              <span className="inline-block px-5 py-2 rounded-full bg-[#fcead8] text-accent-orange text-xs font-bold tracking-widest mb-6">
                EDITION 2024
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-primary">
                Stop Wasting Your <br />
                <span className="text-accent-orange">Ad Budget</span>
              </h1>
            </div>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              AI-powered precision for modern marketing teams. Automate keyword bidding and budget allocation in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="btn-primary w-full sm:w-auto h-14 px-10 text-lg">
                Get Started
              </button>
              <button className="btn-secondary w-full sm:w-auto h-14 px-8 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-primary">
                  <Play size={14} fill="currentColor" />
                </div>
                See how it works
              </button>
            </div>
          </div>

          <div className="relative group perspective-1000">
            <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl border-4 border-white/10 transform hover:-rotate-y-3 transition-all duration-700">
              <img 
                src="/dashboard_v2.png" 
                alt="AdPrecision Nexus Dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Stat Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 z-20 animate-bounce-slow">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400">Efficiency Lift</p>
                <p className="text-2xl font-bold text-slate-900">+42.8%</p>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/10 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
