import React, { useRef, useEffect } from "react";
import {
  Clock,
  Target,
  Cpu,
  Lightbulb,
  Mic,
  Send,
  ArrowRight,
  Bot,
  User,
} from "lucide-react";

const ActiveView = ({
  config,
  answer,
  setAnswer,
  setView,
  setIsEvaluating,
  isEvaluating,
}) => {
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [answer]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-50 flex flex-col w-full h-full font-sans">
      {/* Header - Static Tech Bar */}
      <div className="flex-none w-full bg-white border-b border-slate-200 shadow-sm z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-orange-500 shadow-lg shadow-orange-500/20">
              <Target size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                Active_Session
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-slate-800 uppercase tracking-tight">
                  {config.topic}
                </span>
                <span className="px-1.5 rounded bg-orange-100 text-[9px] font-bold text-orange-700 uppercase tracking-wider">
                  {config.difficulty}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                Session_Timer
              </span>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock size={12} className="text-orange-500" />
                <span className="text-xs font-mono font-black">12:45.03</span>
              </div>
            </div>
            <button
              onClick={() => setView("setup")}
              className="p-1.5 hover:bg-slate-50 rounded-full text-slate-400 hover:text-red-500 transition-colors"
            >
              <ArrowRight size={18} className="rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area - Scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-hide py-6">
        <div className="max-w-3xl mx-auto p-4 space-y-6 w-full">
          {/* AI Message Bubble */}
          <div className="flex gap-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="shrink-0 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
                <Bot size={16} />
              </div>
            </div>

            <div className="flex-1 space-y-1.5">
              <div className="flex items-baseline justify-between">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                  AI_Architect_01
                </span>
              </div>

              <div className="relative pl-6 py-2">
                {/* Decorative Side Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-100 rounded-full" />

                <h2 className="text-lg md:text-xl font-medium text-slate-900 leading-relaxed">
                  "Explain the difference between useMemo and useCallback. In
                  what architectural scenarios would you prioritise one over the
                  other?"
                </h2>

                {/* Metadata Tags */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Cpu size={14} />
                    <span className="text-[10px] font-mono uppercase tracking-wider">
                      System_Query
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pl-1">
                <button className="text-[9px] font-mono font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1.5 px-2 py-1 rounded-full hover:bg-orange-50 transition-colors uppercase tracking-wider">
                  <Lightbulb size={12} /> Request_Hint
                </button>
              </div>
            </div>
          </div>

          {/* User Input Visual Placeholder */}
          {answer && (
            <div className="flex gap-4 w-full flex-row-reverse animate-in fade-in zoom-in-95 duration-300">
              <div className="shrink-0">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-md">
                  <User size={14} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Deck - Fixed Bottom */}
      <div className="w-full bg-white border-t border-slate-100 p-4">
        <div className="max-w-3xl mx-auto w-full">
          {/* Input Container */}
          <div className="relative group bg-slate-50 border-2 border-slate-100 focus-within:border-orange-500/50 focus-within:ring-4 focus-within:ring-orange-500/10 rounded-[1.5rem] transition-all duration-300 shadow-sm hover:shadow">
            {/* Context Label */}
            <div className="absolute top-[-9px] left-6 px-2 py-0.5 bg-white text-[8px] font-mono font-black text-slate-400 uppercase tracking-widest border border-slate-100 rounded-full group-focus-within:text-orange-500 group-focus-within:border-orange-200 transition-colors">
              Response_Console
            </div>

            <textarea
              ref={textareaRef}
              className="w-full bg-transparent p-4 pr-32 min-h-[50px] max-h-[200px] text-base text-slate-800 placeholder:text-slate-400 focus:outline-none resize-none overflow-y-auto rounded-[1.5rem]"
              placeholder="Type your answer here..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows={1}
            />

            {/* Action Toolbar */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
              <button
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-lg transition-all"
                title="Voice Input"
              >
                <Mic size={16} />
              </button>

              <div className="h-3 w-px bg-slate-200"></div>

              <button
                onClick={() => {
                  if (!answer.trim()) return;
                  setIsEvaluating(true);
                  setTimeout(() => {
                    setView("review");
                    setIsEvaluating(false);
                  }, 2000);
                }}
                disabled={isEvaluating || !answer.trim()}
                className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all shadow-md
                      ${
                        answer.trim() && !isEvaluating
                          ? "bg-slate-900 text-white hover:bg-orange-600 hover:translate-x-0.5"
                          : "bg-slate-200 text-slate-400 cursor-not-allowed"
                      }
                    `}
              >
                {isEvaluating ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <span>Send</span>
                    <Send
                      size={12}
                      className={answer.trim() ? "fill-current" : ""}
                    />
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="text-center mt-2">
            <span className="text-[9px] text-slate-300 font-mono flex items-center justify-center gap-3">
              <span>[ENTER] New Line</span>
              <span>•</span>
              <span>AI Assessment Ready</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveView;
