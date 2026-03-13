import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "../../../components/SideMenu";
import logoImage from "../../../assets/Inai Verse White Tred mark (1).png";
import { HiX } from "react-icons/hi";

const navItems = [
  "Hero Section",
  "Education Challenges",
  "About Ed-INAI",
  "Smart AI Exam Management System",
  "Why Choose Ed-INAI",
  "Learning Modes Section",
  "Final cTA with form fill-up",
  "FAQ",
];

const EdinaiSidebar = ({ isOpen, setIsOpen }) => {
  const handleSideMenuClick = (item) => {
    const sectionMap = {
      "Hero Section": "hero",
      "Education Challenges": "education-challenges",
      "About Ed-INAI": "about-edinai",
      "Smart AI Exam Management System": "examination-engine",
      "Why Choose Ed-INAI": "why-trust-edinai",
      "Learning Modes Section": "powerful-learning",
      "Final cTA with form fill-up": "edinai-transform",
      FAQ: "faq-section",
    };

    const sectionId = sectionMap[item];
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false); // बंद करने के लिए
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <aside
            className="w-[280px] max-w-[85vw] h-full bg-black border-r border-white/20 shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Inside Sidebar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <HiX className="w-6 h-6" />
            </button>

            <div className="pt-16 px-4">
              <div className="flex items-center justify-center mb-6">
                <Link to="/">
                  <img src={logoImage} alt="Logo" className="w-full max-w-[80px] h-auto" />
                </Link>
              </div>
              <SideMenu items={navItems} variant="login" onSelectItem={handleSideMenuClick} />
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar - Always visible on LG */}
      <aside className="hidden lg:flex border-r border-white/30 lg:flex-col w-[280px] bg-black p-6 xl:p-8 h-screen fixed left-0 top-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center mb-4">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="w-full max-w-[100px] h-auto" />
          </Link>
        </div>
        <SideMenu items={navItems} variant="login" onSelectItem={handleSideMenuClick} />
      </aside>
    </>
  );
};

export default EdinaiSidebar;