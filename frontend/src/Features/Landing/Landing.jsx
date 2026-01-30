import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { HeroSection } from "./Components/sections/HeroSection";

export const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Feature Highlight Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose PrepPilot AI?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of successful job seekers who have mastered their
            interview skills with our AI-powered platform.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Get started today and transform your interview preparation with
            AI-powered insights.
          </p>
          <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold text-white transition-all duration-200 shadow-sm hover:shadow-md">
            Get Started Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
