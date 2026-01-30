import React from "react";
import { User, Target, Zap, CheckCircle2, Camera } from "lucide-react";

const ProfileHeader = ({ profile }) => (
  <div className="bg-slate-950 rounded-[3rem] p-12 text-white relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-12 transition-transform duration-1000">
      <Target size={200} />
    </div>

    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
      <div className="relative group/avatar">
        <div className="w-32 h-32 rounded-[2.5rem] bg-orange-600 flex items-center justify-center shadow-2xl shadow-orange-600/30 overflow-hidden relative">
          <User size={64} className="text-white" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
            <Camera size={24} className="text-white" />
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-slate-950 shadow-xl border-4 border-slate-950">
          <CheckCircle2
            size={16}
            fill="currentColor"
            className="text-green-500"
          />
        </div>
      </div>

      <div className="text-center md:text-left space-y-4">
        <div className="flex items-center justify-center md:justify-start gap-4">
          <span className="text-[10px] font-mono text-orange-500 font-black uppercase tracking-[0.5em]">
            Architect_ID: #0x2A4F
          </span>
          <div className="h-px w-8 bg-white/20"></div>
          <span className="text-[10px] font-mono text-green-500 font-black uppercase tracking-widest flex items-center gap-2">
            <Zap size={10} className="animate-pulse" /> Status: Verified_Elite
          </span>
        </div>
        <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">
          {profile.name}
        </h1>
        <p className="max-w-md text-slate-400 font-medium leading-relaxed">
          {profile.bio}
        </p>
      </div>
    </div>
  </div>
);

export default ProfileHeader;
