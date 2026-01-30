import React, { useState } from "react";
import DashboardLayout from "../Shared/Layouts/DashboardLayout";
import ArchiveHeader from "./components/ArchiveHeader";
import FilterBar from "./components/FilterBar";
import HistoryTable from "./components/HistoryTable";

const History = () => {
  const [filter, setFilter] = useState("All");

  const sessions = [
    {
      id: "S-0x4A2",
      topic: "React Hooks",
      date: "Jan 28, 2024",
      duration: "18m",
      questions: 5,
      score: 8.9,
      difficulty: "Medium",
      status: "Optimized",
    },
    {
      id: "S-0x3B9",
      topic: "Node.js Streams",
      date: "Jan 25, 2024",
      duration: "24m",
      questions: 7,
      score: 7.2,
      difficulty: "Hard",
      status: "Stable",
    },
    {
      id: "S-0x1C4",
      topic: "System Design",
      date: "Jan 20, 2024",
      duration: "45m",
      questions: 3,
      score: 9.4,
      difficulty: "Hard",
      status: "Elite",
    },
    {
      id: "S-0x9D2",
      topic: "JavaScript Closures",
      date: "Jan 15, 2024",
      duration: "12m",
      questions: 4,
      score: 6.8,
      difficulty: "Easy",
      status: "Stabilising",
    },
    {
      id: "S-0x8E1",
      topic: "Redux Architecture",
      date: "Jan 10, 2024",
      duration: "32m",
      questions: 6,
      score: 8.1,
      difficulty: "Medium",
      status: "Optimized",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <ArchiveHeader />
        <FilterBar filter={filter} setFilter={setFilter} />
        <HistoryTable sessions={sessions} />
      </div>
    </DashboardLayout>
  );
};

export default History;
