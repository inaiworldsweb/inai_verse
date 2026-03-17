import React, { useState } from "react";
import EdinaiSidebar from "./components/EdinaiSidebar";
import HeroSection from "./components/HeroSection";
import EdInaiNavbar from "./components/EdInaiNavbar";
import Edinaichallenges from "./components/Edinaichallenges";
import WhatIsEdInai from "./components/WhatIsEdInai";
import "./components/EdInai.css";
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
import FutureSection from "./components/FutureSection";
import DemoModal from "./components/Demo";

const EdInaiPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const toggleDemo = () => setIsDemoOpen(!isDemoOpen);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar - Fixed on left */}
      <EdinaiSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area - All components on right side */}
      <div className="lg:ml-[280px] flex-1">
        <EdInaiNavbar
          title="EdInai"
          showBackButton={true}
          showPriceButton={true}
          showHomeButton={true}
          showMenuButton={true}
          showBorder={false}
          onMenuClick={() => setIsSidebarOpen(true)} // राइट मेनू बटन से साइडबार खुलेगा
          headerClassName="bg-gradient-to-r from-[#141414]/90 via-white/5 to-[#141414]/90 backdrop-blur-xl"
        />
        <HeroSection id="hero" onDemoClick={toggleDemo} />
        <Edinaichallenges id="education-challenges" />
        <WhatIsEdInai id="about-edinai" />

        <SmartFaculties />
        <EdInaiPlatform />
        <PersonalisedLearning />

        <ExaminationEngine id="examination-engine" />
        <WhyTrustEdInai id="why-trust-edinai" />
        <EdInaiWork />
        <MissionVision />

        <EdInaiPowerfulLearning id="powerful-learning" />

        <FutureSection />
        <StreamsSection />
        <AdaptSection />
        <EdInaiTrasform id="edinai-transform" onDemoClick={toggleDemo} />
        <FaqSection id="faq-section" />
        <EdinaiSiteFooter />
      </div>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
};

export default EdInaiPage;
