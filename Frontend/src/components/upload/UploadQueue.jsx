import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileVideo, FileImage, Loader2 } from 'lucide-react';

const UploadQueue = ({ queue }) => {
  return (
    <div className="bg-white rounded-[40px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-50 min-h-[250px]">
      <div className="flex justify-between items-center mb-8 px-2">
        <h4 className="text-xl font-black text-[#1C3A3A] tracking-tighter">Active Queue</h4>
        <span className="text-[10px] font-black text-[#5C3300] uppercase tracking-widest">{queue.length} Processing</span>
      </div>

      <div className="flex flex-col gap-6">
        <AnimatePresence mode="popLayout">
            {queue.length === 0 ? (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-slate-300"
                >
                    <Loader2 size={32} className="animate-spin opacity-20 mb-4" />
                    <p className="text-[10px] font-black uppercase tracking-widest">Awaiting assets...</p>
                </motion.div>
            ) : (
                queue.map((file) => (
                    <motion.div 
                        key={file.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-slate-50/80 p-6 rounded-[28px] border border-slate-100/50"
                    >
                        <div className="flex gap-6 items-center">
                            <div className="w-16 h-16 bg-[#1C3A3A] rounded-2xl flex items-center justify-center relative overflow-hidden text-white">
                                {file.type.startsWith('video') ? <FileVideo size={24} /> : <FileImage size={24} />}
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-[11px] font-black tabular-nums">
                                    {Math.round(file.progress)}%
                                </div>
                                <motion.div 
                                    className="absolute bottom-0 left-0 h-1 bg-emerald-400"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${file.progress}%` }}
                                />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-black text-[#1C3A3A] truncate mb-2">{file.name}</p>
                                <div className="flex justify-between items-end">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest tabular-nums">
                                        {(file.size / 1024 / 1024).toFixed(1)} MB / {(file.size / 1024 / 1024).toFixed(1)} MB
                                    </p>
                                    <div className="w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                        <motion.div 
                                            className="h-full bg-[#1C3A3A] rounded-full"
                                            animate={{ width: `${file.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UploadQueue;
