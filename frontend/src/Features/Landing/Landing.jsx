import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { HeroSection } from "./Components/sections/HeroSection";
import { FeaturesHighlightsSection } from "./Components/sections/FeaturesHighlightsSection";
import { TechStackSection } from "./Components/sections/TechStackSection";
import { HowItWorksSection } from "./Components/sections/HowItWorksSection";

export const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      <FeaturesHighlightsSection />

      <TechStackSection />

      <HowItWorksSection />

      <Footer />
    </div>
  );
};
