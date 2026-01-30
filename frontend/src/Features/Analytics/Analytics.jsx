import React from "react";
import DashboardLayout from "../Shared/Layouts/DashboardLayout";
import AnalyticsHeader from "./components/AnalyticsHeader";
import StatsGrid from "./components/StatsGrid";
import SkillMatrix from "./components/SkillMatrix";
import BottleneckAnalysis from "./components/BottleneckAnalysis";
import ProgressStream from "./components/ProgressStream";
import { Zap, Activity, ShieldAlert } from "lucide-react";

const Analytics = () => {
  const skillMetrics = [
    {
      label: "Frontend Architecture",
      score: 92,
      status: "Master",
      color: "bg-orange-600",
    },
    {
      label: "Backend Scalability",
      score: 74,
      status: "Stable",
      color: "bg-blue-600",
    },
    {
      label: "System Design",
      score: 45,
      status: "Critical",
      color: "bg-red-600",
    },
    {
      label: "Data Structures",
      score: 88,
      status: "Advanced",
      color: "bg-green-600",
    },
  ];

  const weaknesses = [
    {
      topic: "Load Balancing Strategies",
      impact: "High",
      icon: ShieldAlert,
      color: "text-red-500",
    },
    {
      topic: "Reductors in React",
      impact: "Medium",
      icon: Zap,
      color: "text-orange-500",
    },
    {
      topic: "Node.js Event Loop",
      impact: "Medium",
      icon: Activity,
      color: "text-blue-500",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
        <AnalyticsHeader />
        <StatsGrid />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SkillMatrix metrics={skillMetrics} />
          <BottleneckAnalysis weaknesses={weaknesses} />
        </div>

        <ProgressStream />
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
