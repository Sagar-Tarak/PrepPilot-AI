import React from "react";
import { CheckCircle2, Zap, ArrowRight, XCircle } from "lucide-react";

const ReviewView = ({ setView }) => (
  <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-top-8 duration-500">
    <div className="text-center">
      <div className="inline-flex items-center gap-3 px-6 py-2 bg-green-50 border border-green-100 rounded-full mb-8">
        <CheckCircle2 size={16} className="text-green-600" />
        <span className="text-[10px] font-mono text-green-700 font-black uppercase tracking-[0.4em]">
          Evaluation_Complete
        </span>
      </div>
      <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase mb-2">
        Performance
        <br />
        <span className="text-orange-600 underline underline-offset-8 decoration-orange-200">
          Analysis.
        </span>
      </h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center justify-center text-center">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-4 font-black">
          Efficiency_Score
        </span>
        <div className="text-7xl font-black text-slate-950 mb-2">8.9</div>
        <div className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-tighter italic">
          Top 95th Percentile
        </div>
      </div>

      <div className="md:col-span-2 bg-slate-950 p-10 rounded-[2.5rem] text-white overflow-hidden relative group">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/20 blur-3xl rounded-full group-hover:bg-orange-600/40 transition-all"></div>
        <div className="relative z-10 flex flex-col h-full justify-center">
          <div className="flex items-center gap-3 mb-6">
            <Zap size={16} className="text-orange-500 animate-pulse" />
            <span className="text-[9px] font-mono text-orange-500 uppercase tracking-[0.4em] font-black">
              AI_Architect_Feedback
            </span>
          </div>
          <p className="text-lg font-medium text-slate-200 italic leading-relaxed">
            "Your explanation of the memoization differences was precise. You
            correctly identified that useMemo is for expensive values while
            useCallback is for stable functions to prevent re-render pipelines."
          </p>
        </div>
      </div>
    </div>

    {/* Skill Impact Section */}
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100">
      <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black mb-8">
        // Skill_Modification_Logs
      </h4>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-green-500 font-black text-xs">
              +
            </div>
            <span className="text-sm font-black uppercase tracking-tight text-slate-900">
              React Component Lifecycle
            </span>
          </div>
          <span className="text-[10px] font-mono text-green-600 uppercase font-black tracking-widest">
            +124_NODE_EXP
          </span>
        </div>
        <div className="flex items-center justify-between opacity-50">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-orange-500 font-black text-xs">
              ~
            </div>
            <span className="text-sm font-black uppercase tracking-tight text-slate-900">
              Virtual DOM Diffing
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 uppercase font-black tracking-widest">
            STABLE_EXP
          </span>
        </div>
      </div>
    </div>

    <div className="flex gap-4">
      <button
        onClick={() => setView("active")}
        className="flex-1 py-6 bg-slate-950 hover:bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.5em] transition-all shadow-xl shadow-slate-900/10 active:scale-95 flex items-center justify-center gap-4"
      >
        <ArrowRight size={18} /> Continue_Session
      </button>
      <button
        onClick={() => setView("setup")}
        className="flex-1 py-6 bg-white border border-slate-200 hover:bg-slate-50 text-slate-400 rounded-[2rem] font-black text-xs uppercase tracking-[0.5em] transition-all flex items-center justify-center gap-4"
      >
        <XCircle size={18} /> End_Session
      </button>
    </div>
  </div>
);

export default ReviewView;
