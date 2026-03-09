import React from "react";
import EdinaiSidebar from "./EdinaiSidebar";
import HeroSection from "./components/HeroSection";
import PageHeader from "../../components/PageHeader";
import Edinaichallenges from "./components/Edinaichallenges";

const EdInaiPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar - Fixed on left */}
      <EdinaiSidebar />

      {/* Main Content Area - All components on right side */}
      <div className="lg:ml-[280px] flex-1">
        <PageHeader
          title="EdInai"
          showBackButton={true}
          showPriceButton={false}
          showHomeButton={true}
          showMenuButton={true}
          showBorder={false}
          headerClassName="bg-gradient-to-r from-[#141414]/90 via-white/5 to-[#141414]/90 backdrop-blur-xl"
        />
        <HeroSection />
        <Edinaichallenges />
     
      </div>
    </div>
  );
};

export default EdInaiPage;
