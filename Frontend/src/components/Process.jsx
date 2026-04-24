import React from 'react'

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Integrate your Google, Meta, and LinkedIn accounts with one-click secure authentication."
  },
  {
    num: "02",
    title: "Analyze",
    desc: "Our AI benchmarks your current spend against industry standards and historical performance."
  },
  {
    num: "03",
    title: "Optimize",
    desc: "Deploy automated bid adjustments and keyword shifts to maximize your return on ad spend."
  }
]

const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">The Optimization Loop</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Sophisticated automation, simplified into three steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-1/4 right-1/4 h-[2px] bg-slate-200 -z-0" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-6 relative z-10 group">
              <div className="w-24 h-24 rounded-full bg-white border-2 border-cyan-100 flex items-center justify-center text-2xl font-bold text-primary shadow-sm group-hover:scale-110 group-hover:border-accent-orange transition-all duration-300">
                {step.num}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed px-4">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
