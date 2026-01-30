import React from "react";
import {
  TrendingUp,
  ArrowUpRight,
  Target,
  Activity,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

const StatsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-slate-950 p-10 rounded-[3rem] text-white relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
        <TrendingUp size={120} />
      </div>
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest font-black">
            Avg_Efficiency
          </span>
          <ArrowUpRight size={18} className="text-green-500" />
        </div>
        <div>
          <div className="text-6xl font-black tracking-tighter mb-2">86%</div>
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-relaxed">
            +12% Increase from previous deployment cycle
          </p>
        </div>
      </div>
    </div>

    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative group overflow-hidden">
      <div className="absolute -bottom-10 -right-10 p-8 opacity-[0.03] group-hover:scale-125 transition-transform">
        <Target size={180} />
      </div>
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">
            Total_Uplinks
          </span>
          <Activity size={18} className="text-orange-500" />
        </div>
        <div>
          <div className="text-6xl font-black tracking-tighter text-slate-900 mb-2">
            142
          </div>
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-relaxed">
            Questions answered across 24 active sessions
          </p>
        </div>
      </div>
    </div>

    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative group overflow-hidden">
      <div className="absolute -bottom-10 -right-10 p-8 opacity-[0.03] group-hover:scale-125 transition-transform">
        <BrainCircuit size={180} />
      </div>
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">
            Neural_Accuracy
          </span>
          <Sparkles size={18} className="text-purple-500" />
        </div>
        <div>
          <div className="text-6xl font-black tracking-tighter text-slate-900 mb-2">
            A++
          </div>
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-relaxed">
            System validation: Elite Senior Architect grade
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default StatsGrid;
