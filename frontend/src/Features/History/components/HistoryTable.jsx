import React from "react";
import { Terminal, Clock, ArrowUpRight, MoreVertical } from "lucide-react";

const HistoryTable = ({ sessions }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm shadow-slate-100 italic">
      <div className="grid grid-cols-12 bg-slate-50/50 p-6 border-b border-slate-100 text-[9px] font-mono text-slate-400 uppercase tracking-widest font-black">
        <div className="col-span-1">ID</div>
        <div className="col-span-4">Technical_Topic</div>
        <div className="col-span-2">Duration</div>
        <div className="col-span-2">Avg_Score</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-1 text-center">Action</div>
      </div>

      <div className="divide-y divide-slate-50">
        {sessions.map((session, i) => (
          <div
            key={i}
            className="grid grid-cols-12 p-8 items-center hover:bg-slate-50/50 transition-colors group cursor-pointer relative overflow-hidden"
          >
            {/* Status Accent Bar */}
            <div
              className={`absolute left-0 top-0 w-1 h-full transition-all
                        ${session.score >= 9 ? "bg-green-500" : session.score >= 7.5 ? "bg-orange-500" : "bg-slate-200"}
                    `}
            ></div>

            <div className="col-span-1 text-[10px] font-mono text-slate-400 font-bold">
              {session.id}
            </div>

            <div className="col-span-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-white transition-colors">
                <Terminal className="w-5 h-5 text-orange-500/50 group-hover:text-orange-500 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-slate-900 uppercase tracking-tight">
                  {session.topic}
                </span>
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest italic">
                  {session.date} // {session.difficulty}
                </span>
              </div>
            </div>

            <div className="col-span-2 flex items-center gap-2">
              <Clock size={12} className="text-slate-300" />
              <span className="text-xs font-mono font-black text-slate-600">
                {session.duration}
              </span>
            </div>

            <div className="col-span-2 space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xl font-black text-slate-900">
                  {session.score}
                </span>
                <span className="text-[8px] font-mono text-slate-300 uppercase">
                  /10
                </span>
              </div>
              <div className="h-1 w-20 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-slate-900 rounded-full"
                  style={{ width: `${session.score * 10}%` }}
                ></div>
              </div>
            </div>

            <div className="col-span-2">
              <span
                className={`
                            px-4 py-1.5 rounded-full text-[9px] font-mono font-black uppercase tracking-widest
                            ${session.score >= 9 ? "bg-green-50 text-green-600 border border-green-100" : "bg-orange-50 text-orange-600 border border-orange-100"}
                         `}
              >
                {session.status}
              </span>
            </div>

            <div className="col-span-1 flex justify-center gap-3">
              <button className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-500 transition-all shadow-sm">
                <ArrowUpRight size={18} />
              </button>
              <button className="text-slate-300 hover:text-slate-600 transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* PAGINATION FOOTER */}
    <div className="flex items-center justify-between px-6 py-4 bg-white border border-slate-100 rounded-3xl">
      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
        Showing_Page_01_of_04
      </span>
      <div className="flex gap-3">
        <button className="px-6 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-400 cursor-not-allowed">
          Previous_Node
        </button>
        <button className="px-6 py-2 bg-slate-950 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all">
          Next_Node
        </button>
      </div>
    </div>
  </div>
);

export default HistoryTable;
