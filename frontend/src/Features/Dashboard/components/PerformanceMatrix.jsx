import React from "react";

const PerformanceMatrix = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {stats.map((stat, i) => (
      <div
        key={i}
        className="group relative bg-white rounded-[2.5rem] p-7 border border-slate-100 hover:border-orange-200 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1"
      >
        {/* Subtle Background Icon Decor */}
        <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-125 transition-all duration-700 pointer-events-none">
          <stat.icon size={120} />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <div
              className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}
            >
              <stat.icon size={22} />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-orange-500 transition-colors"></span>
              <span className="text-[10px] font-mono text-slate-300 font-black uppercase tracking-widest leading-none">
                MTRX_0{i + 1}
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em] font-black">
              {stat.name}
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-slate-900 tracking-tighter">
                {stat.value}
              </span>
              {/* Optional Trending Indicator */}
              <span className="text-[10px] font-mono text-green-500 font-bold uppercase tracking-widest">
                +2.4%
              </span>
            </div>
          </div>

          {/* Decorative Progress Bar Root */}
          <div className="mt-8 h-1 w-full bg-slate-50 rounded-full overflow-hidden">
            <div
              className={`h-full bg-slate-100 group-hover:bg-orange-500/20 transition-all duration-700 w-full`}
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default PerformanceMatrix;
