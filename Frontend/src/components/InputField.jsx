import React from 'react';
import { Mail, Lock, AlertCircle } from 'lucide-react';

const InputField = ({ label, icon: Icon, type, placeholder, error, value, onChange, onBlur, name, id }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[10px] font-bold text-slate-500 tracking-widest uppercase ml-1">
        {label}
      </label>
      <div className="relative group">
        <div className={`absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors`}>
          {Icon === 'mail' && <Mail size={18} />}
          {Icon === 'lock' && <Lock size={18} />}
        </div>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full bg-[#E5E7EB] hover:bg-[#D1D5DB] focus:bg-white border-2 transition-all outline-none py-4 pl-12 pr-4 rounded-2xl text-slate-700 font-medium ${
            error ? 'border-red-400 focus:border-red-500' : 'border-transparent focus:border-slate-300'
          }`}
        />
      </div>
      {error && (
        <div className="flex items-center gap-1.5 mt-1 ml-1 text-red-500">
          <AlertCircle size={14} />
          <span className="text-xs font-semibold">{error}</span>
        </div>
      )}
    </div>
  );
};

export default InputField;
