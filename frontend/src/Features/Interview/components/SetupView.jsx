import React from "react";
import {
  Terminal,
  Zap,
  Settings2,
  Code2,
  BrainCircuit,
  Play,
} from "lucide-react";

const SetupView = ({ config, setConfig, setView }) => (
  <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-500">
    <div className="text-center">
      <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-orange-600/10 border border-orange-500/20 rounded-full mb-6">
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
        <span className="text-[10px] font-mono text-orange-500 font-black uppercase tracking-[0.4em]">
          Ready_for_Initialisation
        </span>
      </div>
      <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase mb-4 leading-tight">
        Configure your
        <br />
        <span className="text-orange-600">Neural Link.</span>
      </h1>
      <p className="text-slate-500 text-lg font-medium">
        Select your parameters to begin the AI interview session.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Topic Selection */}
      <div className="space-y-4">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black ml-2 animate-pulse flex items-center gap-2">
          <Terminal size={12} className="text-orange-500" /> //
          01_Select_Core_Topic
        </label>
        <div className="grid grid-cols-2 gap-3">
          {["React", "JavaScript", "Node.js", "System Design"].map((t) => (
            <button
              key={t}
              onClick={() => setConfig({ ...config, topic: t })}
              className={`px-6 py-4 rounded-2xl border text-xs font-black uppercase tracking-widest transition-all
                                ${config.topic === t ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/20" : "bg-white border-slate-100 text-slate-400 hover:border-orange-500/50 hover:text-orange-500"}
                            `}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div className="space-y-4">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black ml-2 flex items-center gap-2">
          <Zap size={12} className="text-orange-500" /> // 02_Intensity_Level
        </label>
        <div className="grid grid-cols-3 gap-3">
          {["Easy", "Medium", "Hard"].map((d) => (
            <button
              key={d}
              onClick={() => setConfig({ ...config, difficulty: d })}
              className={`py-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all
                                ${config.difficulty === d ? "bg-orange-600 border-orange-600 text-white shadow-xl shadow-orange-950/20" : "bg-white border-slate-100 text-slate-400 hover:border-orange-500/50 hover:text-orange-500"}
                            `}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Role Configuration */}
      <div className="md:col-span-2 space-y-4">
        <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black ml-2 flex items-center gap-2">
          <Settings2 size={12} className="text-orange-500" /> //
          03_Architect_Profile_Sync
        </label>
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-2">
            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block ml-1">
              Target_Role
            </span>
            <div className="relative group">
              <Code2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-orange-500" />
              <input
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold uppercase tracking-widest focus:bg-white focus:border-orange-500 transition-all outline-none"
                value={config.role}
                onChange={(e) => setConfig({ ...config, role: e.target.value })}
              />
            </div>
          </div>
          <div className="w-full md:w-48 space-y-2">
            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block ml-1">
              Experience (Years)
            </span>
            <div className="relative group">
              <BrainCircuit className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-orange-500" />
              <input
                type="number"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold uppercase tracking-widest focus:bg-white focus:border-orange-500 transition-all outline-none"
                value={config.experience}
                onChange={(e) =>
                  setConfig({ ...config, experience: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center pt-8">
      <button
        onClick={() => setView("active")}
        className="flex items-center gap-4 px-16 py-6 bg-slate-950 hover:bg-orange-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.5em] transition-all shadow-2xl shadow-slate-900/10 active:scale-95 group"
      >
        <Play
          fill="currentColor"
          size={16}
          className="group-hover:scale-125 transition-transform"
        />
        Open Neural Link
      </button>
    </div>
  </div>
);

export default SetupView;
