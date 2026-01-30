import React from "react";
import { Lock, Shield, ArrowRight } from "lucide-react";

const SecurityAuth = () => (
  <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
    <div className="flex items-center gap-4 mb-2">
      <span className="text-[10px] font-mono text-orange-600 font-black uppercase tracking-[0.5em]">
        Credential_Vault_Control
      </span>
      <div className="h-px flex-1 bg-slate-50"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-4 group">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black ml-1 flex items-center gap-2">
          <Lock size={12} /> // Access_Key_Reset
        </label>
        <button className="w-full px-8 py-4 bg-slate-950 hover:bg-orange-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all shadow-xl shadow-slate-900/10 active:scale-95 text-left flex items-center justify-between group/btn">
          Initialise Password Reset
          <ArrowRight
            size={14}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
      <div className="space-y-4 group">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black ml-1 flex items-center gap-2">
          <Shield size={12} /> // Two_Factor_Auth
        </label>
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-black">
            Device_Locking: Enabled
          </span>
          <div className="w-10 h-5 bg-orange-600 rounded-full relative cursor-pointer">
            <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SecurityAuth;
