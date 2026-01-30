import React from "react";
import { Target, Cpu, Layers, Terminal } from "lucide-react";

const AuthSidebar = ({
  title,
  subtitle,
  highlight,
  features,
  metadata,
  isLoaded,
}) => (
  <div className="relative hidden lg:flex lg:w-1/2 bg-slate-950 items-center justify-center p-20 overflow-hidden h-screen">
    {/* Dynamic Background Detail */}
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-x-[-20%] inset-y-[-20%] w-[140%] h-[140%] opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
          backgroundSize: "100px 100px",
          transform: "perspective(1000px) rotateX(60deg) translateY(-20%)",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
    </div>

    <div
      className={`relative z-10 w-full max-w-lg space-y-12 transition-all duration-1000 ${
        isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      }`}
    >
      {/* Branding Hub */}
      <div className="flex items-center gap-5 mb-12">
        <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(234,88,12,0.3)] hover:rotate-12 transition-all cursor-pointer">
          <Target className="w-9 h-9 text-white" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
            PrepPilot<span className="text-orange-600">.</span>AI
          </h2>
          <span className="text-[10px] font-mono text-orange-500 uppercase tracking-[0.5em] mt-2 font-black">
            v1.0.4 {metadata.module}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-7xl font-black text-white tracking-tighter uppercase leading-[0.85]">
          {title}
          <br />
          <span className="text-orange-500">{highlight}</span>
          <br />
          {subtitle}
        </h1>
        <p className="text-slate-400 text-lg font-medium max-w-sm border-l-2 border-orange-500/30 pl-6 py-2">
          {metadata.description}
        </p>
      </div>

      {/* Feature Pills */}
      <div className="flex flex-wrap gap-4 pt-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:border-orange-500/40 transition-all font-black uppercase tracking-widest text-[10px]"
          >
            <feature.icon className="w-4 h-4 text-orange-500" />
            <span className="text-slate-300">{feature.label}</span>
          </div>
        ))}
      </div>

      {/* System Status metadata */}
      <div className="absolute bottom-[-40px] left-0 flex items-center gap-8 opacity-20">
        {metadata.status.map((s, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-[8px] font-mono text-slate-500 uppercase">
              {s.label}
            </span>
            <span
              className={`text-[10px] font-mono uppercase font-black tracking-widest ${
                s.active ? "text-green-500 animate-pulse" : "text-white"
              }`}
            >
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Outer Grid Decor */}
    <div className="absolute bottom-0 right-0 p-12 opacity-[0.03]">
      <Terminal className="w-64 h-64 -rotate-12 text-white" />
    </div>
  </div>
);

export default AuthSidebar;
