import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UploadDropzone = ({ onFilesSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onFilesSelected(files);
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      onFilesSelected(files);
    }
  };

  return (
    <div
      className={`relative w-full aspect-[16/9] lg:aspect-auto lg:h-[500px] border-4 border-dashed rounded-[48px] flex flex-col items-center justify-center transition-all duration-500 overflow-hidden group ${isDragging
          ? 'border-primary bg-primary/5 scale-[1.01]'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
        }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-transparent to-orange-500/0 group-hover:from-teal-500/5 group-hover:to-orange-500/5 transition-all duration-1000"></div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 flex flex-col items-center text-center px-12"
      >
        <div className={`w-24 h-24 rounded-[32px] bg-slate-100 flex items-center justify-center mb-8 transition-transform duration-500 ${isDragging ? 'scale-110 rotate-12' : 'group-hover:scale-105 group-hover:-rotate-3'}`}>
          <UploadCloud size={44} className={isDragging ? 'text-primary' : 'text-slate-400'} />
        </div>

        <h3 className="text-4xl font-black text-[#1C3A3A] tracking-tighter mb-4 leading-none">
          Drop your masterpieces here
        </h3>
        <p className="text-slate-400 font-bold text-lg max-w-sm mb-12">
          Support for <span className="text-slate-600">MP4, MOV, JPG, and PNG</span>. Max file size <span className="text-[#1C3A3A] font-black">500MB</span> per asset.
        </p>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-[#1C3A3A] hover:bg-[#0D2626] text-white px-12 py-5 rounded-[22px] font-black text-sm uppercase tracking-[0.2em] transition-all shadow-2xl shadow-teal-950/20 active:scale-95"
        >
          Select Files
        </button>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileSelect}
          accept=".mp4,.mov,.jpg,.png"
        />

        <div className="flex items-center gap-8 mt-12">
          <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <CheckCircle2 size={16} className="text-emerald-500" />
            4K UHD Optimized
          </div>
          <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <ShieldCheck size={16} className="text-[#5C3300]" />
            Auto-Tagging
          </div>
        </div>
      </motion.div>

      {/* Highlight Overlays */}
      <AnimatePresence>
        {isDragging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 border-[12px] border-primary/20 pointer-events-none rounded-[36px] z-20"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadDropzone;
