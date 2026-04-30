import React from 'react';
import { motion } from 'framer-motion';
import { MoreVertical, DownloadCloud, UserPlus, ShieldAlert, MonitorPlay } from 'lucide-react';
import toast from 'react-hot-toast';

const UserTable = ({ users, onToggleMFA }) => {

  const handleMFA = (id, currentStatus) => {
      onToggleMFA(id);
      toast(currentStatus ? 'MFA Disabled for user' : 'MFA Enforced for user', {
          icon: currentStatus ? '🔓' : '🔐',
          style: { borderRadius: '20px', background: '#1C3A3A', color: '#fff', fontSize: '11px', fontWeight: '900' }
      });
  };

  const getRoleColor = (role) => {
      switch(role) {
          case 'ADMIN': return 'bg-rose-50 text-rose-600 border-rose-100';
          case 'EDITOR': return 'bg-orange-50 text-orange-600 border-orange-100';
          default: return 'bg-slate-50 text-slate-500 border-slate-200';
      }
  };

  return (
    <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-50 overflow-hidden">
      <div className="p-10 border-b border-slate-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <h3 className="text-2xl font-black text-[#1C3A3A] tracking-tighter">Identity & Access</h3>
          <div className="flex gap-4">
              <button 
                onClick={() => toast.success('Audit log generation started')}
                className="px-6 py-3 rounded-2xl bg-slate-50 text-[#1C3A3A] text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                  <DownloadCloud size={16} /> Export Audit Log
              </button>
              <button 
                onClick={() => toast('Invite module locked (Demo)', { icon: '🔒' })}
                className="px-8 py-3 rounded-2xl bg-[#1C3A3A] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#0D2626] transition-colors shadow-xl shadow-teal-950/20 active:scale-95 flex items-center gap-2"
              >
                  <UserPlus size={16} /> Invite User
              </button>
          </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-10 py-6 text-[10px] font-black text-slate-400 py-6 uppercase tracking-widest border-b border-slate-100">User Identity</th>
              <th className="px-10 py-6 text-[10px] font-black text-slate-400 py-6 uppercase tracking-widest border-b border-slate-100">System Role</th>
              <th className="px-10 py-6 text-[10px] font-black text-slate-400 py-6 uppercase tracking-widest border-b border-slate-100">Session Status</th>
              <th className="px-10 py-6 text-[10px] font-black text-slate-400 py-6 uppercase tracking-widest border-b border-slate-100 text-right">Access Controls</th>
              <th className="px-6 py-6 border-b border-slate-100"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <motion.tr 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={user.id} 
                className="group border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                >
                <td className="px-10 py-6 align-middle">
                    <p className="text-sm font-black text-[#1C3A3A]">{user.name}</p>
                    <p className="text-[11px] font-bold text-slate-400 mt-1">{user.email}</p>
                </td>
                <td className="px-10 py-6 align-middle">
                    <span className={`px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border ${getRoleColor(user.role)}`}>
                        {user.role}
                    </span>
                </td>
                <td className="px-10 py-6 align-middle">
                    <div className="flex items-center gap-2">
                       {user.lastSession.startsWith('Active') ? (
                           <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
                       ) : (
                           <MonitorPlay size={14} className="text-slate-300" />
                       )}
                       <span className="text-[11px] font-bold text-slate-500">{user.lastSession}</span>
                    </div>
                </td>
                <td className="px-10 py-6 align-middle text-right">
                    <div className="flex items-center justify-end gap-3 cursor-pointer" onClick={() => handleMFA(user.id, user.mfaEnabled)}>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#1C3A3A]">MFA</span>
                        <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${user.mfaEnabled ? 'bg-emerald-500' : 'bg-slate-200'}`}>
                            <motion.div 
                                className="w-3.5 h-3.5 bg-white rounded-full absolute top-[3px] shadow-sm"
                                animate={{ x: user.mfaEnabled ? 22 : 4 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </div>
                    </div>
                </td>
                <td className="px-6 py-6 align-middle text-right">
                    <button className="p-2 text-slate-300 hover:text-[#1C3A3A] transition-colors rounded-xl hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-sm">
                        <MoreVertical size={20} />
                    </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
