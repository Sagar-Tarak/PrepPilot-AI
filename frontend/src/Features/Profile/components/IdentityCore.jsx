import React from "react";
import { User, Mail, Code2 } from "lucide-react";

const IdentityCore = ({ profile, setProfile }) => (
  <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
    <div className="flex items-center gap-4 mb-2">
      <span className="text-[10px] font-mono text-orange-600 font-black uppercase tracking-[0.5em]">
        Identity_Initialisation
      </span>
      <div className="h-px flex-1 bg-slate-50"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-4 group">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black ml-1 flex items-center gap-2 group-focus-within:text-orange-500 transition-colors">
          <User size={12} /> // Full_Internal_Name
        </label>
        <input
          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold uppercase tracking-widest focus:bg-white focus:border-orange-500 outline-none transition-all"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
      </div>
      <div className="space-y-4 group">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black ml-1 flex items-center gap-2 group-focus-within:text-orange-500 transition-colors">
          <Mail size={12} /> // Uplink_Communication_Email
        </label>
        <input
          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:bg-white focus:border-orange-500 outline-none transition-all"
          value={profile.email}
          readOnly
        />
      </div>
      <div className="md:col-span-2 space-y-4 group">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black ml-1 flex items-center gap-2 group-focus-within:text-orange-500 transition-colors">
          <Code2 size={12} /> // Architect_Mission_Statement
        </label>
        <textarea
          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:bg-white focus:border-orange-500 outline-none transition-all h-32 resize-none"
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        />
      </div>
    </div>
  </div>
);

export default IdentityCore;
