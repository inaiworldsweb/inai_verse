import React from "react";
import EdinaiSidebar from "./EdinaiSidebar";
import HeroSection from "./components/HeroSection";
import HA from "./components/HA";

const EdInaiPage = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar - Fixed on left */}
      <EdinaiSidebar />

      {/* Main Content Area - All components on right side */}
      <div className="flex-1">
        <HeroSection />
        <HA/>
      </div>
    </div>
  );
};

export default EdInaiPage;
