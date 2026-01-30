import React from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Twitter,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  Terminal,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import ROUTES from "../../../../config/routes";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "// 01__NAV",
      links: [
        { name: "Features", href: "#features" },
        { name: "Architecture", href: "#architecture" },
        { name: "Process", href: "#how-it-works" },
      ],
    },
    {
      title: "// 02__PLATFORM",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "System Status", href: "#status" },
        { name: "Developer API", href: "#api" },
      ],
    },
    {
      title: "// 03__CONNECT",
      links: [
        { name: "Twitter", href: "#twitter" },
        { name: "LinkedIn", href: "#linkedin" },
        { name: "GitHub", href: "#github" },
      ],
    },
  ];

  return (
    <footer className="relative bg-slate-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Structural Blueprint Markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500/20 m-4"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-500/20 m-4"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-orange-500/20 m-4"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500/20 m-4"></div>

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        {/* Brand Centerpiece */}
        <div className="text-center mb-16 group">
          <Link
            to={ROUTES.HOME}
            className="flex items-center justify-center gap-3 mb-4 cursor-pointer"
          >
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/20 group-hover:rotate-12 transition-all">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2">
              PrepPilot<span className="text-orange-600">.</span>AI
              <span className="text-[8px] bg-white/5 px-1.5 py-0.5 rounded text-slate-500 font-mono tracking-tighter">
                MERN_V4
              </span>
            </h3>
          </Link>
          <div className="flex items-center justify-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em]">
              System: Stable //{" "}
              <span className="text-orange-500/50">Gemini_Synced</span>
            </span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="w-full grid md:grid-cols-3 gap-12 mb-20 text-center relative p-8">
          {/* Inner Grid Brackets */}
          <div className="absolute top-0 left-12 w-4 h-4 border-t border-l border-white/5"></div>
          <div className="absolute bottom-0 right-12 w-4 h-4 border-b border-r border-white/5"></div>

          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-[10px] font-mono text-orange-500/70 uppercase tracking-[0.5em] font-black">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm font-bold text-slate-500 hover:text-white transition-all uppercase tracking-widest flex items-center justify-center gap-2 group/link"
                    >
                      <span className="w-1 h-1 bg-white/0 group-hover/link:bg-orange-500 transition-all rounded-full"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter / Contact Action */}
        <div className="w-full max-w-2xl bg-white/[0.02] border border-white/5 rounded-3xl p-8 mb-20 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm relative overflow-hidden group/box">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover/box:opacity-20 transition-opacity">
            <Terminal className="w-24 h-24 text-white -rotate-12" />
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="p-3 bg-slate-900 rounded-2xl border border-white/5">
              <Mail className="w-5 h-5 text-orange-500" />
            </div>
            <div className="text-left">
              <div className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                Stay Synchronized
                <ShieldCheck className="w-3 h-3 text-blue-500" />
              </div>
              <div className="text-[10px] font-mono text-slate-500 mt-1 uppercase">
                Establish_Uplink // v1.0.4_Build
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-auto gap-4 relative z-10">
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="ADMIN@DOMAIN.COM"
                className="bg-transparent border-b border-white/10 px-2 py-2 text-xs font-mono focus:border-orange-500 outline-none flex-1 md:w-48 transition-colors text-orange-500 uppercase tracking-tighter"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-600/10 hover:bg-orange-600 text-orange-600 hover:text-white border border-orange-600/30 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest">
              Init
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Bottom Floor */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                © {currentYear} PrepPilot AI Inc.
              </p>
              <p className="text-[8px] font-mono text-slate-700 uppercase tracking-tighter mt-1">
                SHA-256: 8A2F9BC0...ALPHA_BUILD
              </p>
            </div>
            <div className="hidden sm:block h-3 w-px bg-white/10"></div>
            <div className="flex items-center gap-2">
              <Cpu className="w-3 h-3 text-slate-800" />
              <p className="text-[9px] font-mono text-slate-700 uppercase tracking-[0.2em] italic">
                Architecting Clarity
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-white/5 pr-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 text-slate-600 hover:text-orange-500 transition-colors transform hover:-translate-y-0.5"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500/20 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
              </div>
              <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">
                Secure_Layer
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
