import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="flex flex-col">
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
