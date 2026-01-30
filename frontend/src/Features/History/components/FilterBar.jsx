import React from "react";
import { Clock } from "lucide-react";

const FilterBar = ({ filter, setFilter }) => (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    <div className="lg:col-span-3 flex items-center gap-4 overflow-x-auto no-scrollbar py-2">
      {["All", "React", "Node.js", "System Design", "JavaScript"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`
                px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all
                ${
                  filter === f
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-950/20"
                    : "bg-white border border-slate-100 text-slate-400 hover:border-orange-200 hover:text-slate-600"
                }
            `}
        >
          {f}
        </button>
      ))}
    </div>
    <div className="flex items-center justify-end font-mono text-[10px] text-slate-400 uppercase tracking-widest gap-4">
      <Clock size={14} className="text-orange-500" />
      <span>Total Practiced: 12.5 HOURS</span>
    </div>
  </div>
);

export default FilterBar;
