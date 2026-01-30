import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  Github,
  Chrome,
  Eye,
  EyeOff,
  ArrowRight,
  Zap,
  Target,
  CheckCircle2,
  ShieldCheck,
  Activity,
} from "lucide-react";
import AuthSidebar from "../Shared/AuthSidebar";
import ROUTES from "../../../config/routes";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Attempt:", formData);
  };

  const sidebarProps = {
    title: "Start Your",
    highlight: "Journey",
    subtitle: "Now.",
    isLoaded,
    features: [
      { icon: CheckCircle2, label: "Free Initial Session" },
      { icon: Zap, label: "Instant Feedback" },
    ],
    metadata: {
      module: "REGISTER_MODULE",
      description:
        "Join the elite circle of architects mastering technical interviews with power of AI.",
      status: [
        { label: "Latency", value: "0.02ms // OPTIMIZED" },
        { label: "Nodes", value: "Online", active: true },
      ],
    },
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden font-sans select-none">
      <AuthSidebar {...sidebarProps} />

      {/* RIGHT PANEL: The Registration Gate (50%) */}
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
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-orange-600 font-black uppercase tracking-[0.5em]">
                Gate::Onboarding
              </span>
              <div className="h-px flex-1 bg-slate-100"></div>
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase mb-2">
              Create Account<span className="text-orange-600">.</span>
            </h1>
            <p className="text-sm text-slate-400 font-medium">
              Register your identity to begin architectural training.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <div className="space-y-2 group">
                <div className="flex items-center gap-3 ml-1">
                  <span className="text-orange-500/40 font-mono text-xs font-black">
                    //
                  </span>
                  <label className="text-[10px] font-mono text-slate-400 group-focus-within:text-orange-500 transition-colors uppercase tracking-[0.4em] font-black">
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 text-slate-900 font-bold placeholder:text-slate-200 focus:border-orange-500 outline-none transition-all text-lg"
                    placeholder="ALAN TURING"
                  />
                  <User className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-200 group-focus-within:text-orange-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-2 group">
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 text-slate-900 font-bold placeholder:text-slate-200 focus:border-orange-500 outline-none transition-all text-lg"
                    placeholder="name@developer.ai"
                  />
                  <Mail className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-200 group-focus-within:text-orange-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-2 group">
                <div className="flex items-center gap-3 ml-1">
                  <span className="text-orange-500/40 font-mono text-xs font-black">
                    //
                  </span>
                  <label className="text-[10px] font-mono text-slate-400 group-focus-within:text-orange-500 transition-colors uppercase tracking-[0.4em] font-black">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 text-slate-900 font-bold placeholder:text-slate-200 focus:border-orange-500 outline-none transition-all text-lg tracking-widest"
                    placeholder="••••••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-slate-300 hover:text-orange-500 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-12 py-5 bg-slate-950 hover:bg-orange-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-slate-900/10 active:scale-95 group overflow-hidden relative"
              >
                <span className="relative z-10">Sign Up</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              <div className="flex flex-1 items-center gap-4">
                <div className="h-px flex-1 bg-slate-100"></div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-slate-50 hover:border-orange-200 transition-all group shadow-sm bg-white"
                  >
                    <Github className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-slate-50 hover:border-orange-200 transition-all group shadow-sm bg-white"
                  >
                    <Chrome className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 px-1">
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-3">
              <Activity className="w-4 h-4 text-orange-500" /> Already
              Registered?
              <Link
                to={ROUTES.LOGIN}
                className="text-slate-950 font-black hover:text-orange-600 transition-colors border-b-2 border-orange-500/20 hover:border-orange-500 pb-0.5"
              >
                Return_to_Gate
              </Link>
            </p>
            <Link
              to={ROUTES.HOME}
              className="text-[10px] font-mono text-slate-300 hover:text-slate-600 flex items-center gap-2 uppercase tracking-widest group transition-all"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />{" "}
              Home_Root
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 flex items-center gap-3 px-4 py-2 opacity-30 pointer-events-none">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">
            AES-256 Protocol Verified
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
