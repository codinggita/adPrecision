import React from 'react'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: "Starter",
    price: "49",
    features: [
      "Up to $5k Monthly Spend",
      "Basic Keyword Automation",
      "Weekly Reports"
    ],
    highlight: false
  },
  {
    name: "Professional",
    price: "199",
    features: [
      "Up to $50k Monthly Spend",
      "Advanced Neural Bidding",
      "Real-time Dashboard",
      "Competitor Insights"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Ad Spend",
      "Dedicated Strategy Account Manager",
      "Custom API Integration"
    ],
    highlight: false
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Scalable Investment</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Choose the tier that aligns with your growth trajectory.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch pt-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-4xl p-10 flex flex-col transition-all duration-300 overflow-hidden ${
                tier.highlight 
                ? 'bg-[#063831] text-white scale-105 shadow-2xl z-10' 
                : 'bg-white border border-slate-100 shadow-sm text-slate-900 group hover:shadow-xl'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 overflow-hidden w-40 h-40 pointer-events-none">
                  <div className="absolute top-[28px] right-[-45px] w-[180px] bg-accent-orange text-white text-[10px] font-black py-1.5 rotate-45 text-center shadow-lg uppercase tracking-widest">
                    RECOMMENDED
                  </div>
                </div>
              )}

              <div className="mb-8 relative z-10">
                <h3 className={`text-2xl font-bold mb-8 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-bold tracking-tight">
                    {tier.price === 'Custom' ? '' : '$'}
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && <span className={`text-lg font-medium opacity-70`}>/mo</span>}
                </div>
              </div>

              <ul className="space-y-5 mb-10 flex-grow relative z-10">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${tier.highlight ? 'text-emerald-400' : 'text-emerald-500'}`}>
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className={tier.highlight ? 'text-white/90' : 'text-slate-600'}>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="relative z-10">
                <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                  tier.highlight 
                  ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:brightness-110 active:scale-95' 
                  : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-accent-orange hover:text-accent-orange active:scale-95'
                }`}>
                  {tier.name === 'Enterprise' ? 'Contact Sales' : tier.highlight ? 'Go Pro' : 'Start Free Trial'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
// Done
// file
