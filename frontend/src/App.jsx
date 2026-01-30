import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./Features/Landing/Landing";
import { NotFound } from "./Features/NotFound/NotFound";
import ROUTES from "./config/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Landing />} />
        {/* Add more routes here as needed */}

        {/* 404 - Not Found Route (must be last) */}
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
