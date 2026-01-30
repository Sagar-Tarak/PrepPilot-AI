import React from "react";
import { Target, BrainCircuit, Cpu } from "lucide-react";

const CareerMatrix = ({ profile, setProfile }) => (
  <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
    <div className="flex items-center gap-4 mb-2">
      <span className="text-[10px] font-mono text-orange-600 font-black uppercase tracking-[0.5em]">
        Career_Parameter_Tuning
      </span>
      <div className="h-px flex-1 bg-slate-50"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-4 group">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black ml-1 flex items-center gap-2 group-focus-within:text-orange-500 transition-colors">
          <Target size={12} /> // Preferred_Architect_Role
        </label>
        <select
          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold uppercase tracking-widest focus:bg-white focus:border-orange-500 outline-none transition-all appearance-none cursor-pointer"
          value={profile.role}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
          <option>System Architect</option>
        </select>
      </div>
      <div className="space-y-4 group">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black ml-1 flex items-center gap-2 group-focus-within:text-orange-500 transition-colors">
          <BrainCircuit size={12} /> // Experience_Cycle_Count
        </label>
        <input
          type="number"
          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:bg-white focus:border-orange-500 outline-none transition-all"
          value={profile.experience}
          onChange={(e) =>
            setProfile({ ...profile, experience: e.target.value })
          }
        />
      </div>
      <div className="md:col-span-2 space-y-6">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black ml-1 flex items-center gap-2">
          <Cpu size={12} /> // Skill_Manifest
        </label>
        <div className="flex flex-wrap gap-3">
          {profile.skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-4"
            >
              {skill}
              <button className="text-orange-500 hover:text-white transition-colors rotate-45 text-lg">
                +
              </button>
            </div>
          ))}
          <button className="px-5 py-2.5 border-2 border-dashed border-slate-200 text-slate-400 hover:border-orange-500 hover:text-orange-500 rounded-full text-[10px] font-black uppercase tracking-widest transition-all">
            Add_New_Skill
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CareerMatrix;
