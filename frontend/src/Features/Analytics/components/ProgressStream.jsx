import React from "react";
import { Activity } from "lucide-react";

const ProgressStream = () => (
  <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden italic">
    <div className="flex items-center justify-between mb-16">
      <div className="flex items-center gap-4">
        <Activity className="text-orange-500 w-5 h-5" />
        <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">
          Cognitive Progress Stream
        </h3>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <span className="text-[8px] font-mono text-slate-400 uppercase font-black">
            Score_Flow
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          <span className="text-[8px] font-mono text-slate-400 uppercase font-black">
            Average_Baseline
          </span>
        </div>
      </div>
    </div>

    {/* Mock Chart Area */}
    <div className="h-64 flex items-end justify-between gap-4 px-4 relative">
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-px bg-slate-900 w-full"></div>
        ))}
      </div>
      {[45, 67, 52, 89, 75, 95, 82, 98, 91, 100].map((h, i) => (
        <div key={i} className="flex-1 group relative">
          <div
            className={`w-full rounded-t-2xl transition-all duration-1000 delay-${i * 100} hover:scale-105 active:scale-95 cursor-pointer 
                            ${i === 9 ? "bg-orange-600" : "bg-slate-100 group-hover:bg-orange-200"}
                        `}
            style={{ height: `${h}%` }}
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap px-3 py-1.5 bg-slate-950 text-white text-[8px] font-mono font-black uppercase rounded-lg shadow-xl">
              LVL_{h}% // C-0{i + 1}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-5 pointer-events-none">
      <div className="text-[160px] font-black text-slate-900 select-none">
        ANALYTICS
      </div>
    </div>
  </div>
);

export default ProgressStream;
