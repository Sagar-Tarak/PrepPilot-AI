import React from "react";
import {
  Clock,
  Target,
  Cpu,
  BrainCircuit,
  MessageSquare,
  Lightbulb,
  Mic,
  Send,
  ArrowRight,
} from "lucide-react";

const ActiveView = ({
  config,
  answer,
  setAnswer,
  setView,
  setIsEvaluating,
  isEvaluating,
}) => (
  <div className="max-w-5xl mx-auto flex flex-col h-[calc(100vh-180px)] animate-in fade-in slide-in-from-right-8 duration-500">
    {/* Header Status Bar */}
    <div className="flex items-center justify-between p-6 bg-slate-900 rounded-t-[2.5rem] border-b border-white/5 text-white">
      <div className="flex items-center gap-6">
        <div className="flex flex-col">
          <span className="text-[8px] font-mono text-orange-500 uppercase tracking-widest font-black mb-1">
            Session_Module
          </span>
          <span className="text-xs font-black uppercase tracking-widest">
            {config.topic} // {config.difficulty}
          </span>
        </div>
        <div className="h-10 w-px bg-white/10 hidden md:block"></div>
        <div className="hidden md:flex flex-col">
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mb-1">
            Deployment_Time
          </span>
          <div className="flex items-center gap-2">
            <Clock size={12} className="text-orange-500" />
            <span className="text-xs font-mono font-black">12:45.03</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mb-1">
            Uplink_Identity
          </span>
          <span className="text-xs font-black uppercase tracking-tighter">
            ARCHITECT_01
          </span>
        </div>
        <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
          <Target size={20} />
        </div>
      </div>
    </div>

    {/* Main Interactive Deck */}
    <div className="flex-1 bg-white border-x border-slate-100 flex flex-col p-8 md:p-12 space-y-10 overflow-hidden">
      {/* AI Question Section */}
      <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 relative group overflow-hidden shrink-0">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform">
          <Cpu size={140} />
        </div>
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <BrainCircuit className="text-orange-500 w-5 h-5" />
            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.4em] font-black">
              AI_Output_Buffer
            </span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight uppercase">
            "Explain the difference between useMemo and useCallback. In what
            architectural scenarios would you prioritise one over the other?"
          </h2>
        </div>
      </div>

      {/* Answer Input Section */}
      <div className="flex-1 flex flex-col space-y-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <MessageSquare className="text-orange-500 w-4 h-4" />
            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-black">
              User_Input_Vessel
            </span>
          </div>
          <button className="flex items-center gap-2 text-[9px] font-mono text-orange-600 hover:text-orange-700 font-black uppercase tracking-widest">
            <Lightbulb size={12} /> Request_Hint
          </button>
        </div>
        <div className="relative flex-1 group">
          <textarea
            className="w-full h-full p-8 bg-slate-50/50 border border-slate-100 rounded-[2rem] text-lg font-medium text-slate-800 focus:bg-white focus:border-orange-500 outline-none transition-all resize-none placeholder:text-slate-200"
            placeholder="TYPE YOUR ARCHITECTURAL RESPONSE HERE..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 px-4 py-1 bg-white border border-slate-100 rounded-full text-[8px] font-mono text-slate-300 uppercase tracking-widest">
            Console_Ready
          </div>
        </div>
      </div>
    </div>

    {/* Execution Control Bar */}
    <div className="bg-slate-50 p-6 rounded-b-[2.5rem] border-t border-slate-100 flex items-center justify-between">
      <button
        onClick={() => setView("setup")}
        className="flex items-center gap-3 px-8 p-4 bg-white border border-slate-200 hover:bg-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"
      >
        <ArrowRight size={14} className="rotate-180" /> Terminate_Link
      </button>
      <div className="flex gap-4">
        <button className="flex items-center justify-center w-14 h-14 bg-white border border-slate-200 text-slate-400 hover:text-orange-600 hover:border-orange-200 rounded-2xl transition-all">
          <Mic size={20} />
        </button>
        <button
          onClick={() => {
            setIsEvaluating(true);
            setTimeout(() => {
              setView("review");
              setIsEvaluating(false);
            }, 2000);
          }}
          className="flex items-center gap-4 px-12 h-14 bg-slate-900 hover:bg-orange-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-slate-900/10 group"
          disabled={isEvaluating}
        >
          {isEvaluating ? "EVALUATING..." : "Submit_Answer"}
          <Send
            size={14}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </button>
      </div>
    </div>
  </div>
);

export default ActiveView;
