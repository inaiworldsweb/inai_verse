import React from "react";
import EdinaiSidebar from "./components/EdinaiSidebar";
import HeroSection from "./components/HeroSection";
import EdInaiNavbar from "./components/EdInaiNavbar";
import Edinaichallenges from "./components/Edinaichallenges";
import WhatIsEdInai from "./components/WhatIsEdInai";
import "./components/EdInai.css"
import EdInaiPlatform from "./components/EdInaiPlatform";
import ExaminationEngine from "./components/ExaminationEngine";
import SmartFaculties from "./components/SmartFaculties";
import PersonalisedLearning from "./components/PersonalisedLearning";
import EdInaiWork from "./components/EdInaiWork";
import EdInaiPowerfulLearning from "./components/EdInaiPowerfulLearning";
import EdInaiTrasform from "./components/EdInaiTrasform";
import WhyTrustEdInai from "./components/WhyTrustEdInai";
import FaqSection from "./components/FaqSection";
import AdaptSection from "./components/AdaptSection";
import StreamsSection from "./components/StreamsSection";
import MissionVision from "./components/MissionVision";
import EdinaiSiteFooter from "./components/EdinaiSiteFooter";

const EdInaiPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar - Fixed on left */}
      <EdinaiSidebar />

      {/* Main Content Area - All components on right side */}
      <div className="lg:ml-[280px] flex-1">
        <EdInaiNavbar
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
        <WhatIsEdInai/>
      
        <SmartFaculties/>
        <EdInaiPlatform/>
        <PersonalisedLearning/>
       
        <ExaminationEngine />
        <EdInaiWork />
         <EdInaiPowerfulLearning />
        <WhyTrustEdInai/>
        <MissionVision/>
        <StreamsSection/>
        <AdaptSection/>
         <EdInaiTrasform />
        <FaqSection/>
        <EdinaiSiteFooter />
       
      </div>
    </div>
  );
};

export default EdInaiPage;
