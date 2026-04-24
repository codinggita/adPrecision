import React from 'react'
import { Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-black">Ad<span className="text-accent-orange">Precision</span></h3>
            <p className="text-slate-500 max-w-xs leading-relaxed">
              Empowering marketing teams with institutional-grade data precision. Built for growth, powered by AI.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Enterprise</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">News</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4 text-sm text-slate-400">
          <p>© 2024 AdPrecision Inc. All rights reserved.</p>
          <p>Designed with Editorial Precision.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
