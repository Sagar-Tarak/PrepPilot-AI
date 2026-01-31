import React from "react";
import {
  Terminal,
  Zap,
  Settings2,
  Code2,
  BrainCircuit,
  Play,
  Cpu,
} from "lucide-react";

const SetupView = ({ config, setConfig, setView }) => {
  const getTopicIcon = (topic) => {
    switch (topic) {
      case "React":
        return <Code2 size={20} />;
      case "JavaScript":
        return <Terminal size={20} />;
      case "Node.js":
        return <Cpu size={20} />;
      case "System Design":
        return <BrainCircuit size={20} />;
      default:
        return <Zap size={20} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 font-sans relative overflow-hidden">
      {/* 1. Command Deck Header (Visual Identity) */}
      <div className="relative shrink-0 bg-slate-950 p-8 md:px-12 md:py-10 flex flex-col md:flex-row md:items-end justify-between gap-6 overflow-hidden border-b border-slate-800 shadow-2xl z-10">
        {/* Background FX */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-orange-900/20 to-transparent pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-widest">
              System_Ready
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
            Neural{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Link
            </span>
          </h1>
          <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 mt-2">
            <span>
              PROTOCOL: <span className="text-slate-300">V.2.4.0</span>
            </span>
            <span className="text-slate-700">|</span>
            <span>SECURE_UPLINK_ESTABLISHED</span>
          </div>
        </div>

        <div className="relative z-10 hidden md:block">
          <Cpu
            className="text-slate-800 w-32 h-32 absolute -bottom-8 -right-4 rotate-12 opacity-50"
            strokeWidth={0.5}
          />
        </div>
      </div>

      {/* 2. Main Configuration Grid */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
          {/* Topic Selection - Full Width */}
          <div className="col-span-12 space-y-4">
            <label className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
              <Terminal size={14} className="text-orange-500" />
              01_Select_Module_Core
            </label>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {["React", "JavaScript", "Node.js", "System Design"].map((t) => (
                <button
                  key={t}
                  onClick={() => setConfig({ ...config, topic: t })}
                  className={`
                        relative group h-24 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-3 overflow-hidden
                        ${
                          config.topic === t
                            ? "bg-white border-orange-500 shadow-xl shadow-orange-500/10 ring-1 ring-orange-500 -translate-y-1"
                            : "bg-white border-slate-200 text-slate-400 hover:border-orange-300 hover:text-orange-600 hover:shadow-lg"
                        }
                      `}
                >
                  <div
                    className={`p-2.5 rounded-xl transition-colors ${config.topic === t ? "bg-orange-50 text-orange-600" : "bg-slate-50 text-slate-300 group-hover:bg-orange-50 group-hover:text-orange-600"}`}
                  >
                    {getTopicIcon(t)}
                  </div>
                  <span
                    className={`text-xs font-black uppercase tracking-widest ${config.topic === t ? "text-slate-900" : "text-slate-400 group-hover:text-slate-700"}`}
                  >
                    {t}
                  </span>
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/0 to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty - Left Col */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <label className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
              <Zap size={14} className="text-orange-500" />
              02_Signal_Intensity
            </label>
            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
              {["Easy", "Medium", "Hard"].map((d) => (
                <button
                  key={d}
                  onClick={() => setConfig({ ...config, difficulty: d })}
                  className={`
                             w-full flex items-center justify-between px-5 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all mb-1 last:mb-0
                             ${
                               config.difficulty === d
                                 ? "bg-slate-900 text-white shadow-md transform scale-[1.02]"
                                 : "text-slate-400 hover:bg-slate-50 hover:text-orange-500"
                             }
                          `}
                >
                  <span>{d}</span>
                  <div
                    className={`w-2 h-2 rounded-full ${config.difficulty === d ? "bg-orange-500 shadow-[0_0_8px_orange]" : "bg-slate-200"}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Profile - Right Col */}
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                <Settings2 size={14} className="text-orange-500" />
                03_Architect_Profile
              </label>
              <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest ml-1">
                    Role_Designation
                  </span>
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus-within:bg-white focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10 transition-all">
                    <Code2 size={16} className="text-slate-400" />
                    <input
                      className="bg-transparent w-full text-sm font-bold text-slate-800 uppercase tracking-wide outline-none placeholder:text-slate-300"
                      placeholder="E.G. SR. ENG"
                      value={config.role}
                      onChange={(e) =>
                        setConfig({ ...config, role: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest ml-1">
                    Experience_Index
                  </span>
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus-within:bg-white focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10 transition-all">
                    <BrainCircuit size={16} className="text-slate-400" />
                    <input
                      className="bg-transparent w-full text-sm font-bold text-slate-800 uppercase tracking-wide outline-none placeholder:text-slate-300"
                      placeholder="YEARS"
                      type="number"
                      value={config.experience}
                      onChange={(e) =>
                        setConfig({ ...config, experience: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setView("active")}
                className="w-full md:w-auto flex items-center justify-center gap-4 px-12 py-5 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-orange-600 hover:to-orange-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all shadow-xl shadow-slate-900/20 hover:shadow-orange-500/30 active:scale-95 group"
              >
                <span>Initialise_Link</span>
                <Play
                  size={14}
                  fill="currentColor"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupView;
