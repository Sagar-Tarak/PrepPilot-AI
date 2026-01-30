import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Play,
  Mic,
  Code2,
  Zap,
  TrendingUp,
  Brain,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  Target,
} from "lucide-react";
import ROUTES from "../../../../config/routes";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const rotatingWords = [
    "Frontend",
    "Backend",
    "Full Stack",
    "React.js",
    "Node.js",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Code2,
      title: "Role-Based Prep",
      description:
        "Dynamic generation tailored to your specific target roles and tech stack.",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "Adaptive Engine",
      description:
        "Difficulty shifts in real-time based on your performance, just like a real interviewer.",
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Brain,
      title: "Gemini Analysis",
      description:
        "Detailed 1-10 scoring and feedback on strengths and weaknesses.",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-32 pb-16"
    >
      {/* Radial Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-50 via-white to-white"></div>

        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
            linear-gradient(to right, #f97316 1px, transparent 1px),
            linear-gradient(to bottom, #f97316 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Leaky Code Decoration - Interactive */}
        <div className="absolute top-28 left-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 font-mono text-sm text-slate-800 rotate-12 select-none z-0 hover:scale-110 cursor-crosshair">
          <div className="text-orange-600">const</div> journey ={" "}
          <span className="text-blue-600">new</span> Path();
          <div>
            journey.<span className="text-purple-600">findStructure</span>();
          </div>
        </div>
        <div className="absolute bottom-40 right-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 font-mono text-xs text-slate-800 -rotate-6 select-none z-0 hover:scale-110 cursor-crosshair">
          <div>
            <span className="text-purple-600">while</span>(uncertainty) {"{"}
          </div>
          <div className="pl-4">
            learning.<span className="text-blue-600">getStructured</span>();
          </div>
          <div>{"}"}</div>
        </div>
        <div className="absolute bottom-10 left-10 opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 font-mono text-xs text-slate-600 rotate-3 select-none hidden sm:block z-0 hover:scale-110 cursor-crosshair">
          <div>
            $ git commit -m{" "}
            <span className="text-green-600">"clarity_achieved"</span>
          </div>
          <div>$ git push origin master</div>
        </div>
        <div className="absolute top-36 right-[10%] opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 font-mono text-xs text-slate-400 -rotate-12 select-none blur-[0.5px] z-0 hover:scale-110 cursor-crosshair hover:blur-0">
          <span className="text-orange-500">// End the chaos</span>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Centered Content */}
        <div
          className={`text-center space-y-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-100 to-orange-50 border-2 border-orange-200 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
            <span className="text-sm font-black text-orange-700 uppercase tracking-wider">
              Your Path from Chaos to Clarity
            </span>
          </div>

          {/* Massive Headline with Rotating Words */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none">
              Escape The
            </h1>
            <div className="relative h-24 md:h-32 overflow-hidden">
              {rotatingWords.map((word, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                    idx === currentWord
                      ? "opacity-100 translate-y-0"
                      : idx < currentWord
                        ? "opacity-0 -translate-y-full"
                        : "opacity-0 translate-y-full"
                  }`}
                >
                  <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500">
                    {word}
                  </span>
                </div>
              ))}
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none">
              Mastery Begins
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Stop guessing if you're "ready." Built with the MERN stack and
            Google Gemini, we provide{" "}
            <strong>structured, role-based practice</strong> for junior to
            mid-level developers (0–5 years) that dynamically evaluates answers
            and tracks progression in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to={ROUTES.LOGIN}
              className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-2xl font-black text-white text-lg shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all duration-300 hover:scale-105 flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <Zap className="w-6 h-6" />
              Start Free Interview
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>

            <button className="px-10 py-5 bg-white border-2 border-slate-300 hover:border-orange-400 hover:bg-orange-50 rounded-2xl font-bold text-slate-700 text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Feature Cards - Horizontal Layout */}
          <div className="grid md:grid-cols-3 gap-6 pt-12 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group relative bg-white border-2 border-slate-200 hover:border-${feature.color}-300 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-orange-600 transition-colors">
                    Learn more
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-12 gap-y-6 px-10 py-8 bg-gradient-to-r from-slate-50 to-slate-100 border-2 border-slate-200 rounded-3xl shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-slate-900 leading-none">
                  Structure
                </div>
                <div className="text-sm text-slate-500 mt-1">
                  End the chaos.
                </div>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-slate-300"></div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-slate-900 leading-none">
                  Clarity
                </div>
                <div className="text-sm text-slate-500 mt-1">See the gaps.</div>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-slate-300"></div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-slate-900 leading-none">
                  Mastery
                </div>
                <div className="text-sm text-slate-500 mt-1">Own the role.</div>
              </div>
            </div>
          </div>

          {/* Visual Preview - Bottom */}
          <div className="relative max-w-4xl mx-auto pt-8">
            <div className="relative bg-slate-950 rounded-3xl shadow-2xl border-2 border-slate-800 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm font-mono text-slate-400">
                    preppilot-ai
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-green-400">
                    LIVE SESSION
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-8 font-mono text-sm space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-400">$</span>
                  <span className="text-slate-300">
                    preppilot start --mode=voice --difficulty=senior
                  </span>
                </div>

                <div className="pl-6 space-y-2 text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>AI Interviewer initialized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>
                      Session ID:{" "}
                      <span className="text-orange-400">0x4f2a3c1b</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                    </div>
                    <span className="text-blue-400">Listening...</span>
                  </div>
                </div>

                {/* Code Block */}
                <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 mt-4">
                  <div className="text-purple-400">
                    <span className="text-slate-500">// Your solution</span>
                  </div>
                  <div className="text-purple-400">
                    function{" "}
                    <span className="text-blue-400">optimizeQuery</span>(data){" "}
                    {"{"}
                  </div>
                  <div className="text-slate-400 pl-4">
                    return data.<span className="text-orange-400">filter</span>
                    (item =&gt; item.active)
                  </div>
                  <div className="text-slate-400 pl-8">
                    .<span className="text-orange-400">map</span>(item =&gt;
                    item.value);
                  </div>
                  <div className="text-purple-400">{"}"}</div>

                  {/* AI Feedback Inline */}
                  <div className="mt-3 flex items-start gap-2 bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <Sparkles className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-green-400">
                      <span className="font-bold">AI Feedback:</span> Great use
                      of functional programming! Consider using reduce() for
                      better performance.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};
