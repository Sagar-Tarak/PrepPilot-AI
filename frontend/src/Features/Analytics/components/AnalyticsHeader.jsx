import React from "react";
import { BarChart3 } from "lucide-react";

const AnalyticsHeader = () => (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <BarChart3 className="text-orange-500 w-5 h-5" />
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.5em] font-black">
          Performance_Matrix // Neural_Reporting
        </span>
      </div>
      <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
        Intelligence Hub<span className="text-orange-600">.</span>
      </h1>
    </div>

    <div className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm italic">
      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">
        Reporting_Period
      </span>
      <div className="h-4 w-px bg-slate-100"></div>
      <span className="text-[10px] font-mono text-orange-600 uppercase tracking-widest font-black">
        Last_30_Cycles
      </span>
    </div>
  </div>
);

export default AnalyticsHeader;
