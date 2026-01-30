import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Github,
  Chrome,
  Eye,
  EyeOff,
  ArrowRight,
  Zap,
  Target,
  Cpu,
  Layers,
  ShieldCheck,
  Activity,
} from "lucide-react";
import AuthSidebar from "../Shared/AuthSidebar";
import ROUTES from "../../../config/routes";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // DUMMY AUTH LOGIC
    if (email === "admin@gmail.com" && password === "password") {
      console.log("Uplink Established: Access Granted.");
      navigate(ROUTES.DASHBOARD);
    } else {
      alert(
        "CREDENTIAL_INVALID // Access Denied. Use: admin@gmail.com / password",
      );
    }
  };

  const sidebarProps = {
    title: "Build Your",
    highlight: "Future",
    subtitle: "Today.",
    isLoaded,
    features: [
      { icon: Cpu, label: "Neural AI Engine" },
      { icon: Layers, label: "Role-Based Prep" },
    ],
    metadata: {
      module: "ARCHITECT_CORE",
      description:
        "Enterprise-grade AI practice for developers mastering full-stack architecture.",
      status: [
        { label: "System_Load", value: "Nominal // 0.2s" },
        { label: "Uplink", value: "Established", active: true },
      ],
    },
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden font-sans select-none">
      <AuthSidebar {...sidebarProps} />

      {/* RIGHT PANEL: The Authentication Gate (50%) */}
      <div className="flex-1 flex flex-col justify-center bg-white relative">
        {/* Mobile Header */}
        <div className="lg:hidden p-8 absolute top-0 left-0 w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">
              PrepPilot
            </span>
          </div>
        </div>

        <div
          className={`w-full max-w-[540px] mx-auto px-10 md:px-20 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-orange-600 font-black uppercase tracking-[0.4em]">
                Gate::Uplink
              </span>
              <div className="h-px flex-1 bg-slate-100"></div>
              <Activity className="w-4 h-4 text-slate-200 animate-pulse" />
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
              Welcome back<span className="text-orange-600">.</span>
            </h1>
            <p className="text-lg text-slate-400 font-medium">
              Please enter your credentials to begin session.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-8">
              <div className="space-y-3 group">
                <div className="flex items-center gap-3 ml-1">
                  <span className="text-orange-500/40 font-mono text-xs font-black">
                    //
                  </span>
                  <label className="text-[10px] font-mono text-slate-400 group-focus-within:text-orange-500 transition-colors uppercase tracking-[0.4em] font-black">
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 text-slate-900 font-bold placeholder:text-slate-200 focus:border-orange-500 outline-none transition-all text-xl"
                    placeholder="name@developer.ai"
                  />
                  <Mail className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-200 group-focus-within:text-orange-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-3 group">
                <div className="flex items-center justify-between ml-1">
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500/40 font-mono text-xs font-black">
                      //
                    </span>
                    <label className="text-[10px] font-mono text-slate-400 group-focus-within:text-orange-500 transition-colors uppercase tracking-[0.4em] font-black">
                      Password
                    </label>
                  </div>
                  <button
                    type="button"
                    className="text-[10px] font-bold text-orange-600 hover:text-orange-700 uppercase tracking-widest transition-colors mb-0.5 font-mono"
                  >
                    Lost access?
                  </button>
                </div>
                <div className="relative overflow-hidden">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 text-slate-900 font-bold placeholder:text-slate-200 focus:border-orange-500 outline-none transition-all text-xl tracking-widest"
                    placeholder="••••••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-slate-300 hover:text-orange-500 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-16 py-6 bg-slate-950 hover:bg-orange-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-slate-900/10 active:scale-95 group overflow-hidden relative"
              >
                <span className="relative z-10">Log In</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              <div className="flex flex-1 items-center gap-4">
                <div className="h-px flex-1 bg-slate-100"></div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="w-14 h-14 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-slate-50 hover:border-orange-200 transition-all group shadow-sm bg-white"
                  >
                    <Github className="w-6 h-6 text-slate-300 group-hover:text-slate-900 transition-colors" />
                  </button>
                  <button
                    type="button"
                    className="w-14 h-14 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-slate-50 hover:border-orange-200 transition-all group shadow-sm bg-white"
                  >
                    <Chrome className="w-6 h-6 text-slate-300 group-hover:text-slate-900 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 px-1">
            <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-3">
              <Zap className="w-4 h-4 text-orange-500" /> New Architect?
              <Link
                to={ROUTES.SIGNUP}
                className="text-slate-950 font-black hover:text-orange-600 transition-colors border-b-2 border-orange-500/20 hover:border-orange-500 pb-0.5"
              >
                Start Onboarding
              </Link>
            </p>
            <Link
              to={ROUTES.HOME}
              className="text-[11px] font-mono text-slate-300 hover:text-slate-600 flex items-center gap-2 uppercase tracking-widest group transition-all"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />{" "}
              Home_Root
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 flex items-center gap-3 px-4 py-2 opacity-30 pointer-events-none">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">
            AES-256 Validated Uplink
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
