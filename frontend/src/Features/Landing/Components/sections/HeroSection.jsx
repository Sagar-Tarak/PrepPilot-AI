import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Clock,
  Code2,
  MessageSquare,
  Play,
  ShieldCheck,
  Timer,
  Users,
  Zap,
} from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const companies = ["TechCorp", "InnovateLabs", "FutureSystems", "DevScale"];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-32 pb-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] bg-orange-50/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content: Typography & CTA */}
          <div
            className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* New Feature Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full cursor-pointer hover:bg-orange-100 transition-colors">
              <span className="flex items-center justify-center px-2 py-0.5 bg-white rounded-full text-[10px] font-bold text-orange-600 shadow-sm border border-orange-100 uppercase tracking-wide">
                New
              </span>
              <span className="text-sm font-medium text-slate-600 flex items-center gap-1">
                GPT-4o Integration Live <ArrowRight className="w-3 h-3" />
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Crack the <br />
              <span className="relative inline-block text-orange-600">
                Code Interview
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-orange-200"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              The world's smartest AI interviewer. Get real-time feedback on
              your coding, system design, and behavioral answers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="group h-14 px-8 bg-orange-600 hover:bg-orange-700 rounded-2xl font-semibold text-white transition-all duration-300 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Start Mock Interview
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group h-14 px-8 bg-white border border-slate-200 hover:border-orange-200 hover:bg-orange-50/50 rounded-2xl font-semibold text-slate-700 transition-all duration-300 flex items-center justify-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-orange-100 rounded-full group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-orange-600 fill-orange-600" />
                </div>
                <span>How it works</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-slate-100">
              <p className="text-sm font-medium text-slate-500 mb-4">
                Trusted by engineers from
              </p>
              <div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simple text logos for demo */}
                {companies.map((company, i) => (
                  <span
                    key={i}
                    className="text-lg font-bold font-mono text-slate-400 hover:text-orange-600 transition-colors cursor-default"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content: Advanced Visual Composition */}
          <div
            className={`relative perspective-[1000px] transition-all duration-1000 delay-200 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
            {/* Main Interface Window */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-float">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4 flex-1 h-6 bg-white border border-slate-200 rounded-md flex items-center px-3 gap-2">
                  <ShieldCheck className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] text-slate-400 font-medium">
                    preppilot.ai/session/live
                  </span>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-6 bg-slate-50/30">
                <div className="flex gap-6">
                  {/* Left Col: Code/Video */}
                  <div className="flex-1 space-y-4">
                    <div className="bg-slate-900 rounded-xl p-4 shadow-inner">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-orange-400" />
                          <span className="text-xs text-slate-400 font-mono">
                            solution.js
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500">
                          Read-only
                        </span>
                      </div>
                      <div className="space-y-2 font-mono text-xs relative">
                        {/* Scanning Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent h-[50%] animate-scan pointer-events-none"></div>

                        <div className="text-purple-400">
                          function{" "}
                          <span className="text-blue-400">optimizeRoute</span>
                          (graph) {"{"}
                        </div>
                        <div className="text-slate-400 pl-4 group/line cursor-help relative">
                          const visited = new{" "}
                          <span className="text-orange-400">Set</span>();
                          {/* Connected Annotation Popover */}
                          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-48 z-30 hidden lg:block">
                            <div className="flex items-center">
                              {/* Connecting Line */}
                              <div className="h-[1px] w-4 bg-orange-400/50"></div>
                              <div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>

                              {/* Glass Card */}
                              <div className="ml-[-3px] bg-slate-900/90 backdrop-blur-md border border-slate-700/50 p-2.5 rounded-lg shadow-xl animate-fade-in">
                                <div className="flex items-center gap-2 mb-1">
                                  <Zap className="w-3 h-3 text-orange-400" />
                                  <span className="text-[10px] font-bold text-orange-100">
                                    Optimization Tip
                                  </span>
                                </div>
                                <p className="text-[10px] text-slate-300 leading-tight">
                                  Use a BitSet for O(1) space complexity here.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-slate-400 pl-4 relative group/complexity">
                          let minCost ={" "}
                          <span className="text-orange-400">Infinity</span>;
                          {/* NEW: Time Complexity Card (Left side) */}
                          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 w-40 z-30 hidden lg:block">
                            <div className="flex items-center justify-end">
                              {/* Glass Card */}
                              <div className="mr-[-3px] bg-slate-900/90 backdrop-blur-md border border-slate-700/50 p-2.5 rounded-lg shadow-xl animate-float-shallow">
                                <div className="flex items-center gap-2 mb-1">
                                  <Clock className="w-3 h-3 text-blue-400" />
                                  <span className="text-[10px] font-bold text-blue-100">
                                    Time Complexity
                                  </span>
                                </div>
                                <p className="text-[10px] text-slate-300 leading-tight">
                                  Current:{" "}
                                  <span className="text-orange-400 font-mono">
                                    O(N log N)
                                  </span>
                                </p>
                              </div>

                              {/* Connecting Line */}
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                              <div className="h-[1px] w-4 bg-blue-400/50"></div>
                            </div>
                          </div>
                        </div>
                        <div className="text-slate-400 pl-4 animate-pulse">
                          |
                        </div>
                        <div className="text-purple-400">{"}"}</div>
                      </div>
                    </div>

                    {/* Live Transcription with Waveform */}
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                      <div className="flex gap-3 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 border border-indigo-100">
                          <Users className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-xs font-semibold text-slate-700">
                              You said:
                            </p>
                            {/* Mini Audio Visualizer */}
                            <div className="flex items-end gap-[2px] h-3">
                              {[...new Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-[2px] bg-orange-400 rounded-full animate-bounce"
                                  style={{
                                    height: `${[40, 70, 100, 60, 30][i]}%`,
                                    animationDelay: `${i * 0.1}s`,
                                  }}
                                ></div>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 leading-snug">
                            "I'd assume a greedy approach first, navigating to
                            the nearest unvisited node..."
                          </p>
                        </div>
                      </div>
                      {/* Interaction Highlight */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/0 via-orange-400/50 to-orange-400/0 opacity-50"></div>

                      {/* NEW: Speech Analysis Tag */}
                      <div className="absolute top-2 right-2 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full flex items-center gap-1 animate-fade-in">
                        <Timer className="w-3 h-3 text-green-600" />
                        <span className="text-[10px] font-medium text-green-700">
                          Pace: Perfect
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Col: AI Feedback Sidebar (Replaces detailed video) */}
                  <div className="w-24 flex flex-col gap-3">
                    <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 p-2 flex flex-col items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      <div className="text-[10px] text-slate-400 font-medium text-center">
                        AI Active
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 p-2 flex flex-col items-center shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-1">
                        <BrainCircuit className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">
                        92%
                      </span>
                      <span className="text-[8px] text-slate-400">Logic</span>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 p-2 flex flex-col items-center shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">
                        Clear
                      </span>
                      <span className="text-[8px] text-slate-400">Speech</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements replacing floaters */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-32 bg-orange-500/10 blur-xl rounded-full pointer-events-none"></div>

            {/* Decorative Background Blur for Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-200/20 blur-3xl rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
