import React from 'react'
import { Target, BarChart3, TrendingUp } from 'lucide-react'

const features = [
  {
    title: "Smart Keyword Optimization",
    desc: "Our neural engine identifies high-intent search terms while purging low-conversion drains automatically.",
    icon: Target,
    color: "bg-teal-900"
  },
  {
    title: "Budget Recommendations",
    desc: "Real-time shift of resources to top-performing campaigns across all your connected platforms.",
    icon: BarChart3,
    color: "bg-slate-700"
  },
  {
    title: "Real-time Analytics",
    desc: "Unified reporting that makes sense of fragmented data, delivering executive-level insights in seconds.",
    icon: TrendingUp,
    color: "bg-teal-700"
  }
]

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Precision Engineering</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Tools designed for clarity and performance, removing the guesswork from your digital strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card group hover:-translate-y-2 transition-all duration-300 flex flex-col gap-6"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center text-white shadow-lg`}>
                <feature.icon size={28} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

