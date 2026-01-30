import React, { useState, useEffect } from "react";
import {
  Play,
  Settings,
  BarChart2,
  CheckCircle2,
  Loader2,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Configure Profile",
      description:
        "Setup your profile with your target role, experience level (0-5 years), and specific tech stack like React or Node.js.",
      icon: Settings,
      color: "blue",
      code: "preppilot.setup({ role: 'Junior Frontend' })",
    },
    {
      id: 2,
      number: "02",
      title: "AI Interview Session",
      description:
        "Engage in an adaptive session where Google Gemini generates realistic questions based on your profile and difficulty level.",
      icon: Play,
      color: "orange",
      code: "preppilot.start({ difficulty: 'Medium' })",
    },
    {
      id: 3,
      number: "03",
      title: "Gemini Evaluation",
      description:
        "Receive a 1-10 score, detailed analysis of your strengths and weaknesses, and the ideal answer for every question.",
      icon: BarChart2,
      color: "green",
      code: "preppilot.evaluate({ mode: 'comprehensive' })",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-500",
      lightBg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-500",
      gradient: "from-blue-500 to-blue-600",
    },
    orange: {
      bg: "bg-orange-500",
      lightBg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-500",
      gradient: "from-orange-500 to-orange-600",
    },
    green: {
      bg: "bg-green-500",
      lightBg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-500",
      gradient: "from-green-500 to-green-600",
    },
  };

  useEffect(() => {
    if (isExecuting) {
      const timer = setTimeout(() => {
        if (activeStep < steps.length - 1) {
          setActiveStep(activeStep + 1);
        } else {
          setIsExecuting(false);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeStep, isExecuting]);

  const handleStart = () => {
    setActiveStep(0);
    setIsExecuting(true);
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsExecuting(false);
  };

  return (
    <section
      id="how-it-works"
      className="py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-xs font-mono font-bold text-orange-700 uppercase tracking-wider">
              3-Step Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Works
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From configuration to mastery in three simple steps
          </p>
        </div>

        {/* Compact Progress Indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {steps.map((step, idx) => {
            const colors = colorClasses[step.color];
            const isActive = idx === activeStep;
            const isCompleted = idx < activeStep || !isExecuting;

            return (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => !isExecuting && setActiveStep(idx)}
                  className={`relative group transition-all duration-500 ${isActive ? "scale-110" : "scale-100"}`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                      isActive
                        ? `${colors.bg} text-white shadow-xl ring-4 ring-${step.color}-100`
                        : isCompleted
                          ? `${colors.lightBg} ${colors.text} shadow-md`
                          : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {isActive && isExecuting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : isCompleted && isExecuting ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                </button>

                {idx < steps.length - 1 && (
                  <div className="w-16 h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${colors.bg} transition-all duration-700 ${
                        idx < activeStep ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Compact Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Compact Step Cards */}
          <div className="space-y-4">
            {steps.map((step, idx) => {
              const colors = colorClasses[step.color];
              const isActive = idx === activeStep;

              return (
                <div
                  key={step.id}
                  className={`transition-all duration-500 ${
                    isActive ? "scale-100 opacity-100" : "scale-95 opacity-40"
                  }`}
                >
                  <div
                    className={`bg-white border-2 rounded-xl p-5 transition-all duration-500 ${
                      isActive
                        ? `${colors.border} shadow-xl`
                        : "border-slate-200"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          isActive
                            ? `${colors.bg} shadow-lg`
                            : `${colors.lightBg}`
                        }`}
                      >
                        {isActive && isExecuting ? (
                          <Loader2 className="w-6 h-6 text-white animate-spin" />
                        ) : (
                          <step.icon
                            className={`w-6 h-6 ${isActive ? "text-white" : colors.text}`}
                          />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-black ${colors.text}`}>
                            STEP {step.number}
                          </span>
                          {isActive && isExecuting && (
                            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">
                              Active
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Compact Code Preview */}
                    <div
                      className={`bg-slate-900 rounded-lg p-3 font-mono text-xs ${
                        isActive ? "opacity-100" : "opacity-50"
                      }`}
                    >
                      <code className="text-slate-300">
                        <span className="text-purple-400">$</span> {step.code}
                      </code>
                    </div>

                    {isActive && isExecuting && (
                      <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${colors.gradient} animate-[progress_3s_ease-in-out]`}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Compact Preview */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-slate-950 border-2 border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      preview.jsx
                    </span>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs font-bold ${
                      isExecuting
                        ? "bg-green-500/20 text-green-400"
                        : "bg-slate-800 text-slate-500"
                    }`}
                  >
                    {isExecuting ? "LIVE" : "IDLE"}
                  </div>
                </div>

                <div className="p-6 h-[300px] flex items-center justify-center">
                  {steps.map((step, idx) => {
                    const colors = colorClasses[step.color];
                    const isActive = idx === activeStep;

                    return isActive ? (
                      <div
                        key={step.id}
                        className="text-center animate-in fade-in zoom-in duration-500"
                      >
                        <div
                          className={`inline-flex w-20 h-20 rounded-2xl ${colors.bg} items-center justify-center mb-4 shadow-xl`}
                        >
                          {isExecuting ? (
                            <Loader2 className="w-10 h-10 text-white animate-spin" />
                          ) : (
                            <step.icon className="w-10 h-10 text-white" />
                          )}
                        </div>
                        <h4 className="text-xl font-black text-white mb-2">
                          {step.title}
                        </h4>
                        <p className="text-slate-400 text-sm max-w-xs mx-auto">
                          {step.description}
                        </p>
                        {isExecuting && (
                          <div className="mt-4">
                            <Zap className="w-8 h-8 text-orange-500 mx-auto animate-pulse" />
                          </div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Action Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleStart}
            disabled={isExecuting}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 ${
              isExecuting
                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-xl hover:shadow-orange-500/50 hover:scale-105"
            }`}
          >
            <Play className="w-5 h-5" />
            {isExecuting ? "Running..." : "Watch Demo"}
            <ArrowRight className="w-5 h-5" />
          </button>

          {isExecuting && (
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl font-bold text-base bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
