import React, { useState } from "react";
import EdInaiNavbar from "../EdInai/components/EdInaiNavbar";
import EdinaiStudentSidebar from "./components/EdinaiStudentSidebar";
import StudentHero from "./components/StudentHero";
import StudentPersonalised from "./components/StudentPersonalised";
import SmartTools from "./components/SmartTools";
import ExamSystem from "./components/ExamSystem";
import WhyStudentsLove from "./components/WhyStudentsLove";
import StudentPortal from "./components/StudentPortal";

const EdInaiStudentPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <EdinaiStudentSidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="lg:ml-[280px] flex-1">
        <EdInaiNavbar
          title="edInai"
          showBackButton={true}
          showPriceButton={true}
          showHomeButton={true}
          showMenuButton={true}
          showBorder={false}
          onMenuClick={() => setIsSidebarOpen(true)}
          headerClassName="bg-gradient-to-r from-[#141414]/90 via-white/5 to-[#141414]/90 backdrop-blur-xl"
          //bg-gradient-to-r from-[#141414]/90 via-white/5 to-[#141414]/90 backdrop-blur-xl
        />

       <StudentHero/>
       <StudentPersonalised/>
       <SmartTools/>
       <ExamSystem/>
       <WhyStudentsLove/>
       <StudentPortal/>
      </div>
    </div>
  );
};

export default EdInaiStudentPage;
