import React from "react";
import {
  Target,
  History as HistoryIcon,
  TrendingUp,
  BrainCircuit,
} from "lucide-react";
import DashboardLayout from "../Shared/Layouts/DashboardLayout";
import PerformanceMatrix from "./components/PerformanceMatrix";
import RecentAttempts from "./components/RecentAttempts";
import SecondaryModules from "./components/SecondaryModules";
import MissionControl from "./components/MissionControl";

const Dashboard = () => {
  // Mock data for initial UI build
  const stats = [
    {
      name: "Avg Performance",
      value: "8.4",
      icon: Target,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      name: "Sessions Total",
      value: "24",
      icon: HistoryIcon,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      name: "Skill Accuracy",
      value: "92%",
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      name: "AI Feedback",
      value: "A+",
      icon: BrainCircuit,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  const recentSessions = [
    {
      id: "4A2",
      topic: "React Hooks",
      date: "2 Hours Ago",
      score: "8.9",
      status: "Optimized",
    },
    {
      id: "3B9",
      topic: "Node.js Streams",
      date: "1 Day Ago",
      score: "7.5",
      status: "Stable",
    },
    {
      id: "1C4",
      topic: "System Design",
      date: "3 Days Ago",
      score: "9.2",
      status: "Elite",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
        {/* 1. TOP SECTION: MISSION CONTROL HERO */}
        <section>
          <MissionControl />
        </section>

        {/* 2. STATS MATRIX */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 px-4">
            <span className="text-[10px] font-mono text-orange-600 font-extrabold uppercase tracking-[0.4em]">
              Core_Metrics
            </span>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>
          <PerformanceMatrix stats={stats} />
        </section>

        {/* 3. MAIN DASHBOARD CONTENT GRID */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <RecentAttempts attempts={recentSessions} />
          <SecondaryModules />
        </section>

        {/* 4. SYSTEM FOOTER INFO */}
        <footer className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30 pointer-events-none lowercase font-mono text-[9px]">
          <div className="flex items-center gap-6">
            <span>sys_ver: 1.0.4-stable</span>
            <span>uplink: encrypted_aes256</span>
            <span>locale: null_node_01</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            <span>all_systems_nominal</span>
          </div>
        </footer>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
