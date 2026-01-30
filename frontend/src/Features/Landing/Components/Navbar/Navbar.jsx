import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, ChevronDown, Target } from "lucide-react";
import ROUTES from "../../../../config/routes";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "01", name: "FEATURES", href: "#features" },
    { id: "02", name: "ARCH", href: "#architecture" },
    { id: "03", name: "PROCESS", href: "#how-it-works" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none p-4 pt-6">
      {/* The Technical Command Dock */}
      <div
        className={`
          relative flex items-center px-4 py-1.5 rounded-full border bg-slate-950/95 backdrop-blur-3xl transition-all duration-500 pointer-events-auto shadow-2xl
          ${
            isScrolled
              ? "scale-90 border-slate-700/50 -translate-y-2"
              : "scale-100 border-white/10"
          }
        `}
      >
        {/* Module: Branding Interface */}
        <div className="flex items-center gap-3 pr-4 border-r border-white/5">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-600/20 group-hover:rotate-12 transition-all">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black text-white tracking-[0.2em] leading-none uppercase">
                PrepPilot
              </span>
              <span className="text-[7.5px] font-mono text-orange-500 tracking-tighter mt-1 opacity-80 uppercase">
                Core_v1.0.4
              </span>
            </div>
          </a>
        </div>

        {/* Module: Link Array */}
        <div className="hidden lg:flex items-center gap-1 px-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="px-4 py-2 rounded-full group hover:bg-white/5 transition-all"
            >
              <div className="flex flex-col items-center">
                <span className="text-[7.5px] font-mono text-slate-500 group-hover:text-orange-500 transition-colors uppercase leading-none">
                  {link.id}__
                </span>
                <span className="text-[10px] font-bold text-slate-300 group-hover:text-white transition-colors tracking-widest uppercase">
                  {link.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Module: Auth & Action */}
        <div className="flex items-center gap-2 pl-4 border-l border-white/5">
          <Link
            to={ROUTES.LOGIN}
            className="hidden sm:block text-[9px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest px-2"
          >
            Login
          </Link>
          <Link
            to={ROUTES.LOGIN}
            className="relative group bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-lg active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Initialise</span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white opacity-20 transition-all group-hover:h-full"></div>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Aesthetic Corner Markers */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500/30 rounded-tl-lg -translate-x-1 -translate-y-1"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-500/30 rounded-tr-lg translate-x-1 -translate-y-1"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-orange-500/30 rounded-bl-lg -translate-x-1 translate-y-1"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500/30 rounded-br-lg translate-x-1 translate-y-1"></div>
      </div>

      {/* Mobile Technical Overlay */}
      <div
        className={`
        fixed inset-0 bg-slate-950/98 backdrop-blur-3xl lg:hidden transition-all duration-500 flex flex-col items-center justify-center p-12
        ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
      `}
      >
        {/* Close Button Module */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white hover:bg-orange-600 transition-all pointer-events-auto"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-10 w-full max-w-xs relative z-10 text-center">
          <div className="text-[10px] font-mono text-orange-500 uppercase tracking-[0.5em] animate-pulse">
            // Root_Navigation_Link
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex flex-col items-center gap-1"
            >
              <span className="text-[10px] font-mono text-slate-600 group-hover:text-orange-500">
                {link.id}::
              </span>
              <span className="text-4xl font-black text-white group-hover:text-orange-500 transition-all tracking-tighter uppercase">
                {link.name}
              </span>
            </a>
          ))}
          <div className="pt-10 border-t border-white/5 flex flex-col gap-4">
            <Link
              to={ROUTES.LOGIN}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 bg-orange-600 text-white font-black uppercase tracking-widest text-xs rounded-full shadow-2xl block text-center"
            >
              Start session
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 text-[8px] font-mono text-slate-700 uppercase tracking-[0.5em]">
          ID: PP-AI-HUD // MODE: DEV
        </div>
      </div>
    </nav>
  );
};
