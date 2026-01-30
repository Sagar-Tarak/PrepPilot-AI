import React from "react";
import { Layers } from "lucide-react";

const SkillMatrix = ({ metrics }) => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm">
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-4">
        <Layers className="text-orange-500 w-5 h-5" />
        <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">
          Technical Core Strength
        </h3>
      </div>
    </div>

    <div className="space-y-10">
      {metrics.map((skill, i) => (
        <div key={i} className="space-y-4">
          <div className="flex justify-between items-end px-2">
            <div className="flex flex-col">
              <span className="text-xs font-black text-slate-900 uppercase tracking-tight">
                {skill.label}
              </span>
              <span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest font-bold font-italic mt-1">
                Grade: {skill.status}
              </span>
            </div>
            <span
              className={`text-sm font-mono font-black ${skill.score < 50 ? "text-red-500" : "text-slate-900"}`}
            >
              {skill.score}%
            </span>
          </div>
          <div className="h-3 w-full bg-slate-50 rounded-full border border-slate-100 overflow-hidden p-0.5">
            <div
              className={`h-full rounded-full transition-all duration-1000 delay-500 ${skill.color}`}
              style={{ width: `${skill.score}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillMatrix;
