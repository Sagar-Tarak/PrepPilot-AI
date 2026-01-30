import React from "react";
import { Cpu, Zap, Code2, Sparkles } from "lucide-react";

const SecondaryModules = () => (
  <div className="space-y-8">
    {/* AI Focus Card - Dark/Glowing Mode */}
    <div className="relative group overflow-hidden bg-slate-950 p-1 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:shadow-orange-950/20">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

      <div className="bg-slate-950 p-8 rounded-[2.4rem] h-full relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full blur-[80px] group-hover:bg-orange-600/10 transition-colors"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-600/20 flex items-center justify-center">
                <Sparkles className="text-orange-500 w-4 h-4 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono text-orange-500 uppercase tracking-[0.4em] font-black">
                Insight_Engine
              </span>
            </div>
            <Cpu
              size={16}
              className="text-slate-700 group-hover:text-orange-500 transition-colors duration-700"
            />
          </div>

          <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-4 leading-tight">
            Focus: <br />
            <span className="text-orange-500">React Scaling.</span>
          </h3>

          <p className="text-slate-400 text-xs font-medium leading-relaxed mb-10">
            Your profile shows gaps in{" "}
            <span className="text-white italic">Hydration Patterns</span> and{" "}
            <span className="text-white italic">Selective Hydration</span>. We
            recommend an advanced deep-dive.
          </p>

          <button className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all shadow-xl shadow-orange-900/20 group-hover:translate-y-[-2px] active:translate-y-0">
            Deploy Training
          </button>
        </div>
      </div>
    </div>

    {/* Technical Stack Radar - Cleaner & Data Dense */}
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 group">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <Code2 size={16} className="text-orange-500" />
          <h3 className="text-[11px] font-mono text-slate-400 uppercase tracking-widest font-black">
            Tech_Core_Sync
          </h3>
        </div>
        <span className="text-[10px] font-mono text-slate-300 font-black">
          v2.4.0
        </span>
      </div>

      <div className="space-y-8">
        {[
          { label: "Frontend", value: 88, color: "bg-orange-500" },
          { label: "Backend", value: 62, color: "bg-slate-900" },
          { label: "Infra", value: 45, color: "bg-slate-300" },
        ].map((skill, i) => (
          <div key={i} className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-none">
                {skill.label}
              </span>
              <span className="text-[11px] font-mono font-black text-slate-400">
                {skill.value}%
              </span>
            </div>
            <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden p-px border border-slate-100/50">
              <div
                className={`h-full ${skill.color} rounded-full transition-all duration-1000 delay-300`}
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-slate-50">
        <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-600 transition-colors">
          <Zap size={14} className="text-orange-500" />
          <span className="text-[9px] font-mono uppercase tracking-widest font-black">
            Global Readiness: 74%
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default SecondaryModules;
