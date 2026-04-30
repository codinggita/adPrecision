import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Trash2, Edit3, Filter, RefreshCcw, Eye, FileBox } from 'lucide-react';

const UploadHistory = ({ uploadedFiles, history, onDeleteFile, onRemoveHistory }) => {
  return (
    <div className="bg-white rounded-[48px] p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] border border-slate-50 mt-16">
      <div className="flex justify-between items-center mb-12">
        <h3 className="text-3xl font-black text-[#1C3A3A] tracking-tighter">Upload History & Status</h3>
        <div className="flex gap-4">
            <button className="p-3 text-slate-400 hover:text-[#1C3A3A] transition-colors"><Filter size={20} /></button>
            <button className="p-3 text-slate-400 hover:text-[#1C3A3A] transition-colors"><RefreshCcw size={20} /></button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <AnimatePresence mode="popLayout">
           {/* Rejected Files */}
           {history.map((row) => (
            <motion.div 
               key={row.id}
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 20 }}
               className="bg-rose-50/50 p-8 rounded-[32px] border border-rose-100 flex items-center justify-between group"
            >
                <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-500">
                        <AlertCircle size={24} />
                    </div>
                    <div>
                        <div className="flex items-center gap-4 mb-1">
                            <p className="text-lg font-black text-[#1C3A3A] tracking-tight">{row.name}</p>
                            <span className="px-2 py-0.5 rounded-lg bg-rose-500 text-white text-[9px] font-black uppercase tracking-widest">REJECTED</span>
                        </div>
                        <p className="text-[11px] font-bold text-rose-400 max-w-[500px] leading-relaxed">
                            {row.error}
                        </p>
                    </div>
                </div>
                <button 
                  onClick={() => onRemoveHistory(row.id)}
                  className="px-6 py-3 rounded-xl bg-white border border-rose-100 text-rose-500 text-[10px] font-black uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                >
                    Remove
                </button>
            </motion.div>
           ))}

           {/* Ready Files */}
           {uploadedFiles.map((row) => (
            <motion.div 
               key={row.id}
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, scale: 0.95 }}
               className="bg-slate-50/10 p-8 rounded-[36px] border border-slate-50 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 flex items-center justify-between group"
            >
                <div className="flex items-center gap-8">
                    <div className="w-20 h-20 bg-slate-100 rounded-3xl overflow-hidden border-2 border-white shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                        {row.thumbnail ? (
                            <img src={row.thumbnail} alt={row.name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                                <FileBox size={32} />
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="flex items-center gap-4 mb-2">
                            <p className="text-lg font-black text-[#1C3A3A] tracking-tight group-hover:text-primary transition-colors">{row.name}</p>
                            <span className="px-2 py-0.5 rounded-lg bg-[#1C3A3A] text-white text-[9px] font-black uppercase tracking-widest">READY</span>
                        </div>
                        <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] tabular-nums">
                            <span>{row.size}</span>
                            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                            <span>{row.resolution}</span>
                            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                            <span>{row.timestamp}</span>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-3">
                    <button className="p-4 bg-white rounded-2xl text-slate-400 hover:text-[#1C3A3A] hover:shadow-md transition-all">
                        <Edit3 size={18} />
                    </button>
                    <button 
                        onClick={() => onDeleteFile(row.id)}
                        className="p-4 bg-white rounded-2xl text-slate-400 hover:text-rose-500 hover:shadow-md transition-all"
                    >
                        <Trash2 size={18} />
                    </button>
                    <button className="px-6 py-4 bg-[#1C3A3A] rounded-2xl text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#0D2626] transition-all flex items-center gap-2">
                        <Eye size={16} /> Preview
                    </button>
                </div>
            </motion.div>
           ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UploadHistory;
