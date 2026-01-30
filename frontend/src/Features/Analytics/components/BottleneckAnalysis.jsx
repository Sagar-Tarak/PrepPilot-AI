import React from "react";
import { ShieldAlert, ArrowUpRight, Sparkles, Cpu } from "lucide-react";

const BottleneckAnalysis = ({ weaknesses }) => (
  <div className="space-y-8">
    <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm">
      <div className="flex items-center gap-4 mb-10 text-red-600">
        <ShieldAlert size={20} />
        <h3 className="text-xl font-black tracking-tight uppercase">
          Bottleneck Analysis
        </h3>
      </div>
      <div className="space-y-6">
        {weaknesses.map((w, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:border-red-200 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-6">
              <div
                className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center ${w.color} shadow-sm group-hover:scale-110 transition-transform`}
              >
                <w.icon size={20} />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">
                  {w.topic}
                </h4>
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-black leading-none">
                  Impact_Level: {w.impact}
                </span>
              </div>
            </div>
            <ArrowUpRight className="text-slate-200 group-hover:text-red-500 transition-colors" />
          </div>
        ))}
      </div>
    </div>

    <div className="bg-orange-600 p-12 rounded-[3.5rem] text-white relative group overflow-hidden h-full">
      <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700">
        <Sparkles size={140} />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center justify-center h-full space-y-6">
        <div className="w-16 h-16 bg-white/10 rounded-[1.5rem] flex items-center justify-center backdrop-blur-md border border-white/20">
          <Cpu size={32} className="text-white animate-pulse" />
        </div>
        <h3 className="text-2xl font-black tracking-tight uppercase leading-tight">
          Optimise your Architecture.
        </h3>
        <p className="text-[10px] font-mono text-orange-200 uppercase tracking-widest leading-relaxed">
          You're currently in the top 2% of React developers on the platform.
          Focus on Distributed Systems to qualify for the 'Grand Architect'
          tier.
        </p>
        <button className="px-10 py-4 bg-white text-orange-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-orange-900/20">
          Launch Career Path
        </button>
      </div>
    </div>
  </div>
);

export default BottleneckAnalysis;
