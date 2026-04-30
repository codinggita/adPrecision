import React from 'react';
import { motion } from 'framer-motion';

const ActivityList = ({ activities }) => {
  return (
    <div className="bg-white p-10 rounded-[36px] shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-slate-50">
      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-10">Recent Activity</h4>
      
      <div className="flex flex-col gap-10">
        {activities.map((item, index) => (
          <div key={item.id} className="flex gap-6 items-start relative group">
            {/* Timeline Line */}
            {index !== activities.length - 1 && (
                <div className="absolute left-[5px] top-6 w-px h-[calc(100%+40px)] bg-slate-100 z-0"></div>
            )}
            
            <div className={`w-2.5 h-2.5 rounded-full mt-1.5 z-10 shrink-0 group-hover:scale-125 transition-transform ${item.color}`}></div>
            
            <div className="flex flex-col gap-1">
                <p className="text-xs font-bold text-slate-700 leading-snug group-hover:text-primary transition-colors cursor-default">
                    {item.title}
                </p>
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
