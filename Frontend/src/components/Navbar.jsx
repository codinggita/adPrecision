import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-primary">
            Ad<span className="text-accent-orange">Precision</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-primary font-medium transition-colors">Features</a>
          <a href="#process" className="text-slate-600 hover:text-primary font-medium transition-colors">How it Works</a>
          <a href="#pricing" className="text-slate-600 hover:text-primary font-medium transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-slate-600 hover:text-primary font-medium transition-colors hidden sm:block">
            Login
          </button>
          <button className="btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
// Done
// file