import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Terminal,
  User,
  History,
  BarChart3,
  LogOut,
  Target,
  Menu,
  X,
  Activity,
  Zap,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import ROUTES from "../../../config/routes";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: ROUTES.DASHBOARD, icon: LayoutDashboard },
    { name: "Interview", path: ROUTES.PRACTICE, icon: Terminal },
    { name: "History", path: ROUTES.MOCK_INTERVIEW, icon: History }, // Using MOCK_INTERVIEW for history/attempts
    { name: "Analytics", path: ROUTES.ANALYTICS, icon: BarChart3 },
    { name: "Profile", path: ROUTES.PROFILE, icon: User },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      {/* 1. ARCHITECT SIDEBAR */}
      <aside
        className={`h-full bg-slate-950 text-white transition-all duration-500 ease-in-out relative z-30 flex flex-col
          ${isSidebarOpen ? "w-72" : "w-20"}
        `}
      >
        {/* Branding Area */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <Link to={ROUTES.HOME} className="flex items-center gap-3">
            <div
              className={`w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/20 shrink-0
              ${!isSidebarOpen && "mx-auto"}
            `}
            >
              <Target className="w-6 h-6 text-white" />
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter uppercase leading-none">
                  PrepPilot
                </span>
                <span className="text-[8px] font-mono text-orange-500 uppercase tracking-[0.4em] mt-1">
                  v1.0.4 HUD
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 p-4 space-y-2 mt-4 overflow-y-auto no-scrollbar">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group
                ${
                  isActive(item.path)
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-950/20"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <item.icon
                className={`w-5 h-5 shrink-0 ${isActive(item.path) ? "animate-pulse" : "group-hover:scale-110 transition-transform"}`}
              />
              {isSidebarOpen && (
                <span className="text-sm font-bold uppercase tracking-widest">
                  {item.name}
                </span>
              )}
              {isActive(item.path) && isSidebarOpen && (
                <div className="ml-auto w-1.5 h-6 bg-white rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom Utility Deck */}
        <div className="p-4 border-t border-white/5 space-y-4">
          {isSidebarOpen && (
            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-3 h-3 text-green-500" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Uplink: Nominal
                </span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-orange-600"></div>
              </div>
              <p className="text-[8px] font-mono text-slate-500 mt-2 uppercase tracking-widest">
                Storage: 64% Utilised
              </p>
            </div>
          )}

          <button
            className={`
            w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all
            ${!isSidebarOpen && "justify-center"}
          `}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {isSidebarOpen && (
              <span className="text-sm font-bold uppercase tracking-widest">
                Disconnect
              </span>
            )}
          </button>
        </div>

        {/* Toggle Bar */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-20 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white border-2 border-slate-950 hover:scale-110 transition-transform z-40 shadow-lg"
        >
          {isSidebarOpen ? (
            <X size={12} strokeWidth={4} />
          ) : (
            <Menu size={12} strokeWidth={4} />
          )}
        </button>
      </aside>

      {/* 2. MAIN CONSOLE CONTENT */}
      <main className="flex-1 flex flex-col relative bg-[#fdfdfd] overflow-hidden">
        {/* Top HUD Bar */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 relative z-20 shadow-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.4em] font-black">
                Main_Sequence: {location.pathname.replace("/", "") || "root"}
              </span>
            </div>
            {/* Search Bar / Command Input Placeholder */}
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl w-64 group focus-within:border-orange-200 transition-all">
              <Terminal
                size={14}
                className="text-slate-300 group-focus-within:text-orange-500"
              />
              <input
                type="text"
                placeholder="EXECUTE COMMAND..."
                className="bg-transparent border-none text-[10px] font-mono text-slate-800 placeholder:text-slate-300 outline-none w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] font-black text-slate-900 uppercase leading-none">
                Architect_01
              </span>
              <span className="text-[8px] font-mono text-[orange-600] uppercase tracking-widest mt-1">
                Tier: Elite_Senior
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
              <User className="text-slate-400 w-6 h-6" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-px bg-slate-100"></div>
              <div className="flex flex-col items-center">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="text-[8px] font-mono font-black text-slate-400">
                  92%
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Viewport */}
        <div className="flex-1 overflow-y-auto p-8 relative no-scrollbar">
          {/* Background Grid Accent */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          ></div>

          <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
        </div>

        {/* Global Floating Technical Footer */}
        <footer className="h-10 bg-slate-50 border-t border-slate-100 flex items-center justify-between px-8 text-[8px] font-mono text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-orange-500/50" />
              SECURE_UPLINK::VALID
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-3 h-3 text-orange-500/50" />
              AUTO_SCALE::ACTIVE
            </div>
          </div>
          <div>© PREPPILOT_AI // BUILD: 0x2A4F_2024</div>
        </footer>
      </main>
    </div>
  );
};

export default DashboardLayout;
