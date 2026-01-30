import React, { useState, useEffect } from "react";
import {
  Brain,
  Target,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  Zap,
  Layers,
  Code,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Clock,
  ChevronRight,
  ShieldAlert,
  GraduationCap,
} from "lucide-react";

const TypewriterText = ({ text, delay = 50, startDelay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);
    return () => clearInterval(timer);
  }, [text, delay, started]);

  return (
    <span className="font-mono text-orange-600">
      {displayText}
      <span className="animate-pulse ml-1 inline-block bg-orange-600 w-2 h-4 align-middle"></span>
    </span>
  );
};

export const FeaturesHighlightsSection = () => {
  const [activeQuestionStep, setActiveQuestionStep] = useState(0);

  // Simple animation loop for the first feature
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuestionStep((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background (Matching Hero) */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none"></div>
        {/* Subtle Blobs */}
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-[100px] translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50/40 rounded-full blur-[100px] -translate-x-1/3 pointer-events-none"></div>

        {/* Leaky Code Decoration - Interactive on Hover */}
        <div className="absolute top-[15%] left-4 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 font-mono text-sm text-slate-800 rotate-12 select-none z-0 hover:scale-110 cursor-crosshair">
          <div>
            &lt;<span className="text-orange-600">Component</span> prop={"{"}idx
            {"}"} /&gt;
          </div>
          <div>
            &lt;<span className="text-orange-600">div</span> className="flex"
            /&gt;
          </div>
        </div>
        <div className="absolute top-[45%] right-8 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 font-mono text-sm text-slate-800 -rotate-12 select-none z-0 hover:scale-110 cursor-crosshair">
          <div>
            <span className="text-purple-600">import</span> {"{"} useState {"}"}{" "}
            <span className="text-purple-600">from</span> "react";
          </div>
          <div>
            <span className="text-blue-600">const</span> [val, set] =
            useState(0);
          </div>
        </div>
        <div className="absolute bottom-[20%] left-10 opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 font-mono text-xs text-slate-500 rotate-6 select-none hidden md:block z-0 hover:scale-110 cursor-crosshair">
          <div>
            <span className="text-blue-600">SELECT</span> *{" "}
            <span className="text-blue-600">FROM</span> users
          </div>
          <div>
            <span className="text-blue-600">WHERE</span> skill_level &gt; 9000;
          </div>
        </div>
        <div className="absolute top-[70%] right-[15%] opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 font-mono text-xs text-slate-500 -rotate-3 select-none hidden md:block z-0 hover:scale-110 cursor-crosshair">
          <div>{"{"}</div>
          <div className="pl-4">
            "status": <span className="text-green-600">"ready"</span>,
          </div>
          <div className="pl-4">
            "clarity": <span className="text-orange-600">"achieved"</span>
          </div>
          <div>{"}"}</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg mb-8 shadow-sm">
            <span className="text-xs font-mono font-bold text-green-400">
              <span className="mr-2 text-slate-500">$</span>
              <TypewriterText
                text="cat developer_journey.md | clarity"
                delay={60}
              />
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            Stop learning <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
              in circles
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            You've watched the tutorials. You've read the docs. But you still
            don't feel "ready." We break the cycle of tutorial hell by providing
            the structured feedback and real-world pressure you actually need.
          </p>
        </div>

        <div className="space-y-40">
          {/* Feature 1: Adaptive Question Engine */}
          <div className="group grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Visual */}
            <div className="relative order-2 lg:order-1 perspective-1000">
              {/* Abstract decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 to-amber-500/5 rounded-[2.5rem] -z-10 blur-2xl opacity-60"></div>

              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 ring-1 ring-slate-900/5 rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all duration-700 hover:rotate-y-[2deg] hover:scale-[1.005]">
                {/* Window Controls */}
                <div className="h-14 border-b border-slate-200/50 bg-slate-50/50 flex items-center justify-between px-6 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-inner"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/80 shadow-inner"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80 shadow-inner"></div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                      Live Session
                    </span>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-b from-slate-50/50 to-white/50">
                  {/* Progress Stats */}
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Target Role
                      </p>
                      <div className="flex items-center gap-2 font-bold text-slate-800 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                        <Code className="w-4 h-4 text-orange-600" />
                        Senior Frontend Dev
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Current Difficulty
                      </p>
                      <div className="flex items-center justify-end gap-1.5 text-amber-600 font-bold bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100">
                        <Brain className="w-4 h-4" />
                        Adaptive (High)
                      </div>
                    </div>
                  </div>

                  {/* Animated Cards */}
                  <div className="relative h-56 perspective-1000">
                    {[0, 1, 2].map((step) => (
                      <div
                        key={step}
                        className={`absolute inset-0 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) transform origin-top ${
                          activeQuestionStep === step
                            ? "opacity-100 rotate-x-0 translate-y-0 scale-100 z-10"
                            : activeQuestionStep > step
                              ? "opacity-0 rotate-x-12 -translate-y-12 scale-90 z-0"
                              : "opacity-0 rotate-x--12 translate-y-12 scale-95 z-0"
                        }`}
                      >
                        <div className="h-full p-6 bg-white rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-200/40 flex flex-col justify-center relative overflow-hidden group/card">
                          {/* Card Highlight */}
                          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-amber-500"></div>

                          <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 font-bold text-sm shadow-inner font-mono">
                              0{step + 1}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2 py-1 rounded-full text-white shadow-sm ${step === 2 ? "bg-red-500" : step === 1 ? "bg-amber-500" : "bg-green-500"}`}
                            >
                              {step === 2
                                ? "HARD"
                                : step === 1
                                  ? "MEDIUM"
                                  : "EASY"}
                            </span>
                          </div>
                          <p className="text-lg font-medium text-slate-700 leading-relaxed font-serif tracking-wide italic">
                            {step === 0 &&
                              `"Describe the difference between server-side rendering and static site generation."`}
                            {step === 1 &&
                              `"How would you optimize the critical path rendering for a high-traffic dashboard?"`}
                            {step === 2 &&
                              `"Design a real-time collaboration service. How do you handle conflict resolution?"`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Processing Indicator */}
                  <div className="mt-8 flex items-center justify-between text-[10px] uppercase font-bold text-slate-400 border-t border-slate-100 pt-4 tracking-widest">
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-3 h-3 animate-spin text-orange-400" />
                      AI Analyzing Context
                    </span>
                    <span className="font-mono">45ms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-wide text-sm uppercase">
                <Brain className="w-5 h-5" />
                <span>The Engine</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Structure out <br className="hidden lg:block" />
                <span className="relative">
                  of the noise
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-orange-200"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                The hardest part of learning isn't the code—it's knowing what to
                learn next. Our adaptive engine cuts through the noise of
                infinite tabs by path-finding exactly what you're missing.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "Targeted Role Prep",
                    desc: "Tailored for Frontend, Backend, or Fullstack roles.",
                  },
                  {
                    title: "Experience Sensitive",
                    desc: "Adaptive questions for 0–5 years experience.",
                  },
                  {
                    title: "Tech Stack Focus",
                    desc: "Drill down into React, Node.js, or MERN specifics.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-orange-100 hover:shadow-md transition-all group/item"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover/item:border-orange-500 group-hover/item:bg-orange-500 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 2: Smart Answer Evaluation */}
          <div className="group grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-wide text-sm uppercase">
                <Target className="w-5 h-5" />
                <span>Feedback Loop</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                AI feedback <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  and 1-10 scoring
                </span>
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                No more "I think I know this." Get the ultimate clarity on your
                performance with detailed breakdowns that highlight precisely
                where you thrive and where you struggle.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-lg transition-shadow">
                  <Zap className="w-6 h-6 text-orange-600 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    1-10
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    Auto-Grading Score
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                  <ShieldAlert className="w-6 h-6 text-slate-600 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    100%
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    Gap Analysis
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-2 text-slate-500 text-sm font-medium cursor-pointer hover:text-orange-600 transition-colors w-fit group/link">
                See how grading works{" "}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 to-indigo-500/5 rounded-[2.5rem] -z-10 blur-2xl opacity-60"></div>

              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 ring-1 ring-slate-900/5 rounded-[2.5rem] shadow-2xl overflow-hidden p-8">
                <div className="flex flex-col gap-6">
                  {/* Header Score Block */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-200/50">
                    <div className="flex items-center gap-5">
                      <div className="relative w-24 h-24 group/chart">
                        <svg className="w-full h-full transform -rotate-90 drop-shadow-xl">
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="#f1f5f9"
                            strokeWidth="8"
                            fill="transparent"
                          />
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="url(#score-gradient)"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray="251"
                            strokeDashoffset="40"
                            strokeLinecap="round"
                            className="transition-all duration-1000 ease-out group-hover/chart:stroke-dashoffset-0"
                          />
                          <defs>
                            <linearGradient
                              id="score-gradient"
                              x1="1"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop offset="0%" stopColor="#f97316" />
                              <stop offset="100%" stopColor="#f59e0b" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-black text-slate-900">
                            8.5
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">
                            Score
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xl font-black text-slate-800">
                          Detailed Analysis
                        </div>
                        <div className="text-sm text-slate-500 font-medium mt-1">
                          AI-driven insights on your response
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feedback Items with Hover Effects */}
                  <div className="space-y-4">
                    <div className="group/item p-4 bg-gradient-to-r from-emerald-50/80 to-teal-50/80 border border-emerald-100/60 rounded-xl hover:shadow-md transition-all cursor-default relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-bl-full -mr-4 -mt-4"></div>
                      <div className="flex gap-4 relative z-10">
                        <div className="mt-1 w-8 h-8 rounded-full bg-white border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-slate-800 mb-1">
                            Strong Technical Depth
                          </h5>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            You accurately identified the trade-offs between
                            O(n) memory and O(1) computation time.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group/item p-4 bg-gradient-to-r from-orange-50/80 to-amber-50/80 border border-orange-100/60 rounded-xl hover:shadow-md transition-all cursor-default relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full -mr-4 -mt-4"></div>
                      <div className="flex gap-4 relative z-10">
                        <div className="mt-1 w-8 h-8 rounded-full bg-white border border-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm group-hover/item:scale-110 transition-transform">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-slate-800 mb-1">
                            Tip: Use More Terminology
                          </h5>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            Try using standard terms like "idempotency" when
                            describing the API retry logic.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Progress & Topics */}
          <div className="group grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-orange-500/10 rounded-[2.5rem] -z-10 blur-2xl opacity-60"></div>

              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 ring-1 ring-slate-900/5 rounded-[2.5rem] shadow-2xl overflow-hidden p-8">
                <div className="flex justify-between items-end mb-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        Total Readiness
                      </p>
                    </div>
                    <div className="text-6xl font-black text-slate-800 flex items-baseline gap-3 tracking-tight">
                      78%
                      <span className="text-sm font-bold text-green-600 flex items-center gap-1 bg-green-100 px-2.5 py-1 rounded-full border border-green-200">
                        <TrendingUp className="w-3 h-3" /> +12%
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all cursor-pointer group/icon">
                      <Clock className="w-5 h-5 text-slate-400 group-hover/icon:text-orange-500 transition-colors" />
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center justify-between">
                  <span>Topic Mastery</span>
                  <span className="text-slate-500">Last 30 Days</span>
                </p>
                <div className="space-y-5">
                  {[
                    {
                      label: "Algorithms",
                      val: 92,
                      color: "bg-gradient-to-r from-orange-500 to-amber-500",
                    },
                    {
                      label: "System Design",
                      val: 65,
                      color: "bg-gradient-to-r from-blue-500 to-indigo-500",
                    },
                    {
                      label: "React Patterns",
                      val: 88,
                      color: "bg-gradient-to-r from-cyan-500 to-teal-500",
                    },
                    {
                      label: "Database Scaling",
                      val: 45,
                      color: "bg-gradient-to-r from-slate-500 to-slate-400",
                    },
                  ].map((topic, i) => (
                    <div key={i} className="group/bar">
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-slate-700">{topic.label}</span>
                        <span className="text-slate-500 font-mono">
                          {topic.val}%
                        </span>
                      </div>
                      <div
                        className={`h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200`}
                      >
                        <div
                          className={`h-full ${topic.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                          style={{ width: `${topic.val}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-wide text-sm uppercase">
                <GraduationCap className="w-5 h-5" />
                <span>Growth Analytics</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Track your skill <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  progression over time
                </span>
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Watch the chaos disappear. Our dashboard transforms raw practice
                into a clear, visual map of your progress. Finally, you'll know
                exactly when you're ready for the big day.
              </p>

              <div className="pt-2 grid grid-cols-1 gap-2">
                {[
                  "Historical performance tracking across all sessions",
                  "Topic-level drill downs (e.g., 'Concurrency' vs 'Caching')",
                  "Interview readiness score based on industry standards",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group/list"
                  >
                    <div className="w-2 h-2 mt-2 rounded-full bg-slate-300 group-hover/list:bg-orange-500 flex-shrink-0 transition-colors"></div>
                    <p className="text-slate-700 font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
