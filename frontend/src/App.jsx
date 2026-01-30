import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./Features/Landing/Landing";
import { Login, Register } from "./Features/Auth";
import Dashboard from "./Features/Dashboard";
import InterviewEngine from "./Features/Interview";
import Profile from "./Features/Profile";
import History from "./Features/History";
import Analytics from "./Features/Analytics";
import { NotFound } from "./Features/NotFound/NotFound";
import ROUTES from "./config/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Landing />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Register />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.PRACTICE} element={<InterviewEngine />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.MOCK_INTERVIEW} element={<History />} />
        <Route path={ROUTES.ANALYTICS} element={<Analytics />} />

        {/* 404 - Not Found Route (must be last) */}
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
