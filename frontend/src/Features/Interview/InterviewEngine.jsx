import React, { useState } from "react";
import DashboardLayout from "../Shared/Layouts/DashboardLayout";
import SetupView from "./components/SetupView";
import ActiveView from "./components/ActiveView";
import ReviewView from "./components/ReviewView";

const InterviewEngine = () => {
  const [view, setView] = useState("setup"); // setup, active, review
  const [config, setConfig] = useState({
    topic: "React",
    difficulty: "Medium",
    role: "Frontend Developer",
    experience: "2",
  });

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  return (
    <DashboardLayout>
      <div className="py-8">
        {view === "setup" && (
          <SetupView config={config} setConfig={setConfig} setView={setView} />
        )}
        {view === "active" && (
          <ActiveView
            config={config}
            answer={answer}
            setAnswer={setAnswer}
            setView={setView}
            setIsEvaluating={setIsEvaluating}
            isEvaluating={isEvaluating}
          />
        )}
        {view === "review" && <ReviewView setView={setView} />}
      </div>
    </DashboardLayout>
  );
};

export default InterviewEngine;
