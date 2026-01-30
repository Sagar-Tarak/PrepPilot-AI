import React from "react";
import { Zap, ArrowRight, Brain, Target } from "lucide-react";

const MissionControl = () => (
  <div className="relative group overflow-hidden bg-slate-950 rounded-[3rem] p-8 md:p-12 text-white">
    {/* Animated Background Elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
      <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent animate-pulse duration-[4000ms]"></div>
    </div>

    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-orange-600/20 border border-orange-500/30 rounded-full">
            <span className="text-[10px] font-mono text-orange-500 font-black uppercase tracking-[0.3em]">
              System_Active
            </span>
          </div>
          <div className="h-1 w-1 bg-orange-500 rounded-full animate-ping"></div>
        </div>

        <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
          Push your <br />
          <span className="text-orange-500">Neural Limits.</span>
        </h2>

        <p className="text-slate-400 text-lg max-w-md font-medium leading-relaxed">
          Your current performance indicates high proficiency in{" "}
          <span className="text-white font-bold italic">Concurrent React</span>.
          Next milestone:{" "}
          <span className="text-white font-bold">Distributed Systems</span>{" "}
          architecting.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-3 active:scale-95">
            Initialize Drill <ArrowRight size={16} />
          </button>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-3">
            Review Roadmap
          </button>
        </div>
      </div>

      <div className="hidden lg:block relative h-full min-h-[300px]">
        {/* Mock HUD Visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64 border border-white/5 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 border border-orange-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="text-center space-y-2">
              <Brain size={48} className="text-orange-500 mx-auto mb-2" />
              <div className="text-4xl font-black tracking-tighter">92.4</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">
                Readiness_Index
              </div>
            </div>
          </div>

          {/* Data Points */}
          <div className="absolute top-0 right-0 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <div className="flex items-center gap-3 text-green-500 mb-1">
              <Zap size={14} />
              <span className="text-[10px] font-mono font-black uppercase tracking-widest">
                +12% Gain
              </span>
            </div>
            <div className="text-[9px] font-mono text-slate-500 uppercase">
              Latency Optimised
            </div>
          </div>

          <div className="absolute bottom-10 left-[-20px] p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <div className="flex items-center gap-3 text-orange-500 mb-1">
              <Target size={14} />
              <span className="text-[10px] font-mono font-black uppercase tracking-widest">
                Target Met
              </span>
            </div>
            <div className="text-[9px] font-mono text-slate-500 uppercase">
              SLA Breach: 0%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MissionControl;
