import React from "react";
import EdinaiSidebar from "./EdinaiSidebar";
import HeroSection from "./components/HeroSection";
import WhatIsEdInai from "./components/WhatIsEdInai";
import "./components/EdInai.css"
import EdInaiPlatform from "./components/EdInaiPlatform";

const EdInaiPage = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar - Fixed on left */}
      <EdinaiSidebar />

      {/* Main Content Area - All components on right side */}
      <div className="flex-1">
        <HeroSection />
        <WhatIsEdInai/>
        <EdInaiPlatform/>
      </div>
    </div>
  );
};

export default EdInaiPage;
