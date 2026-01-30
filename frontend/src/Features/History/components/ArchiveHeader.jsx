import React from "react";
import { History as HistoryIcon, Search, Download } from "lucide-react";

const ArchiveHeader = () => (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <HistoryIcon className="text-orange-500 w-5 h-5" />
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.5em] font-black">
          Archive_Module // Deployment_History
        </span>
      </div>
      <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
        Session Archive<span className="text-orange-600">.</span>
      </h1>
    </div>

    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm group focus-within:border-orange-500 transition-all w-full md:w-80">
        <Search className="text-slate-300 group-focus-within:text-orange-500 w-4 h-4 transition-colors" />
        <input
          type="text"
          placeholder="SEARCH ARCHIVE..."
          className="bg-transparent border-none text-[10px] font-mono font-black text-slate-800 placeholder:text-slate-300 outline-none w-full uppercase tracking-widest"
        />
      </div>
      <button className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10 active:scale-95">
        <Download size={20} />
      </button>
    </div>
  </div>
);

export default ArchiveHeader;
