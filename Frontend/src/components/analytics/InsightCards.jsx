import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Lightbulb, Zap } from 'lucide-react';

const InsightCards = () => {
  const cards = [
    {
      icon: TrendingDown,
      color: 'bg-emerald-50 text-emerald-500',
      label: 'Efficiency Insight',
      text: 'Your CPC is 15% lower than last month, driven by high-performing video assets.',
      border: 'border-l-4 border-emerald-500'
    },
    {
      icon: Lightbulb,
      color: 'bg-orange-50 text-orange-500',
      label: 'Opportunity',
      text: 'Mobile traffic ROI is peaking at 4.2x. Consider reallocating 10% of desktop budget.',
      border: 'border-l-4 border-accent-orange'
    },
    {
      icon: Zap,
      color: 'bg-blue-50 text-blue-500',
      label: 'Velocity Alert',
      text: "Impression share on 'Premium' tier grew by 22% in the last 48 hours.",
      border: 'border-l-4 border-blue-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`bg-white p-8 rounded-[36px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] border border-slate-50 relative overflow-hidden group ${card.border}`}
        >
          <div className="flex gap-6 items-start relative z-10">
            <div className={`p-4 rounded-2xl ${card.color} group-hover:scale-110 transition-transform`}>
              <card.icon size={22} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-3">{card.label}</p>
              <p className="text-sm font-bold text-slate-700 leading-relaxed">
                {card.text}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default InsightCards;
