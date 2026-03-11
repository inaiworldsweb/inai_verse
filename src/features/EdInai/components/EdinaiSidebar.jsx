import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "../../../components/SideMenu";
import logoImage from "../../../assets/Inai Verse White Tred mark (1).png";
import { HiMenu, HiX } from "react-icons/hi";

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

const EdinaiSidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    // Close mobile menu after selection
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button - Fixed position */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="
                    lg:hidden fixed top-4 left-4 z-50
                    p-2.5 bg-[#111] border border-white/10 
                    rounded-xl text-white
                    hover:bg-white/10 transition-colors
                    shadow-lg
                "
        aria-label="Open navigation menu"
      >
        <HiMenu className="w-5 h-5" />
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <aside
            className="
                            w-[280px] max-w-[85vw] h-full bg-black 
                            shadow-2xl
                            overflow-y-auto
                            animate-in slide-in-from-left duration-300
                        "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                                absolute top-4 right-4 p-2 
                                text-white/70 hover:text-white 
                                hover:bg-white/10 rounded-lg
                                transition-colors
                            "
              aria-label="Close navigation menu"
            >
              <HiX className="w-5 h-5" />
            </button>

            {/* Mobile Sidebar Content */}
            <div className="pt-16 px-4">
              <div className="flex items-center justify-center mb-6">
                <Link to="/">
                  <img
                    src={logoImage}
                    alt="INAI Verse logo"
                    className="w-full max-w-[80px] h-auto"
                  />
                </Link>
              </div>
              <SideMenu
                items={navItems}
                variant="login"
                onSelectItem={handleSideMenuClick}
              />
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar - Fixed position */}
      <aside className="hidden lg:flex lg:flex-col w-[280px] bg-black p-6 xl:p-8 h-screen fixed left-0 top-0 overflow-y-auto">
        <div className="flex items-center justify-center mb-4">
          <Link to="/">
            <img
              src={logoImage}
              alt="INAI Verse logo"
              className="w-full max-w-[100px] h-auto"
            />
          </Link>
        </div>
        <SideMenu
          items={navItems}
          variant="login"
          onSelectItem={handleSideMenuClick}
        />
      </aside>
    </>
  );
};

export default EdinaiSidebar;
