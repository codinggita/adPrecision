import React from 'react';
import { Edit2, Trash2, SlidersHorizontal, Download } from 'lucide-react';

const campaigns = [
  {
    id: '99420-SD',
    name: 'Summer Solstice Blast',
    budget: '$12,000.00',
    progress: 75,
    status: 'Active',
    performance: '+14%',
    performanceColor: '#10B981',
    sparkline: 'M0 20 L20 5 L40 15 L60 2 L80 18 L100 0',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=64&h=64&fit=crop'
  },
  {
    id: '88231-XQ',
    name: 'Fall Product Launch',
    budget: '$25,000.00',
    progress: 30,
    status: 'Active',
    performance: '-4%',
    performanceColor: '#F59E0B',
    sparkline: 'M0 5 L20 15 L40 8 L60 20 L80 12 L100 25',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=64&h=64&fit=crop'
  },
  {
    id: '77120-ZW',
    name: 'Holiday Retargeting',
    budget: '$5,500.00',
    progress: 100,
    status: 'Paused',
    performance: '0%',
    performanceColor: '#94A3B8',
    sparkline: 'M0 15 L100 15',
    image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=64&h=64&fit=crop'
  }
];

const CampaignTable = () => {
  return (
    <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden animate-slide-up">
      <div className="p-8 pb-4 flex justify-between items-center bg-white">
        <div className="flex gap-10">
          {['All Campaigns (12)', 'Drafts', 'Archived'].map((tab, i) => (
            <button key={tab} className={`text-sm font-black tracking-tight pb-4 relative transition-all ${
              i === 0 ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-400 hover:text-slate-600'
            }`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors"><SlidersHorizontal size={20} /></button>
          <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors"><Download size={20} /></button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Campaign Name</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Budget</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Performance</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {campaigns.map((camp, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <img src={camp.image} alt="" className="w-12 h-12 rounded-xl object-cover shadow-sm ring-1 ring-slate-100" />
                    <div>
                      <div className="text-[15px] font-black text-slate-800 tracking-tight">{camp.name}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">ID: {camp.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="text-sm font-black text-slate-800 mb-1.5">{camp.budget}</div>
                  <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${camp.status === 'Active' ? 'bg-[#1C3A3A]' : 'bg-slate-300'}`} 
                      style={{ width: `${camp.progress}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={camp.status === 'Active'} />
                      <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1C3A3A]"></div>
                    </label>
                    <span className={`text-[13px] font-black ${camp.status === 'Active' ? 'text-slate-700' : 'text-slate-400'}`}>
                      {camp.status}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <svg width="80" height="24" className="overflow-visible">
                      <path 
                        d={camp.sparkline} 
                        fill="none" 
                        stroke={camp.performanceColor} 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                    <span className={`text-[13px] font-black`} style={{ color: camp.performanceColor }}>
                      {camp.performance}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                    <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-white rounded-lg shadow-sm transition-all"><Edit2 size={16} /></button>
                    <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-white rounded-lg shadow-sm transition-all"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-8 flex justify-between items-center bg-white border-t border-slate-50">
        <div className="text-[13px] font-bold text-slate-400">Showing 1-3 of 12 campaigns</div>
        <div className="flex items-center gap-2">
           <button className="px-4 py-2 text-xs font-black text-slate-400 hover:text-slate-700 border border-slate-100 rounded-lg transition-all">Previous</button>
           <button className="w-8 h-8 flex items-center justify-center text-xs font-black bg-[#1C3A3A] text-white rounded-lg shadow-lg shadow-teal-900/20">1</button>
           <button className="w-8 h-8 flex items-center justify-center text-xs font-black text-slate-400 hover:text-slate-600 rounded-lg">2</button>
           <button className="px-4 py-2 text-xs font-black text-slate-400 hover:text-slate-700 border border-slate-100 rounded-lg transition-all">Next</button>
        </div>
      </div>
    </div>
  );
};

export default CampaignTable;
