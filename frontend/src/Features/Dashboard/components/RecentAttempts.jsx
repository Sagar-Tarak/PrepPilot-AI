import React from "react";
import { Link } from "react-router-dom";
import { History as HistoryIcon, ArrowRight, Terminal } from "lucide-react";
import ROUTES from "../../../config/routes";

const RecentAttempts = ({ attempts }) => (
  <div className="xl:col-span-2 space-y-8">
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
          <HistoryIcon size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">
            Review_Archive
          </h2>
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">
            Latest_Neural_Benchmarks
          </p>
        </div>
      </div>
      <Link
        to={ROUTES.MOCK_INTERVIEW}
        className="px-6 py-2.5 bg-white border border-slate-100 rounded-xl text-[10px] font-mono text-slate-600 hover:text-orange-600 hover:border-orange-200 font-black uppercase tracking-widest flex items-center gap-3 group transition-all"
      >
        History_All
        <ArrowRight className="w-3" />
      </Link>
    </div>

    <div className="grid grid-cols-1 gap-4">
      {attempts.map((session, i) => (
        <div
          key={i}
          className="group relative bg-white p-1 rounded-[2.5rem] border border-slate-100 hover:border-orange-200 transition-all duration-500 cursor-pointer"
        >
          <div className="p-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-slate-50 group-hover:bg-orange-50 rounded-2xl flex items-center justify-center transition-colors">
                <Terminal className="text-slate-400 group-hover:text-orange-500 w-6 h-6 transition-colors" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                    {session.topic}
                  </h4>
                  <span className="text-[11px] font-mono text-green-500 font-black uppercase">
                    0x{session.id}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    TS_{session.date}
                  </span>
                  <div className="h-1 w-1 bg-slate-200 rounded-full"></div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Status:{" "}
                    <span className="text-orange-600 font-black">
                      {session.status}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8 md:pl-8 md:border-l border-slate-50">
              <div className="flex flex-col items-end">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.3em] mb-1 font-black">
                  Metric_Score
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900">
                    {session.score}
                  </span>
                  <span className="text-xs font-mono text-slate-300">/10</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-orange-600 transition-all active:scale-95">
                <ArrowRight size={20} strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecentAttempts;
