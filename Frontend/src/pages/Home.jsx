import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const Home = () => {
  useSmoothScroll(); // Initialize Lenis smooth scroll

  return (
    <div className="bg-[#F9FAFB] selection:bg-teal-100">
      <Helmet>
        <title>AdPrecision | Pro-Grade Advertising Optimization AI</title>
        <meta name="description" content="Unlock high-performance advertising with AdPrecision's AI-driven optimization engine. Scale your reach and ROI with precision." />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default Home
